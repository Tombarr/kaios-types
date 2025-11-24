import { MozWakeLockListener } from '../common';

export type FactoryResetReason = 'normal' | 'wipe' | 'root';

/**
 * @permissions power
 * Provides access to the device's power management features.
 */
export interface MozPowerManager {
  /**
   * Turns off the device.
   * @throws
   */
  powerOff(): void;

  /**
   * Reboots the device.
   * @throws
   */
  reboot(): void;

  /**
   * Resets the device to factory settings.
   * @param reason The reason for the factory reset.
   */
  factoryReset(reason?: FactoryResetReason): void;

  /**
   * Adds a listener for wake lock events.
   * @param aListener The listener to add.
   */
  addWakeLockListener(aListener: MozWakeLockListener): void;

  /**
   * Removes a listener for wake lock events.
   * @param aListener The listener to remove.
   */
  removeWakeLockListener(aListener: MozWakeLockListener): void;

  /**
   * Gets the state of a wake lock.
   * @param aTopic The wake lock topic.
   * @throws
   */
  getWakeLockState(aTopic: string): string;

  /**
   * Whether the screen is enabled.
   */
  screenEnabled: boolean;

  /**
   * Whether the key light is enabled.
   */
  keyLightEnabled: boolean;

  /**
   * The brightness of the screen.
   * @throws
   */
  screenBrightness: number;

  /**
   * Whether the CPU is allowed to sleep.
   */
  cpuSleepAllowed: boolean;
}
