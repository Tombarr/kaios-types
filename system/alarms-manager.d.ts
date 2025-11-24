import { DOMRequest } from '../common';

/**
 * Alarm API
 *
 * @navigatorProperty mozAlarms
 * @jsImplementation @mozilla.org/alarmsManager;1
 * @permissions alarms
 * @preference dom.mozAlarms.enabled
 * Provides access to the device's alarm scheduling.
 *
 * @see https://developer.kaiostech.com/docs/api/web-apis/alarm/alarm/
 */
export interface AlarmsManager {
  /**
   * Returns a list of all scheduled alarms.
   */
  getAll(): DOMRequest;

  /**
   * Schedules a new alarm.
   * @param date The time at which the alarm should trigger.
   * @param respectTimezone Whether to respect the timezone.
   * @param data Arbitrary data to be stored with the alarm.
   * @unsafeInPrerendering
   */
  add(
    date: Date | number,
    respectTimezone: 'ignoreTimezone' | 'honorTimezone',
    data?: any
  ): DOMRequest;

  /**
   * Cancels a scheduled alarm.
   * @param id The ID of the alarm to remove.
   * @unsafeInPrerendering
   */
  remove(id: number): void;
}
