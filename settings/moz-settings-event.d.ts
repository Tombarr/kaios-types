/**
 * @constructor
 * @permissions settings-api-read, settings-api-write
 */
export interface MozSettingsEvent extends Event {
  /**
   * The name of the setting that was changed.
   */
  readonly settingName: string | null;

  /**
   * The new value of the setting.
   */
  readonly settingValue: any;
}

export interface MozSettingsEventInit extends EventInit {
  /**
   * The name of the setting.
   */
  settingName?: string;

  /**
   * The value of the setting.
   */
  settingValue?: any;
}
