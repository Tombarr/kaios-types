/**
 * Enum representing possible NFC error messages.
 */
export enum NfcErrorMessage {
  '',
  'IOError',
  'Timeout',
  'Busy',
  'ErrorConnect',
  'ErrorDisconnect',
  'ErrorRead',
  'ErrorWrite',
  'InvalidParameter',
  'InsufficientResource',
  'ErrorSocketCreation',
  'FailEnableDiscovery',
  'FailDisableDiscovery',
  'NotInitialize',
  'InitializeFail',
  'DeinitializeFail',
  'NotSupport',
  'FailEnableLowPowerMode',
  'FailDisableLowPowerMode'
}

/**
 * Interface for managing NFC operations.
 */
export interface MozNFCManager {
  /**
   * Checks P2P registration status for an app.
   * @param manifestUrl - The manifest URL of the application.
   * @permissions nfc-manager
   * @available CertifiedApps
   */
  checkP2PRegistration(manifestUrl: string): Promise<boolean>;

  /**
   * Notifies that the user accepted a P2P sharing request.
   * @param manifestUrl - The manifest URL of the application.
   * @permissions nfc-manager
   * @available CertifiedApps
   */
  notifyUserAcceptedP2P(manifestUrl: string): void;

  /**
   * Notifies the status of a send file request.
   * @param status - The status code.
   * @param requestId - The request ID.
   * @permissions nfc-manager
   * @available CertifiedApps
   */
  notifySendFileStatus(status: number, requestId: string): void;

  /**
   * Starts polling for NFC tags and peers.
   * @permissions nfc-manager
   * @available CertifiedApps
   */
  startPoll(): Promise<void>;

  /**
   * Stops polling for NFC tags and peers.
   * @permissions nfc-manager
   * @available CertifiedApps
   */
  stopPoll(): Promise<void>;

  /**
   * Powers off the NFC controller.
   * @permissions nfc-manager
   * @available CertifiedApps
   */
  powerOff(): Promise<void>;
}

/**
 * Main NFC interface exposed to applications.
 * Requires "Navigator::HasNFCSupport" to be true
 * @permissions nfc or nfc-share
 * @available PrivilegedApps
 * UnsafeInPrerendering
 */
export interface MozNFC extends EventTarget, MozNFCManager {
  /**
   * Whether NFC is currently enabled.
   */
  readonly enabled: boolean;

  /**
   * Event handler for when an NFC peer is ready.
   * @permissions nfc-share
   * @available CertifiedApps
   */
  onpeerready: EventHandler;

  /**
   * Event handler for when an NFC peer is found.
   */
  onpeerfound: EventHandler;

  /**
   * Event handler for when an NFC peer is lost.
   */
  onpeerlost: EventHandler;

  /**
   * Event handler for when an NFC tag is found.
   */
  ontagfound: EventHandler;

  /**
   * Event handler for when an NFC tag is lost.
   */
  ontaglost: EventHandler;

  /**
   * @chromeOnly
   */
  eventListenerWasAdded(aType: string): void;

  /**
   * @chromeOnly
   */
  eventListenerWasRemoved(aType: string): void;
}
