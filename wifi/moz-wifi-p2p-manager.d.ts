import { DOMRequest } from '../common';

/**
 * File: dom/webidl/MozWifiP2pManager.webidl
 */

/**
 * Method used for WPS (Wi-Fi Protected Setup) in P2P.
 */
export type WPSMethod = 'pbc' | 'keypad' | 'display';

/**
 * Information required for WPS in P2P.
 */
export interface WPSInfo {
  method: WPSMethod;
  pin: string;
}

/**
 * Represents a Wi-Fi P2P group owner.
 * Available only if "Navigator::HasWifiManagerSupport" is true.
 */
export interface MozWifiP2pGroupOwner {
  readonly groupName: string;
  readonly macAddress: string;
  readonly ipAddress: string;
  readonly passphrase: string;
  readonly ssid: string;
  readonly wpsCapabilities: any;
  readonly freq: number;
  readonly isLocal: boolean;
}

/**
 * Manages Wi-Fi Direct (P2P) connections.
 * Available only if "Navigator::HasWifiManagerSupport" is true.
 */
export interface MozWifiP2pManager extends EventTarget {
  /**
   * Enables or disables scanning for P2P peers.
   * @param enabled - True to enable, false to disable.
   */
  setScanEnabled(enabled: boolean): DOMRequest;

  /**
   * Connects to a P2P peer.
   * @param address - The MAC address of the peer.
   * @param wpsMethod - The WPS method to use.
   * @param goIntent - The group owner intent value (0-15).
   */
  connect(address: string, wpsMethod: WPSMethod, goIntent?: number): DOMRequest;

  /**
   * Disconnects from a P2P peer.
   * @param address - The MAC address of the peer.
   */
  disconnect(address: string): DOMRequest;

  /**
   * Retrieves the list of discovered peers.
   */
  getPeerList(): DOMRequest;

  /**
   * Confirms or rejects a pairing request.
   * @param accepted - True to accept, false to reject.
   * @param pin - The PIN code if required.
   */
  setPairingConfirmation(accepted: boolean, pin?: string): DOMRequest;

  /**
   * Sets the device name for P2P discovery.
   * @param deviceName - The new device name.
   */
  setDeviceName(deviceName: string): DOMRequest;

  /**
   * Whether P2P is currently enabled.
   */
  readonly enabled: boolean;

  /**
   * The current group owner information, if any.
   */
  readonly groupOwner?: MozWifiP2pGroupOwner;

  /**
   * Event handler for peer list updates.
   */
  onpeerinfoupdate: EventHandler;

  /**
   * Event handler for status changes.
   */
  onstatuschange: EventHandler;

  /**
   * Event handler for when P2P is enabled.
   */
  onenabled: EventHandler;

  /**
   * Event handler for when P2P is disabled.
   */
  ondisabled: EventHandler;
}
