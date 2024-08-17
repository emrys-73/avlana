import { NumberColumn, StringArrayColumn, StringColumn } from "./airtableSchema";
import { AirtableTable } from "./airtableTable";

export type FileRecord = {
  id: string;
  name: string;
  segmentId: string;
  fileType: string;
  hash: string;
  codec: string;
  framerate: number;
  resolution: string;
  cameraIdentifier: string;
  frameIds?: string[];
}

export default class AirtableFileTable extends AirtableTable<FileRecord> {
  protected tableName = 'Files';
  protected columns = [
    new StringColumn<FileRecord>("File Name", "name"),
    new StringColumn<FileRecord>("Segment", "segmentId"),
    new StringColumn<FileRecord>("File Type", "fileType"),
    new StringColumn<FileRecord>("Hash", "hash"),
    new StringColumn<FileRecord>("Codec", "codec"),
    new NumberColumn<FileRecord>("Framerate", "framerate"),
    new StringColumn<FileRecord>("Resolution", "resolution"),
    new StringColumn<FileRecord>("Camera Identifier", "cameraIdentifier"),
    new StringArrayColumn<FileRecord>("Frames", "frameIds", true),
  ]
}
