/**
 * File: dom/webidl/MozCellBroadcast.webidl
 */

/**
 * @preference dom.cellbroadcast.enabled
 * @permissions cellbroadcast
 * @available CertifiedApps
 */
export interface MozCellBroadcast extends EventTarget {
  /**
   * Event handler for when a cell broadcast message is received.
   */
  onreceived: EventHandler;
}
