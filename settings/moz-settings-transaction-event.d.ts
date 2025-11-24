/**
 * @constructor
 * @permissions settings-api-read, settings-api-write
 */
export interface MozSettingsTransactionEvent extends Event {
  /**
   * An error message describing why the transaction failed, or null if successful.
   */
  readonly error: string | null;
}

export interface MozSettingsTransactionEventInit extends EventInit {
  /**
   * An error message describing the transaction failure.
   */
  error?: string;
}
