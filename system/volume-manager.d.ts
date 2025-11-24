/**
 * VolumeManager API
 *
 * The VolumeManager interface provides methods to control the device's audio volume.
 * It allows applications to request volume adjustments and display the volume UI.
 *
 * @navigatorProperty volumeManager
 * @see https://developer.kaiostech.com/docs/api/web-apis/volumemanager/volumemanager/
 */
export interface VolumeManager {
  /**
   * Sends an event to the system application to increase the current audio volume.
   *
   * @example
   * ```typescript
   * // Increase volume by one step
   * navigator.volumeManager.requestUp();
   * ```
   */
  requestUp(): void;

  /**
   * Sends an event to the system application to decrease the current audio volume.
   *
   * @example
   * ```typescript
   * // Decrease volume by one step
   * navigator.volumeManager.requestDown();
   * ```
   */
  requestDown(): void;

  /**
   * Sends an event to the system application to show the current audio volume UI.
   * This displays the volume level indicator to the user.
   *
   * @example
   * ```typescript
   * // Display the volume UI showing current level
   * navigator.volumeManager.requestShow();
   * ```
   */
  requestShow(): void;
}
