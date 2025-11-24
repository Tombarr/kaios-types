/**
 * BatteryManager API
 *
 * Provides information about the system's battery charge level and charging state.
 * Based on the Battery Status API specification with KaiOS 2.5 extensions.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager
 * @see https://developer.kaiostech.com/docs/api/web-apis/batterymanager/batterymanager
 */

/**
 * The BatteryManager interface provides information about the system's battery charge level.
 * It is returned by the navigator.getBattery() method.
 *
 * @example
 * ```typescript
 * navigator.getBattery().then((battery) => {
 *   console.log(`Battery level: ${battery.level * 100}%`);
 *   console.log(`Charging: ${battery.charging}`);
 *
 *   battery.addEventListener('levelchange', () => {
 *     console.log(`Battery level changed to ${battery.level * 100}%`);
 *   });
 * });
 * ```
 */
export interface BatteryManager extends EventTarget {
  /**
   * A Boolean value indicating whether the battery is currently being charged.
   */
  readonly charging: boolean;

  /**
   * A number representing the remaining time in seconds until the battery is fully charged,
   * or 0 if the battery is already fully charged or not charging.
   */
  readonly chargingTime: number;

  /**
   * A number representing the remaining time in seconds until the battery is completely
   * discharged and the system suspends.
   */
  readonly dischargingTime: number;

  /**
   * A number representing the system's battery charge level scaled to a value between 0.0 and 1.0.
   * A value of 0 means the battery is empty and the system is about to be suspended.
   * A value of 1.0 means the battery is full.
   * A value of 1.0 is also returned if the system is unable to determine the battery charge level.
   */
  readonly level: number;

  /**
   * Battery health status.
   * Available in KaiOS 2.5+.
   */
  readonly health: string;

  /**
   * Boolean indicating whether the battery is present.
   * Available in KaiOS 2.5+.
   */
  readonly present: boolean;

  /**
   * Battery temperature value.
   * Available in KaiOS 2.5+.
   */
  readonly temperature: number;

  /**
   * Event handler called when the charging state changes.
   */
  onchargingchange: ((this: BatteryManager, ev: Event) => any) | null;

  /**
   * Event handler called when the chargingTime property changes.
   */
  onchargingtimechange: ((this: BatteryManager, ev: Event) => any) | null;

  /**
   * Event handler called when the dischargingTime property changes.
   */
  ondischargingtimechange: ((this: BatteryManager, ev: Event) => any) | null;

  /**
   * Event handler called when the level property changes.
   */
  onlevelchange: ((this: BatteryManager, ev: Event) => any) | null;

  /**
   * Event handler called when the battery health changes.
   * Available in KaiOS 2.5+.
   */
  onbatteryhealthchange: ((this: BatteryManager, ev: Event) => any) | null;
}
