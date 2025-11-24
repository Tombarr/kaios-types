/**
 * @permissions bluetooth
 */
export interface BluetoothPairingHandle {
  readonly passkey: string;

  /**
   * Sets the PIN code for pairing.
   *
   * @param aPinCode The PIN code string.
   */
  setPinCode(aPinCode: string): Promise<void>;

  /**
   * Accepts the pairing request.
   */
  accept(): Promise<void>;

  /**
   * Rejects the pairing request.
   */
  reject(): Promise<void>;
}
