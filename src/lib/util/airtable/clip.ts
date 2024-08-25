import { AttachmentColumn, NumberColumn, StringArrayColumn, StringColumn, type Attachment } from "./airtableSchema";
import { AirtableTable } from "./airtableTable";

export type ClipRecord = {
  id: string;
  name: string;
  fileId: string;
  actionId: string;
  keyFrames: Attachment[],

  sceneNumber: number,
  startFrame: number;
  startTime: number,
  endFrame: number,
  endTime: number,

  audioDialogSummary: string,

  cameraHorizontalAngle: string,
  cameraMovement: string,
  cameraShotFocus: string,
  cameraShotSize: string,
  cameraStability: string,
  cameraVerticalAngle: string,
  
  subjectActivity: string[],
  subjectIdentity: string[],
  subjectMovement: string[],
  subjectCameraRelation: string[],

  visualSceneActivity: string[],
  visualSceneEmotion: string[],
  visualSceneObjects: string[],
  visualSceneSurroundings: string[],
  visualSceneText: string,
  visualSceneType: string,
  visualShotContrast: string,
  visualSubjectFraming: string,
  visualTimeOfDay: string,
  visualVideoSummary: string,
  visualWeather: string[],
}

export default class AirtableClipsTable extends AirtableTable<ClipRecord> {
  protected tableName = 'Clips';
  protected columns = [
    new StringColumn<ClipRecord>("Name", "name"),
    new StringColumn<ClipRecord>("File", "fileId"),
    new StringColumn<ClipRecord>("Action", "actionId"),
    new AttachmentColumn<ClipRecord>("Key Frames", "keyFrames"),

    new NumberColumn<ClipRecord>("Scene Number", "sceneNumber"),
    new NumberColumn<ClipRecord>("Start Frame", "startFrame"),
    new NumberColumn<ClipRecord>("Start Time", "startTime"),
    new NumberColumn<ClipRecord>("End Frame", "endFrame"),
    new NumberColumn<ClipRecord>("End Time", "endTime"),

    new StringColumn<ClipRecord>("[Audio] Dialog Summary", "audioDialogSummary"),

    new StringColumn<ClipRecord>("[Camera] Horizontal Angle", "cameraHorizontalAngle"),
    new StringColumn<ClipRecord>("[Camera] Movement", "cameraMovement"),
    new StringColumn<ClipRecord>("[Camera] Shot Focus", "cameraShotFocus"),
    new StringColumn<ClipRecord>("[Camera] Shot Size", "cameraShotSize"),
    new StringColumn<ClipRecord>("[Camera] Stability", "cameraStability"),
    new StringColumn<ClipRecord>("[Camera] Vertical Angle", "cameraVerticalAngle"),

    new StringArrayColumn<ClipRecord>("[Subject] Activity", "subjectActivity"),
    new StringArrayColumn<ClipRecord>("[Subject] Identity", "subjectIdentity"),
    new StringArrayColumn<ClipRecord>("[Subject] Movement", "subjectMovement"),
    new StringArrayColumn<ClipRecord>("[Subject] Subject-Camera Relation", "subjectCameraRelation"),

    new StringArrayColumn<ClipRecord>("[Visual] Scene Activity", "visualSceneActivity"),
    new StringArrayColumn<ClipRecord>("[Visual] Scene Emotion", "visualSceneEmotion"),
    new StringArrayColumn<ClipRecord>("[Visual] Scene Objects", "visualSceneObjects"),
    new StringArrayColumn<ClipRecord>("[Visual] Scene Surroundings", "visualSceneSurroundings"),
    new StringColumn<ClipRecord>("[Visual] Scene Text", "visualSceneText"),
    new StringColumn<ClipRecord>("[Visual] Scene Type", "visualSceneType"),
    new StringColumn<ClipRecord>("[Visual] Shot Contrast", "visualShotContrast"),
    new StringColumn<ClipRecord>("[Visual] Subject Framing", "visualSubjectFraming"),
    new StringColumn<ClipRecord>("[Visual] Time of Day", "visualTimeOfDay"),
    new StringColumn<ClipRecord>("[Visual] Video Summary", "visualVideoSummary"),
    new StringArrayColumn<ClipRecord>("[Visual] Weather", "visualWeather"),
  ]
}
