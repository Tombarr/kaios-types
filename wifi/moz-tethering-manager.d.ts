/**
 * File: dom/webidl/MozTetheringManager.webidl
 */

/**
 * Types of tethering connections.
 */
export type TetheringType = 'bluetooth' | 'usb' | 'wifi';

/**
 * Security types for Wi-Fi tethering.
 */
export type SecurityType = 'open' | 'wpa-psk' | 'wpa2-psk';

/**
 * Configuration for Wi-Fi tethering.
 */
export interface WifiTetheringConfig {
  ssid: string;
  security: SecurityType;
  key: string;
}

/**
 * Overall tethering configuration including IP settings.
 */
export interface TetheringConfiguration {
  ip: string;
  prefix: string;
  startIp: string;
  endIp: string;
  dns1: string;
  dns2: string;
  wifiConfig: WifiTetheringConfig;
}

/**
 * Manages Internet tethering (Hotspot).
 * @available CertifiedApps.
 */
export interface MozTetheringManager {
  /**
   * Enables or disables tethering.
   * @param enabled - True to enable, false to disable.
   * @param type - The type of tethering interface (wifi, usb, bluetooth).
   * @param config - The configuration for tethering.
   */
  setTetheringEnabled(
    enabled: boolean,
    type: TetheringType,
    config?: TetheringConfiguration
  ): Promise<any>;
}
