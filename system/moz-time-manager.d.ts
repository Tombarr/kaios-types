/**
 * Provides access to the device's system time.
 */
export interface MozTimeManager {
  /**
   * Sets the system time.
   * @param time The new system time.
   */
  set(time: Date): void;

  /**
   * Sets the system time.
   * @param time The new system time as a timestamp.
   */
  set(time: number): void;
}
