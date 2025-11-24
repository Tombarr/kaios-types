/**
 * File: dom/webidl/NetworkInformation.webidl
 */

/**
 * Types of network connections.
 */
export type ConnectionType =
  | 'cellular'
  | 'bluetooth'
  | 'ethernet'
  | 'wifi'
  | 'other'
  | 'none'
  | 'unknown';

/**
 * Provides information about the system's network connection.
 * Requires "dom.netinfo.enabled" system preference.
 */
export interface NetworkInformation extends EventTarget {
  /**
   * The type of connection a device is using to communicate with the network.
   */
  readonly type: ConnectionType;

  /**
   * Event handler for connection type changes.
   */
  ontypechange: EventHandler;
}
