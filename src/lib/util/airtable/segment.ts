import { StringArrayColumn, StringColumn, type LinkedRecord } from "./airtableSchema";
import { AirtableTable } from "./airtableTable";

export type SegmentRecord = {
  id: string;
  name: string;
  notes: string;
  project: LinkedRecord;
  files?: LinkedRecord[];
}

export default class AirtableSegmentsTable extends AirtableTable<SegmentRecord> {
  protected tableName = 'Projects';
  protected columns = [
    new StringColumn<SegmentRecord>("Name", "name"),
    new StringColumn<SegmentRecord>("Notes", "notes"),
    new StringColumn<SegmentRecord>("Project", "project"),
    new StringArrayColumn<SegmentRecord>("Files", "files", true),
  ]
}
