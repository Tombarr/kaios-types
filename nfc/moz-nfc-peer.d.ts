import { MozNDEFRecord } from '../common';

/**
 * Represents an NFC Peer (another device).
 * @available PrivilegedApps
 */
export interface MozNFCPeer {
  /**
   * Whether the peer is lost (disconnected).
   */
  readonly isLost: boolean;

  /**
   * Sends NDEF records to the peer.
   * @param records - The NDEF records to send.
   * @throws {Error}
   */
  sendNDEF(records: MozNDEFRecord[]): Promise<void>;

  /**
   * Sends a file to the peer via Bluetooth/Wi-Fi handover.
   * @param blob - The file blob to send.
   * @throws {Error}
   * @permissions nfc-share
   * @available CertifiedApps
   */
  sendFile(blob: Blob): Promise<void>;

  /**
   * The session token.
   * @chromeOnly
   */
  session: string;

  /**
   * Notifies that the peer has been lost.
   * @chromeOnly
   */
  notifyLost(): void;
}
