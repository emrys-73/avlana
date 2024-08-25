import { DateColumn, JSONColumn, NumberColumn, StringArrayColumn, StringColumn } from "./airtableSchema";
import { AirtableTable } from "./airtableTable";

export type FileRecord = {
  id: string;
  name: string;
  projectId: string;
  fileType: string;
  recordedAt: Date;
  recordingLocation: string;
  hash: string;
  lensSettings: string;
  codec: string;
  framerate: number;
  resolution: string;
  bitrate: number;
  transcription: object;
  deviceIdentifier: string;
  clipIds?: string[];
}

export default class AirtableFilesTable extends AirtableTable<FileRecord> {
  protected tableName = 'Files';
  protected columns = [
    new StringColumn<FileRecord>("File Name", "name"),
    new StringColumn<FileRecord>("Project", "projectId"),
    new StringColumn<FileRecord>("File Type", "fileType"),
    new StringColumn<FileRecord>("Hash", "hash"),
    new DateColumn<FileRecord>("Recorded At", "recordedAt"),
    new StringColumn<FileRecord>("Recording Location", "recordingLocation"),
    new StringColumn<FileRecord>("Video Lens Settings", "lensSettings"),
    new StringColumn<FileRecord>("Video Codec", "codec"),
    new NumberColumn<FileRecord>("Video Framerate", "framerate"),
    new StringColumn<FileRecord>("Video Resolution", "resolution"),
    new StringColumn<FileRecord>("Audio Bitrate", "bitrate"),
    new JSONColumn<FileRecord>("Audio Transcription", "transcription"),
    new StringColumn<FileRecord>("Device Identifier", "deviceIdentifier"),
    new StringArrayColumn<FileRecord>("Clips", "clipIds", true),
  ]
}
