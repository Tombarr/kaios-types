import { SmsMessage } from '../common';

/**
 * File: dom/webidl/MozSmsEvent.webidl
 */

/**
 * Initialization options for MozSmsEvent.
 */
export interface MozSmsEventInit extends EventInit {
  /** The SMS message associated with the event. */
  message?: SmsMessage | null;
}

/**
 * Represents an event related to an SMS message.
 * @preference dom.sms.enabled
 * @permissions sms
 * @available CertifiedApps
 */
export interface MozSmsEvent extends Event {
  /** The SMS message associated with the event. */
  readonly message: SmsMessage | null;
}

declare const MozSmsEvent: {
  prototype: MozSmsEvent;
  new (type: string, eventInitDict?: MozSmsEventInit): MozSmsEvent;
};
