import { MozVoicemailStatus } from '../common';

/**
 * File: dom/webidl/MozVoicemail.webidl
 */

/**
 * @preference dom.voicemail.enabled
 * @permissions voicemail
 * @available CertifiedApps
 */
export interface MozVoicemail extends EventTarget {
  /**
   * Gets the status of the voicemail service.
   * @param serviceId - The service ID to query.
   * @throws
   */
  getStatus(serviceId?: number): MozVoicemailStatus;

  /**
   * Gets the voicemail number.
   * @param serviceId - The service ID to query.
   * @throws
   */
  getNumber(serviceId?: number): string;

  /**
   * Gets the display name for the voicemail service.
   * @param serviceId - The service ID to query.
   * @throws
   */
  getDisplayName(serviceId?: number): string;

  /**
   * Event handler for when the voicemail status changes.
   */
  onstatuschanged: EventHandler;
}
