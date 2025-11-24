/**
 * @available CertifiedApps
 * @permissions bluetooth
 */
export interface BluetoothPairingListener extends EventTarget {
  /**
   * Fired when a passkey needs to be displayed.
   */
  ondisplaypasskeyreq: EventHandler;

  /**
   * Fired when a PIN code needs to be entered.
   */
  onenterpincodereq: EventHandler;

  /**
   * Fired when pairing confirmation is requested.
   */
  onpairingconfirmationreq: EventHandler;

  /**
   * Fired when pairing consent is requested.
   */
  onpairingconsentreq: EventHandler;
}
