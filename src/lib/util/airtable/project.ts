import { AttachmentColumn, NumberColumn, StringArrayColumn, StringColumn, type Attachment } from "./airtableSchema";
import { AirtableTable } from "./airtableTable";

export type ProjectRecord = {
  id: string;
  name: string;
  notes: string;
  userEmail: string;
  status: string;
  contextDocuments: Attachment[];
  createdAt?: string;
  fileCount?: number;
  segmentIds?: string[];
  actionIds?: string[];
}

export default class AirtableProjectsTable extends AirtableTable<ProjectRecord> {
  protected tableName = 'Projects';
  protected columns = [
    new StringColumn<ProjectRecord>("Name", "name"),
    new StringColumn<ProjectRecord>("Notes", "notes"),
    new StringColumn<ProjectRecord>("User", "userEmail"),
    new StringColumn<ProjectRecord>("Status", "status"),
    new AttachmentColumn<ProjectRecord>("Context Documents", "contextDocuments"),
    new StringColumn<ProjectRecord>("Created At", "createdAt", true),
    new NumberColumn<ProjectRecord>("File Count", "fileCount", true),
    new StringArrayColumn<ProjectRecord>("Segments", "segmentIds", true),
    new StringArrayColumn<ProjectRecord>("Actions", "actionIds", true),
  ]
}
