import { StringArrayColumn, StringColumn } from "./airtableSchema";
import { AirtableTable } from "./airtableTable";

export type SegmentRecord = {
  id: string;
  name: string;
  notes: string;
  projectId: string;
  fileIds?: string[];
}

export default class AirtableSegmentsTable extends AirtableTable<SegmentRecord> {
  protected tableName = 'Segments';
  protected columns = [
    new StringColumn<SegmentRecord>("Name", "name"),
    new StringColumn<SegmentRecord>("Notes", "notes"),
    new StringColumn<SegmentRecord>("Project", "projectId"),
    new StringArrayColumn<SegmentRecord>("Files", "fileIds", true),
  ]
}
