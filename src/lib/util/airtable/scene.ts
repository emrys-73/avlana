import { AttachmentColumn, NumberColumn, StringArrayColumn, StringColumn, type Attachment } from "./airtableSchema";
import { AirtableTable } from "./airtableTable";

export type SceneRecord = {
  id: string;
  name: string;
  fileId: string;
  keyFrames: Attachment[],
  sceneNumber: number,
  startFrame: number;
  startTime: string,
  endFrame: number,
  endTime: string,
  description: string,
  cameraShotFocus: string[],
  cameraShotSize: string[],
  cameraVerticalAngle: string[],
  cameraMovement: string[],
  cameraShotContrast: string,
  sceneTimeOfDay: string,
  sceneWeather: string[],
  sceneSurroundings: string[],
  sceneObjects: string[],
  sceneAreas: string[],
  subjectPresence: string[],
  subjectMovement: string[],
  subjectEyeContact: string[],
}

export default class AirtableSceneTable extends AirtableTable<SceneRecord> {
  protected tableName = 'Scenes';
  protected columns = [
    new StringColumn<SceneRecord>("Name", "name"),
    new StringColumn<SceneRecord>("File", "fileId"),
    new AttachmentColumn<SceneRecord>("Key Frames", "keyFrames"),
    new NumberColumn<SceneRecord>("Scene Number", "sceneNumber"),
    new NumberColumn<SceneRecord>("Start Frame", "startFrame"),
    new StringColumn<SceneRecord>("Start Time", "startTime"),
    new NumberColumn<SceneRecord>("End Frame", "endFrame"),
    new StringColumn<SceneRecord>("End Time", "endTime"),
    new StringColumn<SceneRecord>("Description", "description"),
    new StringArrayColumn<SceneRecord>("[Camera] Shot Focus", "cameraShotFocus"),
    new StringArrayColumn<SceneRecord>("[Camera] Shot Size", "cameraShotSize"),
    new StringArrayColumn<SceneRecord>("[Camera] Vertical Angle", "cameraVerticalAngle"),
    new StringArrayColumn<SceneRecord>("[Camera] Movement", "cameraMovement"),
    new StringColumn<SceneRecord>("[Camera] Shot Contrast", "cameraShotContrast"),
    new StringArrayColumn<SceneRecord>("[Scene]Time of Day", "sceneTimeOfDay"),
    new StringArrayColumn<SceneRecord>("[Scene] Weather", "sceneWeather"),
    new StringArrayColumn<SceneRecord>("[Scene] Surroundings", "sceneSurroundings"),
    new StringArrayColumn<SceneRecord>("[Scene] Objects", "sceneObjects"),
    new StringArrayColumn<SceneRecord>("[Scene] Areas", "sceneAreas"),
    new StringArrayColumn<SceneRecord>("[Subject] Presence", "subjectPresence"),
    new StringArrayColumn<SceneRecord>("[Subject] Movement", "subjectMovement"),
    new StringArrayColumn<SceneRecord>("[Subject] Eye Contact", "subjectEyeContact"),
  ]
}
