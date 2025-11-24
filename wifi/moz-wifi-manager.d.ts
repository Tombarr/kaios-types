import { DOMRequest, MozWifiCapabilities } from '../common';

/**
 * File: dom/webidl/MozWifiManager.webidl
 */

/**
 * Methods for WPS (Wi-Fi Protected Setup) connection.
 */
export type WifiWPSMethod = 'pbc' | 'pin' | 'cancel';

/**
 * Possible states of a Wi-Fi connection.
 */
export type ConnectionStatus =
  | 'connecting'
  | 'authenticating'
  | 'associated'
  | 'connected'
  | 'disconnected'
  | 'wps-timedout'
  | 'wps-failed'
  | 'wps-overlapped'
  | 'connectingfailed';

/**
 * Information required for WPS connection.
 */
export interface WifiWPSInfo {
  method: WifiWPSMethod;
  pin?: string;
  bssid?: string;
}

/**
 * Properties of a Wi-Fi network.
 */
export interface NetworkProperties {
  ssid: string;
  mode: number;
  frequency: number;
  security?: string[];
  capabilities?: string[];
  known: boolean;
  connected: boolean;
  hidden: boolean;
  bssid: string;
  signalStrength: string;
  relSignalStrength: number;
  psk: string;
  wep: string;
  wep_key0: string;
  wep_key1: string;
  wep_key2: string;
  wep_key3: string;
  wep_tx_keyidx: number;
  priority: number;
  scan_ssid: number;
  keyManagement: string;
  identity: string;
  password: string;
  auth_alg: string;
  phase1: string;
  phase2: string;
  eap: string;
  pin: string;
  dontConnect: boolean;
  serverCertificate: string;
  subjectMatch: string;
  userCertificate: string;
}

/**
 * Represents a Wi-Fi network interface.
 * Available only if "Navigator::HasWifiManagerSupport" is true.
 */
export interface MozWifiNetwork {
  readonly ssid: string;
  readonly mode: number;
  readonly frequency: number;
  readonly security?: string[];
  readonly capabilities?: string[];
  readonly known: boolean;
  readonly connected: boolean;
  readonly hidden: boolean;

  bssid?: string;
  signalStrength?: string;
  relSignalStrength?: number;
  psk?: string;
  wep?: string;
  wep_key0?: string;
  wep_key1?: string;
  wep_key2?: string;
  wep_key3?: string;
  wep_tx_keyidx?: number;
  priority?: number;
  scan_ssid?: number;
  keyManagement?: string;
  identity?: string;
  password?: string;
  auth_alg?: string;
  phase1?: string;
  phase2?: string;
  eap?: string;
  pin?: string;
  dontConnect?: boolean;
  serverCertificate?: string;
  subjectMatch?: string;
  userCertificate?: string;
}

/**
 * @chromeOnly
 * Represents the status of the current Wi-Fi connection.
 */
export interface MozWifiConnection {
  readonly status: ConnectionStatus;
  readonly network?: MozWifiNetwork;
}

/**
 * @chromeOnly
 * Details about the signal strength and link speed of the connection.
 */
export interface MozWifiConnectionInfo {
  readonly signalStrength: number;
  readonly relSignalStrength: number;
  readonly linkSpeed: number;
  readonly ipAddress?: string;
}

/**
 * Configuration for a static IP address.
 */
export interface IPConfiguration {
  enabled: boolean;
  ipaddr: string;
  proxy: string;
  maskLength: number;
  gateway: string;
  dns1: string;
  dns2: string;
}

/**
 * Available only if "Navigator::HasWifiManagerSupport" is true.
 * UnsafeInPrerendering
 *
 * Provides an API to manage Wi-Fi connections.
 */
export interface MozWifiManager extends EventTarget {
  /**
   * Enables or disables Wi-Fi.
   * @param enabled - True to enable, false to disable.
   */
  setWifiEnabled(enabled: boolean): DOMRequest;

  /**
   * Requests a scan for available networks.
   */
  getNetworks(): DOMRequest;

  /**
   * Retrieves the list of known (configured) networks.
   */
  getKnownNetworks(): DOMRequest;

  /**
   * Associates (connects) to a specific network.
   * @param network - The network to connect to.
   */
  associate(network: MozWifiNetwork): DOMRequest;

  /**
   * Forgets a known network.
   * @param network - The network to forget.
   */
  forget(network: MozWifiNetwork): DOMRequest;

  /**
   * Initiates a WPS connection.
   * @param detail - The WPS configuration details.
   */
  wps(detail?: WifiWPSInfo): DOMRequest;

  /**
   * Sets the power saving mode.
   * @param enabled - True to enable power saving, false to disable.
   */
  setPowerSavingMode(enabled: boolean): DOMRequest;

  /**
   * Configures the static IP mode for a network.
   * @param network - The network to configure.
   * @param info - The IP configuration.
   */
  setStaticIpMode(network: MozWifiNetwork, info?: IPConfiguration): DOMRequest;

  /**
   * Sets the HTTP proxy for a network.
   * @param network - The network to configure.
   * @param info - The proxy configuration.
   */
  setHttpProxy(network: MozWifiNetwork, info: any): DOMRequest;

  /**
   * Imports a certificate.
   * @param certBlob - The certificate data.
   * @param certPassword - The password for the certificate.
   * @param certNickname - The nickname for the certificate.
   */
  importCert(
    certBlob: Blob,
    certPassword: string,
    certNickname: string
  ): DOMRequest;

  /**
   * Retrieves a list of imported certificates.
   */
  getImportedCerts(): DOMRequest;

  /**
   * Deletes an imported certificate.
   * @param certNickname - The nickname of the certificate to delete.
   */
  deleteCert(certNickname: string): DOMRequest;

  /**
   * Whether Wi-Fi is currently enabled.
   */
  readonly enabled: boolean;

  /**
   * The MAC address of the Wi-Fi interface.
   */
  readonly macAddress: string;

  /**
   * The current connection status.
   */
  readonly connection: MozWifiConnection;

  /**
   * Information about the current connection.
   */
  readonly connectionInformation?: MozWifiConnectionInfo;

  /**
   * The capabilities of the Wi-Fi hardware.
   * Note: MozWifiCapabilities is not defined in the provided IDL
   */
  readonly capabilities?: MozWifiCapabilities;

  /**
   * Event handler for status changes.
   */
  onstatuschange: EventHandler;

  /**
   * Event handler for connection information updates (e.g. signal strength).
   */
  onconnectioninfoupdate: EventHandler;

  /**
   * Event handler for when Wi-Fi is enabled.
   */
  onenabled: EventHandler;

  /**
   * Event handler for when Wi-Fi is disabled.
   */
  ondisabled: EventHandler;

  /**
   * Event handler for station information updates.
   */
  onstationinfoupdate: EventHandler;
}
