import { MozMobileNetworkInfo, MozMobileCellInfo } from '../common';

/**
 * File: dom/webidl/MozMobileConnectionInfo.webidl
 */

export type MobileConnectionState =
  | 'notSearching'
  | 'searching'
  | 'denied'
  | 'registered';

export type MobileConnectionType =
  | 'gsm'
  | 'gprs'
  | 'edge'
  | 'umts'
  | 'hsdpa'
  | 'hsupa'
  | 'hspa'
  | 'hspa+'
  | 'is95a'
  | 'is95b'
  | '1xrtt'
  | 'evdo0'
  | 'evdoa'
  | 'evdob'
  | 'ehrpd'
  | 'lte';

/**
 * @pref dom.mobileconnection.enabled
 */
export interface MozMobileConnectionInfo {
  /**
   * The state of the connection (e.g., "registered", "searching").
   */
  readonly state: MobileConnectionState | null;

  /**
   * Indicates whether the device is connected to a network.
   */
  readonly connected: boolean;

  /**
   * Indicates whether only emergency calls are allowed.
   */
  readonly emergencyCallsOnly: boolean;

  /**
   * Indicates whether the device is roaming.
   */
  readonly roaming: boolean;

  /**
   * Information about the network the device is connected to.
   */
  readonly network: MozMobileNetworkInfo | null;

  /**
   * The type of the connection (e.g., "gsm", "lte").
   */
  readonly type: MobileConnectionType | null;

  /**
   * The signal strength in dBm.
   */
  readonly signalStrength: number | null;

  /**
   * The relative signal strength (0-100).
   */
  readonly relSignalStrength: number | null;

  /**
   * Information about the cell the device is connected to.
   */
  readonly cell: MozMobileCellInfo | null;
}
