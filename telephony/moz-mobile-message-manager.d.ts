import { DOMRequest, SmsMessage, MmsMessage, DOMCursor } from '../common';

/**
 * File: dom/webidl/MozMobileMessageManager.webidl
 */

export type MobileMessageFilterDelivery = 'sent' | 'received';

export type TypeOfNumber =
  | 'unknown'
  | 'international'
  | 'national'
  | 'network-specific'
  | 'dedicated-access-short-code';

export type NumberPlanIdentification =
  | 'unknown'
  | 'isdn'
  | 'data'
  | 'telex'
  | 'national'
  | 'private';

/**
 * Represents a segment of an SMS message.
 */
export interface SmsSegmentInfo {
  /** The number of segments the message is divided into. */
  segments?: number;
  /** The number of characters per segment. */
  charsPerSegment?: number;
  /** The number of characters available in the last segment. */
  charsAvailableInLastSegment?: number;
}

/**
 * Represents an attachment in an MMS message.
 */
export interface MmsAttachment {
  id?: string | null;
  location?: string | null;
  content?: Blob | null;
}

/**
 * Parameters for sending an MMS message.
 */
export interface MmsParameters {
  receivers: string[];
  subject?: string | null;
  smil?: string | null;
  attachments: MmsAttachment[];
}

/**
 * Parameters for sending an SMS message via a specific service.
 */
export interface SmsSendParameters {
  serviceId: number;
}

/**
 * Parameters for sending an MMS message via a specific service.
 */
export interface MmsSendParameters {
  serviceId: number;
}

/**
 * Filter options for retrieving messages.
 */
export interface MobileMessageFilter {
  /**
   * The start date for filtering messages.
   * @annotation EnforceRange
   */
  startDate?: number | null;
  /**
   * The end date for filtering messages.
   * @annotation EnforceRange
   */
  endDate?: number | null;
  /** The numbers involved in the messages. */
  numbers?: string[] | null;
  /** The delivery status ("sent" or "received"). */
  delivery?: MobileMessageFilterDelivery | null;
  /** Whether the message has been read. */
  read?: boolean | null;
  /**
   * The thread ID to filter by.
   * @annotation EnforceRange
   */
  threadId?: number | null;
}

export interface TypeOfAddress {
  typeOfNumber?: TypeOfNumber;
  numberPlanIdentification?: NumberPlanIdentification;
}

export interface SmscAddress {
  address: string;
  typeOfAddress: TypeOfAddress;
}

/**
 * @preference dom.sms.enabled
 * @permissions sms
 * @available CertifiedApps
 */
export interface MozMobileMessageManager extends EventTarget {
  /**
   * Calculates the number of segments required for a given text.
   * @param text - The text to analyze.
   * @throws
   */
  getSegmentInfoForText(text: string): DOMRequest;

  /**
   * Sends an SMS message to a single recipient.
   * @param number - The recipient's number.
   * @param text - The message body.
   * @param sendParameters - Optional parameters for sending.
   * @throws
   */
  send(
    number: string,
    text: string,
    sendParameters?: SmsSendParameters
  ): DOMRequest;

  /**
   * Sends an SMS message to multiple recipients.
   * @param numbers - The recipients' numbers.
   * @param text - The message body.
   * @param sendParameters - Optional parameters for sending.
   * @throws
   */
  send(
    numbers: string[],
    text: string,
    sendParameters?: SmsSendParameters
  ): DOMRequest[];

  /**
   * Sends an MMS message.
   * @param parameters - The MMS parameters including receivers and attachments.
   * @param sendParameters - Optional parameters for sending.
   * @throws
   */
  sendMMS(
    parameters?: MmsParameters,
    sendParameters?: MmsSendParameters
  ): DOMRequest;

  /**
   * Retrieves a message by its ID.
   * @param id - The ID of the message.
   * @throws
   */
  getMessage(id: number): DOMRequest;

  /**
   * Deletes a message by its ID.
   * @param id - The ID of the message to delete.
   * @throws
   */
  delete(id: number): DOMRequest;
  /**
   * Deletes a specific SMS message.
   * @param message - The SMS message object to delete.
   * @throws
   */
  delete(message: SmsMessage): DOMRequest;
  /**
   * Deletes a specific MMS message.
   * @param message - The MMS message object to delete.
   * @throws
   */
  delete(message: MmsMessage): DOMRequest;
  /**
   * Deletes a list of messages.
   * @param params - An array of message IDs or message objects.
   * @throws
   */
  delete(params: (number | SmsMessage | MmsMessage)[]): DOMRequest;

  /**
   * Retrieves messages matching the specified filter.
   * @param filter - The filter to apply.
   * @param reverse - Whether to return messages in reverse order.
   * @throws
   */
  getMessages(filter?: MobileMessageFilter, reverse?: boolean): DOMCursor;

  /**
   * Marks a message as read or unread.
   * @param id - The ID of the message.
   * @param read - True to mark as read, false to mark as unread.
   * @param sendReadReport - Whether to send a read report.
   * @throws
   */
  markMessageRead(
    id: number,
    read: boolean,
    sendReadReport?: boolean
  ): DOMRequest;

  /**
   * Retrieves a list of message threads.
   * @throws
   */
  getThreads(): DOMCursor;

  /**
   * Retrieves an MMS message by its ID.
   * @param id - The ID of the MMS message.
   * @throws
   */
  retrieveMMS(id: number): DOMRequest;
  /**
   * Retrieves the content of a specific MMS message.
   * @param message - The MMS message object.
   * @throws
   */
  retrieveMMS(message: MmsMessage): DOMRequest;

  /**
   * Gets the SMS Center (SMSC) address.
   * @param serviceId - The service ID to query.
   * @throws
   */
  getSmscAddress(serviceId?: number): Promise<SmscAddress>;

  /**
   * Sets the SMS Center (SMSC) address.
   * @param smscAddress - The SMSC address to set.
   * @param serviceId - The service ID to set for.
   */
  setSmscAddress(smscAddress?: SmscAddress, serviceId?: number): Promise<void>;

  /**
   * Event handler for when a message is received.
   */
  onreceived: EventHandler;
  /**
   * Event handler for when a message is being retrieved.
   */
  onretrieving: EventHandler;
  /**
   * Event handler for when a message is being sent.
   */
  onsending: EventHandler;
  /**
   * Event handler for when a message is successfully sent.
   */
  onsent: EventHandler;
  /**
   * Event handler for when a message send fails.
   */
  onfailed: EventHandler;
  /**
   * Event handler for when a message is successfully delivered.
   */
  ondeliverysuccess: EventHandler;
  /**
   * Event handler for when a message delivery fails.
   */
  ondeliveryerror: EventHandler;
  /**
   * Event handler for when a read report is successfully sent/received.
   */
  onreadsuccess: EventHandler;
  /**
   * Event handler for when a read report fails.
   */
  onreaderror: EventHandler;
  /**
   * Event handler for when a message is deleted.
   */
  ondeleted: EventHandler;
}
