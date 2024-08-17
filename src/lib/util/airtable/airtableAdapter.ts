import Airtable from "airtable";
import AirtableFileTable from "./file";
import AirtableProjectsTable from "./project";
import AirtableSceneTable from "./scene";
import AirtableSegmentsTable from "./segment";

export default class AirtableAdapter {
    
  private base: Airtable.Base;

  public readonly projects: AirtableProjectsTable;
  public readonly segments: AirtableSegmentsTable;
  public readonly files: AirtableFileTable;
  public readonly scenes: AirtableSceneTable;

  constructor(apiKey: string, baseId: string) {
    this.base = new Airtable({ apiKey: apiKey }).base(baseId);

    this.projects = new AirtableProjectsTable(this.base);
    this.segments = new AirtableSegmentsTable(this.base);
    this.files = new AirtableFileTable(this.base);
    this.scenes = new AirtableSceneTable(this.base);
  }
}
