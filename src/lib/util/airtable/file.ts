import { NumberColumn, StringArrayColumn, StringColumn, type LinkedRecord } from "./airtableSchema";
import { AirtableTable } from "./airtableTable";

export type FileRecord = {
  id: string;
  name: string;
  segment: LinkedRecord;
  fileType: string;
  hash: string;
  codec: string;
  framerate: number;
  resolution: string;
  cameraIdentifier: string;
  frames?: LinkedRecord[];
}

export default class AirtableFileTable extends AirtableTable<FileRecord> {
  protected tableName = 'Projects';
  protected columns = [
    new StringColumn<FileRecord>("File Name", "name"),
    new StringColumn<FileRecord>("Segment", "segment"),
    new StringColumn<FileRecord>("File Type", "fileType"),
    new StringColumn<FileRecord>("Hash", "hash"),
    new StringColumn<FileRecord>("Codec", "codec"),
    new NumberColumn<FileRecord>("Framerate", "framerate"),
    new StringColumn<FileRecord>("Resolution", "resolution"),
    new StringColumn<FileRecord>("Camera Identifier", "cameraIdentifier"),
    new StringArrayColumn<FileRecord>("Frames", "frames", true),
  ]
}
