/**
 * Common types and interfaces shared across KaiOS APIs
 */

/**
 * DOMRequest represents an asynchronous operation in the KaiOS/B2G platform.
 * It provides a promise-like interface for handling success and error callbacks.
 *
 * @example
 * ```typescript
 * const request: DOMRequest = navigator.mozSettings.createLock().get('wifi.enabled');
 * request.onsuccess = () => {
 *   console.log('Setting value:', request.result);
 * };
 * request.onerror = () => {
 *   console.error('Error:', request.error);
 * };
 * ```
 */
export interface DOMRequest extends EventTarget {
  /**
   * Current state of the request.
   */
  readonly readyState: 'pending' | 'done';

  /**
   * The result value when the request succeeds.
   */
  readonly result: any;

  /**
   * Error object when the request fails.
   */
  readonly error: DOMError | null;

  /**
   * Event handler called when the request completes successfully.
   */
  onsuccess: ((this: DOMRequest, ev: Event) => any) | null;

  /**
   * Event handler called when the request fails.
   */
  onerror: ((this: DOMRequest, ev: Event) => any) | null;

  /**
   * Promise-like interface for handling success and error.
   *
   * @param onSuccess - Callback invoked on success
   * @param onError - Callback invoked on error
   * @returns A Promise
   */
  then(
    onSuccess?: (value: any) => any,
    onError?: (reason: any) => any
  ): Promise<any>;
}

/**
 * DOMCursor extends DOMRequest for iterating over a collection of results.
 * Used for database queries and collection traversal.
 *
 * @example
 * ```typescript
 * const cursor = navigator.mozContacts.find({});
 * cursor.onsuccess = () => {
 *   if (!cursor.done) {
 *     console.log('Contact:', cursor.result);
 *     cursor.continue();
 *   }
 * };
 * ```
 */
export interface DOMCursor extends DOMRequest {
  /**
   * Indicates whether there are more results to iterate over.
   */
  readonly done: boolean;

  /**
   * Continues iteration to the next result.
   */
  continue(): void;
}

/**
 * Placeholder for SMS message structure.
 * Full definition should be provided by telephony module.
 */
export interface SmsMessage {}

/**
 * Placeholder for MMS message structure.
 * Full definition should be provided by telephony module.
 */
export interface MmsMessage {}

/**
 * Placeholder for voicemail status information.
 * Full definition should be provided by telephony module.
 */
export interface MozVoicemailStatus {}

/**
 * Placeholder for ICC (SIM card) interface.
 * Full definition should be provided by telephony module.
 */
export interface MozIcc {}

/**
 * Placeholder for mobile network information.
 * Full definition should be provided by telephony module.
 */
export interface MozMobileNetworkInfo {}

/**
 * Placeholder for mobile cell information.
 * Full definition should be provided by telephony module.
 */
export interface MozMobileCellInfo {}

/**
 * Placeholder for WiFi capabilities information.
 * Full definition should be provided by wifi module.
 */
export interface MozWifiCapabilities {}

/**
 * Placeholder for network statistics interface.
 * Full definition should be provided by network module.
 */
export interface MozNetworkStatsInterface {}

/**
 * Placeholder for network statistics query options.
 * Full definition should be provided by network module.
 */
export interface NetworkStatsGetOptions {}

/**
 * Placeholder for network statistics alarm configuration.
 * Full definition should be provided by network module.
 */
export interface NetworkStatsAlarmOptions {}

/**
 * Placeholder for TCP server socket options.
 * Full definition should be provided by network module.
 */
export interface ServerSocketOptions {}

/**
 * Placeholder for TCP server socket interface.
 * Full definition should be provided by network module.
 */
export interface TCPServerSocket {}

/**
 * Placeholder for wake lock listener interface.
 * Full definition should be provided by system module.
 */
export interface MozWakeLockListener {}

/**
 * Placeholder for camera promise data.
 * Full definition should be provided by media module.
 */
export interface CameraGetPromiseData {}

/**
 * Placeholder for camera capabilities.
 * Full definition should be provided by media module.
 */
export interface CameraCapabilities {}

/**
 * Placeholder for ISO-DEP NFC technology.
 * Full definition should be provided by NFC module.
 */
export interface MozIsoDepTech {}

/**
 * Placeholder for NFC-A technology.
 * Full definition should be provided by NFC module.
 */
export interface MozNfcATech {}

/**
 * Placeholder for NDEF record structure.
 * Full definition should be provided by NFC module.
 */
export interface MozNDEFRecord {}

/**
 * Placeholder for TV tuner interface.
 * Full definition should be provided by media module.
 */
export interface TVTuner {}

/**
 * Placeholder for TV source interface.
 * Full definition should be provided by media module.
 */
export interface TVSource {}
