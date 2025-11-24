import { MozIcc } from '../common';

/**
 * File: dom/webidl/MozIccManager.webidl
 */

/**
 * @preference dom.icc.enabled
 * @permissions mobileconnection
 * @available CertifiedApps
 */
export interface MozIccManager extends EventTarget {
  /** STK Menu Type: Not Specified */
  readonly STK_MENU_TYPE_NOT_SPECIFIED: number; // 0x00
  /** STK Menu Type: Data Values */
  readonly STK_MENU_TYPE_DATA_VALUES: number; // 0x01
  /** STK Menu Type: Navigation Options */
  readonly STK_MENU_TYPE_NAVIGATION_OPTIONS: number; // 0x03

  /**
   * List of available ICC IDs.
   * @annotation Cached
   * @annotation Pure
   */
  readonly iccIds: string[];

  /**
   * Retrieves the ICC object for a given ICC ID.
   * @param iccId - The ICC ID.
   */
  getIccById(iccId: string): MozIcc | null;

  /**
   * Event handler for when a new ICC is detected.
   */
  oniccdetected: EventHandler;
  /**
   * Event handler for when an ICC becomes undetected.
   */
  oniccundetected: EventHandler;
}
