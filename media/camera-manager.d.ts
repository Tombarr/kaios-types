import { CameraGetPromiseData } from '../common';

/**
 * Represents the operating mode of the camera.
 */
export type CameraMode = 'unspecified' | 'picture' | 'video';

/**
 * Dimensions for camera preview or picture.
 */
export interface CameraSize {
  /**
   * Width in pixels.
   * @default 0
   */
  width?: number;
  /**
   * Height in pixels.
   * @default 0
   */
  height?: number;
}

/**
 * Configuration options for getting a camera instance.
 */
export interface CameraConfiguration {
  /**
   * The initial mode for the camera.
   * @default "picture"
   */
  mode?: CameraMode;
  /**
   * The size of the preview stream.
   * @default null
   */
  previewSize?: CameraSize | null;
  /**
   * The size of the captured picture.
   * @default null
   */
  pictureSize?: CameraSize | null;
  /**
   * The profile to use for recording.
   * @default "default"
   */
  recorderProfile?: string;
}

/**
 * Provides access to the device's cameras.
 * Maps to nsDOMCameraManager.
 */
export interface CameraManager {
  /**
   * Request a camera instance.
   *
   * @param camera The identifier of the camera to get (e.g., returned by getListOfCameras).
   * @param initialConfiguration Optional configuration for the camera.
   * @returns A promise that resolves with the camera object and configuration.
   * @throws NS_ERROR_NOT_AVAILABLE if the camera is not available.
   */
  getCamera(
    camera: string,
    initialConfiguration?: CameraConfiguration
  ): Promise<CameraGetPromiseData>;

  /**
   * Returns a list of available camera identifiers.
   *
   * @returns An array of strings identifying the available cameras.
   * @throws NS_ERROR_FAILURE if the list cannot be retrieved.
   */
  getListOfCameras(): string[];
}
