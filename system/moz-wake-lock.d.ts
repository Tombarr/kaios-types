/**
 * @preference dom.wakelock.enabled
 * Represents a lock that prevents the device from entering sleep mode.
 */
export interface MozWakeLock {
  /**
   * The topic of the wake lock.
   */
  readonly topic: string;

  /**
   * Releases the wake lock.
   * @throws
   */
  unlock(): void;
}
