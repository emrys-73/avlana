import { AttachmentColumn, NumberColumn, StringArrayColumn, StringColumn, type Attachment, type LinkedRecord } from "./airtableSchema";
import { AirtableTable } from "./airtableTable";

export type ProjectRecord = {
  id: string;
  name: string;
  notes: string;
  user: string;
  status: string;
  contextDocuments: Attachment[];
  createdAt?: string;
  fileCount?: number;
  segments?: LinkedRecord[];
}

export default class AirtableProjectsTable extends AirtableTable<ProjectRecord> {
  protected tableName = 'Projects';
  protected columns = [
    new StringColumn<ProjectRecord>("Name", "name"),
    new StringColumn<ProjectRecord>("Notes", "notes"),
    new StringColumn<ProjectRecord>("User", "user"),
    new StringColumn<ProjectRecord>("Status", "status"),
    new AttachmentColumn<ProjectRecord>("Context Documents", "contextDocuments"),
    new StringColumn<ProjectRecord>("Context Documents", "contextDocuments"),
    new StringColumn<ProjectRecord>("Created At", "createdAt", true),
    new NumberColumn<ProjectRecord>("File Count", "fileCount", true),
    new StringArrayColumn<ProjectRecord>("Segments", "segments", true),
  ]
}
