import { CameraSize, CameraConfiguration } from './camera-manager';
import { CameraCapabilities } from '../common';
import { DeviceStorage } from '../system/device-storage';

/**
 * Represents a region of interest in the camera field of view.
 * Coordinates are mapped to the range -1000 to 1000.
 */
export interface CameraRegion {
  /**
   * Top coordinate.
   * @default -1000
   */
  top?: number;
  /**
   * Left coordinate.
   * @default -1000
   */
  left?: number;
  /**
   * Bottom coordinate.
   * @default 1000
   */
  bottom?: number;
  /**
   * Right coordinate.
   * @default 1000
   */
  right?: number;
  /**
   * Weight of the region.
   * @default 1000
   */
  weight?: number;
}

/**
 * Represents a geographical location and timestamp for a picture.
 */
export interface CameraPosition {
  /**
   * Latitude in degrees.
   * @default NaN
   */
  latitude?: number;
  /**
   * Longitude in degrees.
   * @default NaN
   */
  longitude?: number;
  /**
   * Altitude in meters.
   * @default NaN
   */
  altitude?: number;
  /**
   * Timestamp in seconds.
   * @default NaN
   */
  timestamp?: number;
}

/**
 * Options for taking a picture.
 */
export interface CameraPictureOptions {
  /**
   * Target size for the picture.
   * @default null
   */
  pictureSize?: CameraSize | null;
  /**
   * File format for the picture (e.g., "jpeg").
   * @default ""
   */
  fileFormat?: string;
  /**
   * Rotation in degrees.
   * @default 0
   */
  rotation?: number;
  /**
   * Geographical position metadata.
   * @default null
   */
  position?: CameraPosition | null;
  /**
   * Date and time of the picture.
   * @default 0
   */
  dateTime?: number;
}

/**
 * Options for starting video recording.
 */
export interface CameraStartRecordingOptions {
  /**
   * Rotation in degrees.
   * @default 0
   */
  rotation?: number;
  /**
   * Maximum file size in bytes.
   * @default 0
   */
  maxFileSizeBytes?: number;
  /**
   * Maximum video length in milliseconds.
   * @default 0
   */
  maxVideoLengthMs?: number;
  /**
   * Whether to automatically enable low light torch.
   * @default false
   */
  autoEnableLowLightTorch?: boolean;
  /**
   * Whether to create a poster image.
   * @default false
   */
  createPoster?: boolean;
}

/**
 * Initialization dictionary for a detected face.
 */
export interface CameraDetectedFaceInit {
  /**
   * Unique identifier for the face.
   * @default 0
   */
  id?: number;
  /**
   * Confidence score (0-100).
   * @default 100
   */
  score?: number;
  /**
   * Bounding box of the face.
   */
  bounds: CameraRegion;
  /**
   * Whether the left eye is detected.
   * @default false
   */
  hasLeftEye?: boolean;
  /**
   * Position of the left eye.
   */
  leftEye: DOMPointInit;
  /**
   * Whether the right eye is detected.
   * @default false
   */
  hasRightEye?: boolean;
  /**
   * Position of the right eye.
   */
  rightEye: DOMPointInit;
  /**
   * Whether the mouth is detected.
   * @default false
   */
  hasMouth?: boolean;
  /**
   * Position of the mouth.
   */
  mouth: DOMPointInit;
}

/**
 * Callback function for face detection events.
 */
export type CameraFaceDetectionCallback = (faces: CameraDetectedFace[]) => void;

/**
 * Controls the camera device.
 * Maps to nsDOMCameraControl.
 */
export interface CameraControl extends MediaStream {
  /**
   * Capabilities of the camera.
   */
  readonly capabilities: CameraCapabilities;

  /**
   * Current effect applied to the camera preview/capture.
   * @throws NS_ERROR_NOT_AVAILABLE
   */
  effect: string;
  /**
   * Current white balance mode.
   * @throws NS_ERROR_NOT_AVAILABLE
   */
  whiteBalanceMode: string;
  /**
   * Current scene mode.
   * @throws NS_ERROR_NOT_AVAILABLE
   */
  sceneMode: string;
  /**
   * Current flash mode.
   * @throws NS_ERROR_NOT_AVAILABLE
   */
  flashMode: string;
  /**
   * Current focus mode.
   * @throws NS_ERROR_NOT_AVAILABLE
   */
  focusMode: string;
  /**
   * Current zoom level.
   * @throws NS_ERROR_NOT_AVAILABLE
   */
  zoom: number;

  /**
   * Gets the current metering areas.
   * @throws NS_ERROR_NOT_AVAILABLE
   */
  getMeteringAreas(): CameraRegion[];
  /**
   * Sets the metering areas.
   * @param meteringAreas Array of regions for metering.
   * @throws NS_ERROR_NOT_AVAILABLE
   */
  setMeteringAreas(meteringAreas?: CameraRegion[]): void;

  /**
   * Gets the current focus areas.
   * @throws NS_ERROR_NOT_AVAILABLE
   */
  getFocusAreas(): CameraRegion[];
  /**
   * Sets the focus areas.
   * @param focusAreas Array of regions for focus.
   * @throws NS_ERROR_NOT_AVAILABLE
   */
  setFocusAreas(focusAreas?: CameraRegion[]): void;

  /**
   * Focal length in millimeters.
   * @throws NS_ERROR_NOT_AVAILABLE
   */
  readonly focalLength: number;
  /**
   * Minimum focus distance in meters.
   * @throws NS_ERROR_NOT_AVAILABLE
   */
  readonly focusDistanceNear: number;
  /**
   * Optimum focus distance in meters.
   * @throws NS_ERROR_NOT_AVAILABLE
   */
  readonly focusDistanceOptimum: number;
  /**
   * Maximum focus distance in meters.
   * @throws NS_ERROR_NOT_AVAILABLE
   */
  readonly focusDistanceFar: number;
  /**
   * Exposure compensation index.
   * @throws NS_ERROR_NOT_AVAILABLE
   */
  exposureCompensation: number;
  /**
   * ISO sensitivity mode.
   * @throws NS_ERROR_NOT_AVAILABLE
   */
  isoMode: string;

  /**
   * Event handler for shutter events.
   */
  onshutter: EventHandler;
  /**
   * Event handler for camera close events.
   */
  onclose: EventHandler;
  /**
   * Event handler for recorder state changes.
   */
  onrecorderstatechange: EventHandler;
  /**
   * Event handler for poster creation events.
   */
  onposter: EventHandler;
  /**
   * Event handler for preview state changes.
   */
  onpreviewstatechange: EventHandler;

  /**
   * Gets the current picture size.
   * @throws NS_ERROR_NOT_AVAILABLE
   */
  getPictureSize(): CameraSize;
  /**
   * Sets the picture size.
   * @param size Target size.
   * @throws NS_ERROR_NOT_AVAILABLE
   */
  setPictureSize(size?: CameraSize): void;
  /**
   * Picture quality setting.
   * @throws NS_ERROR_NOT_AVAILABLE
   */
  pictureQuality: number;
  /**
   * Gets the current thumbnail size.
   * @throws NS_ERROR_NOT_AVAILABLE
   */
  getThumbnailSize(): CameraSize;
  /**
   * Sets the thumbnail size.
   * @param size Target size.
   * @throws NS_ERROR_NOT_AVAILABLE
   */
  setThumbnailSize(size?: CameraSize): void;

  /**
   * Orientation of the sensor relative to the device.
   */
  readonly sensorAngle: number;
  /**
   * Metering mode.
   * @throws NS_ERROR_NOT_AVAILABLE
   */
  meteringMode: string;

  /**
   * Triggers auto-focus.
   * @returns Promise resolving to boolean indicating success/failure of focus.
   * @throws NS_ERROR_NOT_AVAILABLE
   */
  autoFocus(): Promise<boolean>;
  /**
   * Event handler for focus events.
   */
  onfocus: EventHandler;

  /**
   * Captures a picture.
   * @param options Options for the picture.
   * @returns Promise resolving to a Blob containing the picture.
   * @throws NS_ERROR_NOT_AVAILABLE
   */
  takePicture(options?: CameraPictureOptions): Promise<Blob>;
  /**
   * Event handler for picture events.
   */
  onpicture: EventHandler;

  /**
   * Starts recording video.
   * @param options Recording options.
   * @param storageArea Storage area to save the video.
   * @param filename Name of the file.
   * @throws NS_ERROR_NOT_AVAILABLE
   */
  startRecording(
    options: CameraStartRecordingOptions,
    storageArea: DeviceStorage,
    filename: string
  ): Promise<void>;
  /**
   * Stops recording.
   * @throws NS_ERROR_NOT_AVAILABLE
   */
  stopRecording(): void;
  /**
   * Pauses recording.
   * @throws NS_ERROR_NOT_AVAILABLE
   */
  pauseRecording(): void;
  /**
   * Resumes recording.
   * @throws NS_ERROR_NOT_AVAILABLE
   */
  resumeRecording(): void;
  /**
   * Resumes the preview stream.
   * @throws NS_ERROR_NOT_AVAILABLE
   */
  resumePreview(): void;
  /**
   * Releases the camera.
   * @throws NS_ERROR_NOT_AVAILABLE
   */
  release(): Promise<void>;
  /**
   * Sets the camera configuration.
   * @param configuration New configuration.
   * @returns Promise resolving to the applied configuration.
   * @throws NS_ERROR_NOT_AVAILABLE
   */
  setConfiguration(
    configuration?: CameraConfiguration
  ): Promise<CameraConfiguration>;
  /**
   * Event handler for configuration changes.
   */
  onconfigurationchange: EventHandler;
  /**
   * Resumes continuous focus.
   * @throws NS_ERROR_NOT_AVAILABLE
   */
  resumeContinuousFocus(): void;

  // Partial Interface Merged: Face Detection
  /**
   * Starts face detection.
   * @throws NS_ERROR_NOT_AVAILABLE
   * @preference camera.control.face_detection.enabled
   */
  startFaceDetection(): void;

  /**
   * Stops face detection.
   * @throws NS_ERROR_NOT_AVAILABLE
   * @preference camera.control.face_detection.enabled
   */
  stopFaceDetection(): void;

  /**
   * Event handler for face detection events.
   * @preference camera.control.face_detection.enabled
   */
  onfacesdetected: EventHandler;
}

/**
 * Represents a face detected by the camera.
 * Maps to DOMCameraDetectedFace.
 * @preference camera.control.face_detection.enabled
 */
export interface CameraDetectedFace {
  /**
   * Unique identifier.
   */
  readonly id: number;
  /**
   * Confidence score.
   */
  readonly score: number;
  /**
   * Bounding box.
   */
  readonly bounds: DOMRect;
  /**
   * Whether the left eye is present.
   */
  readonly hasLeftEye: boolean;
  /**
   * Position of the left eye.
   */
  readonly leftEye: DOMPoint | null;
  /**
   * Whether the right eye is present.
   */
  readonly hasRightEye: boolean;
  /**
   * Position of the right eye.
   */
  readonly rightEye: DOMPoint | null;
  /**
   * Whether the mouth is present.
   */
  readonly hasMouth: boolean;
  /**
   * Position of the mouth.
   */
  readonly mouth: DOMPoint | null;
}
