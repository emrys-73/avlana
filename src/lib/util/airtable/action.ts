import { StringArrayColumn, StringColumn } from "./airtableSchema";
import { AirtableTable } from "./airtableTable";

export type ActionRecord = {
  id: string;
  name: string;
  summary: string;
  projectId: string;
  clipIds?: string[];
}

export default class AirtableActionsTable extends AirtableTable<ActionRecord> {
  protected tableName = 'Actions';
  protected columns = [
    new StringColumn<ActionRecord>("Name", "name"),
    new StringColumn<ActionRecord>("Summary", "summary"),
    new StringColumn<ActionRecord>("Project", "projectId"),
    new StringArrayColumn<ActionRecord>("Clips", "clipIds", true),
  ]
}
