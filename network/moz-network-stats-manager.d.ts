import {
  MozNetworkStatsInterface,
  NetworkStatsGetOptions,
  DOMRequest,
  NetworkStatsAlarmOptions
} from '../common';

/**
 * File: dom/webidl/MozNetworkStatsManager.webidl
 */

/**
 * Manages network statistics.
 * Requires "networkstats-manage" permission.
 * Requires "dom.mozNetworkStats.enabled" system preference.
 */
export interface MozNetworkStatsManager {
  /**
   * Constant for Wi-Fi network type.
   */
  readonly WIFI: 0;

  /**
   * Constant for Mobile network type.
   */
  readonly MOBILE: 1;

  /**
   * Retrieves network statistics samples.
   * @param network - The network interface to query.
   * @param start - The start date for the statistics.
   * @param end - The end date for the statistics.
   * @param options - Options for filtering the statistics.
   */
  getSamples(
    network: MozNetworkStatsInterface,
    start: Date,
    end: Date,
    options?: NetworkStatsGetOptions
  ): DOMRequest;

  /**
   * Adds an alarm for network usage.
   * @param network - The network interface to monitor.
   * @param threshold - The usage threshold in bytes.
   * @param options - Options for the alarm.
   */
  addAlarm(
    network: MozNetworkStatsInterface,
    threshold: number,
    options?: NetworkStatsAlarmOptions
  ): DOMRequest;

  /**
   * Retrieves all configured alarms.
   * @param network - Optional network interface to filter by.
   */
  getAllAlarms(network?: MozNetworkStatsInterface): DOMRequest;

  /**
   * Removes alarms.
   * @param alarmId - The ID of the alarm to remove. If not specified, removes all? (Check docs if available, but "removeAlarms" implies plural).
   */
  removeAlarms(alarmId?: number): DOMRequest;

  /**
   * Clears statistics for a specific network.
   * @param network - The network interface to clear.
   */
  clearStats(network: MozNetworkStatsInterface): DOMRequest;

  /**
   * Clears all network statistics.
   */
  clearAllStats(): DOMRequest;

  /**
   * Retrieves available network interfaces.
   * @returns DOMRequest returning an array of MozNetworkStatsInterface.
   */
  getAvailableNetworks(): DOMRequest;

  /**
   * Retrieves available service types.
   * @returns DOMRequest returning an array of strings.
   */
  getAvailableServiceTypes(): DOMRequest;

  /**
   * The sampling rate for statistics in seconds.
   */
  readonly sampleRate: number;

  /**
   * The maximum age of stored statistics in milliseconds.
   */
  readonly maxStorageAge: number;
}
