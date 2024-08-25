import Airtable from "airtable";
import AirtableActionsTable from "./action";
import AirtableClipsTable from "./clip";
import AirtableFilesTable from "./file";
import AirtableProjectsTable from "./project";

export default class AirtableAdapter {
    
  private base: Airtable.Base;

  public readonly projects: AirtableProjectsTable;
  public readonly actions: AirtableActionsTable;
  public readonly files: AirtableFilesTable;
  public readonly clips: AirtableClipsTable;

  constructor(apiKey: string, baseId: string) {
    this.base = new Airtable({ apiKey: apiKey }).base(baseId);

    this.projects = new AirtableProjectsTable(this.base);
    this.actions = new AirtableActionsTable(this.base);
    this.files = new AirtableFilesTable(this.base);
    this.clips = new AirtableClipsTable(this.base);
  }
}
