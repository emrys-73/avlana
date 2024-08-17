import Airtable, { Record, type FieldSet } from 'airtable';
import type { AirtableColumnSchema } from './airtableSchema';

export abstract class AirtableTable<DTOType extends { id: string }> {
	protected abstract tableName: string;
	protected abstract columns: AirtableColumnSchema<DTOType, any, any>[];

	constructor(protected base: Airtable.Base) {}

	public async getRecord(recordId: string): Promise<DTOType> {
		const genericRecord = await this.getTable().find(recordId);

		if (!genericRecord) {
			throw Error('Not Found');
		}

		return this.convertFromRecord(genericRecord);
	}

	public async getAllRecords(ids: string[] | null = null): Promise<DTOType[]> {
		if (!!ids) {
			return this.getRecords(`SEARCH(RECORD_ID(),"${ids.join(',')}")`);
		}
		return this.getRecords('1');
	}

	public async insertRecord(dto: Partial<DTOType>) {
		const record = this.convertToRecord(dto);
		await this.getTable().create([{ fields: record }]);
	}

	public async insertRecords(dtos: Partial<DTOType>[]) {
		const records = dtos.map((dto) => ({ fields: this.convertToRecord(dto) }));
		await this.getTable().create(records);
	}

	protected getTable() {
		return this.base(this.tableName);
	}

	protected async getRecords(formula: string): Promise<DTOType[]> {
		const records = await this.getTable()
			.select({
				filterByFormula: formula
			})
			.all();
		const results = records.map((r) => this.convertFromRecord(r));
		return results;
	}

	protected convertFromRecord(genericRecord: Record<FieldSet>): DTOType {
		const dto: { [key: string]: any } = {
			id: genericRecord.id
		};
		for (const column of this.columns) {
			dto[column.fieldName as string] = this.convertFromColumn(genericRecord, column);
		}
		return dto as DTOType;
	}

	protected convertToRecord(dto: Partial<DTOType>): { [key: string]: any } {
		const record: { [key: string]: any } = {
			id: dto.id
		};
		for (const column of this.columns) {
			if (column.readonly) continue;
			record[column.columnName] = this.convertForColumn(dto, column);
		}
		return record;
	}

	private convertFromColumn<AirtableDataType, DTODataType>(
		genericRecord: Record<FieldSet>,
		column: AirtableColumnSchema<DTOType, AirtableDataType, DTODataType>
	) {
		const recordValue = genericRecord.get(column.columnName) as AirtableDataType;
		return column.fromRecord(recordValue);
	}

	private convertForColumn<AirtableDataType, DTODataType>(
		dto: Partial<DTOType>,
		column: AirtableColumnSchema<DTOType, AirtableDataType, DTODataType>
	) {
		const dtoValue = dto[column.fieldName] as DTODataType;
		return column.toRecord(dtoValue);
	}
}
