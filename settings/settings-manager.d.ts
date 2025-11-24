import { DOMRequest } from '../common';
import { MozSettingsTransactionEvent } from './moz-settings-transaction-event';
import { MozSettingsEvent } from './moz-settings-event';

/**
 * @preference dom.mozSettings.enabled
 */
export interface SettingsLock extends EventTarget {
  /**
   * Whether this lock is invalid (closed).
   */
  readonly closed: boolean;

  /**
   * Sets one or more settings.
   *
   * @param settings - A JSON object with name/value pairs to be set.
   * @returns A DOMRequest that indicates the success or failure of the operation.
   */
  set(settings: Record<string, any>): DOMRequest;

  /**
   * Gets the value of a specific setting.
   *
   * @param name - The name of the setting to retrieve.
   * @returns A DOMRequest where the result contains the value of the setting.
   */
  get(name: string): DOMRequest;

  /**
   * Clears all settings.
   *
   * @returns A DOMRequest that indicates the success or failure of the operation.
   */
  clear(): DOMRequest;

  /**
   * Event handler called when a settings transaction completes successfully.
   */
  onsettingstransactionsuccess:
    | ((this: SettingsLock, ev: MozSettingsTransactionEvent) => any)
    | null;

  /**
   * Event handler called when a settings transaction fails.
   */
  onsettingstransactionfailure:
    | ((this: SettingsLock, ev: MozSettingsTransactionEvent) => any)
    | null;
}

export interface SettingChange {
  /**
   * The name of the setting that changed.
   */
  settingName: string;

  /**
   * The new value of the setting.
   */
  settingValue: any;
}

export type SettingChangeCallback = (setting: SettingChange) => void;

/**
 * @navigatorProperty mozSettings
 * @preference dom.mozSettings.enabled
 * @permissions settings-api-read, settings-api-write
 */
export interface SettingsManager extends EventTarget {
  /**
   * Creates a lock for modifying settings.
   *
   * @returns A new SettingsLock object.
   */
  createLock(): SettingsLock;

  /**
   * Adds an observer for a specific setting.
   *
   * @param name - The name of the setting to observe.
   * @param callback - The function to call when the setting changes.
   */
  addObserver(name: string, callback: SettingChangeCallback): void;

  /**
   * Removes an observer for a specific setting.
   *
   * @param name - The name of the setting being observed.
   * @param callback - The function to remove.
   */
  removeObserver(name: string, callback: SettingChangeCallback): void;

  /**
   * Event handler called when a setting changes.
   */
  onsettingchange:
    | ((this: SettingsManager, ev: MozSettingsEvent) => any)
    | null;
}
