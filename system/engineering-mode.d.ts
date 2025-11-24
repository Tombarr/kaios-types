/**
 * @jsImplementation @mozilla.org/dom/engineering-mode-api;1
 * @navigatorProperty engineeringMode
 * @available CertifiedApps
 * @permissions engineering-mode
 * Provides access to engineering mode settings.
 */
export interface EngineeringMode extends EventTarget {
  /**
   * Gets the value of a specific setting.
   * @param name The name of the setting.
   */
  getValue(name: string): Promise<string>;

  /**
   * Sets the value of a specific setting.
   * @param name The name of the setting.
   * @param value The value to set.
   */
  setValue(name: string, value: string): Promise<void>;

  /**
   * Event handler for messages.
   */
  onmessage: EventHandler;
}
