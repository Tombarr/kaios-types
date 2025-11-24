import { MmsMessage } from '../common';

/**
 * File: dom/webidl/MozMmsEvent.webidl
 */

/**
 * Initialization options for MozMmsEvent.
 */
export interface MozMmsEventInit extends EventInit {
  /** The MMS message associated with the event. */
  message?: MmsMessage | null;
}

/**
 * Represents an event related to an MMS message.
 * @preference dom.sms.enabled
 * @permissions sms
 * @available CertifiedApps
 */
export interface MozMmsEvent extends Event {
  /** The MMS message associated with the event. */
  readonly message: MmsMessage | null;
}

declare const MozMmsEvent: {
  prototype: MozMmsEvent;
  new (type: string, eventInitDict?: MozMmsEventInit): MozMmsEvent;
};
