import type Airtable from 'airtable';

export type Attachment = {
	id?: string;
	url: string;
	filename?: string;
};

export abstract class AirtableColumnSchema<DTOType, AirtableDataType, DTODataType> {
	public readonly columnName: string;
	public readonly fieldName: keyof DTOType;
	public readonly readonly: boolean;

	constructor(columnName: string, fieldName: keyof DTOType, readonly: boolean = false) {
		this.columnName = columnName;
		this.fieldName = fieldName;
		this.readonly = readonly;
	}

	public abstract fromRecord(value: AirtableDataType): DTODataType;
	public abstract toRecord(value: DTODataType): AirtableDataType;
}

export class StringColumn<DTOType> extends AirtableColumnSchema<DTOType, string, string> {
	public toRecord(value: string) {
		return value;
	}
	public fromRecord(value: string) {
		return (value as string) ?? '';
	}
}

export class StringArrayColumn<DTOType> extends AirtableColumnSchema<DTOType, string[], string[]> {
	public toRecord(value: string[]) {
		return value;
	}
	public fromRecord(value: string[]) {
		return (value as string[]) ?? [];
	}
}

export class NumberColumn<DTOType> extends AirtableColumnSchema<DTOType, number, number> {
	public toRecord(value: number) {
		return value;
	}
	public fromRecord(value: number) {
		return (value as number) ?? 0;
	}
}

export class BooleanColumn<DTOType> extends AirtableColumnSchema<DTOType, boolean, boolean> {
	public toRecord(value: boolean) {
		return value;
	}
	public fromRecord(value: boolean) {
		return (value as boolean) ?? false;
	}
}

export class AttachmentColumn<DTOType> extends AirtableColumnSchema<
	DTOType,
	Partial<Airtable.Attachment>[],
	Attachment[]
> {
	public toRecord(value: Attachment[]) {
		return value.map((r) =>
			r.id
				? {
						id: r.id
					}
				: {
						url: r.url
					}
		);
	}
	public fromRecord(value: Airtable.Attachment[]) {
		return (value as Attachment[]) ?? [];
	}
}
