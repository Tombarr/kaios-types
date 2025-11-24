/**
 * Definitions for:
 * - dom/webidl/InterAppConnection.webidl
 * - dom/webidl/InterAppConnectionRequest.webidl
 * - dom/webidl/InterAppMessagePort.webidl
 * - dom/webidl/MozInterAppMessageEvent.webidl
 */

/**
 * Represents an established Inter-App Connection.
 */
export interface MozInterAppConnection {
  /**
   * The keyword associated with the connection.
   */
  readonly keyword: string;

  /**
   * The manifest URL of the publisher application.
   */
  readonly publisher: string;

  /**
   * The manifest URL of the subscriber application.
   */
  readonly subscriber: string;

  /**
   * Cancels the connection.
   */
  cancel(): void;
}

/**
 * Represents a request to establish an Inter-App Connection.
 */
export interface MozInterAppConnectionRequest {
  /**
   * The keyword requested.
   */
  readonly keyword: string;

  /**
   * The message port for communication.
   */
  readonly port: MozInterAppMessagePort;

  /**
   * The manifest URL of the requesting application.
   */
  readonly from: string;
}

/**
 * A port for bidirectional Inter-App Communication.
 */
export interface MozInterAppMessagePort extends EventTarget {
  /**
   * Sends a message through the port.
   * @param message - The message to send.
   */
  postMessage(message: any): void;

  /**
   * Starts the port, enabling message reception.
   */
  start(): void;

  /**
   * Closes the port.
   */
  close(): void;

  onmessage: ((this: MozInterAppMessagePort, ev: MessageEvent) => any) | null;
  onclose: ((this: MozInterAppMessagePort, ev: Event) => any) | null;
}

export interface MozInterAppMessageEventInit extends EventInit {
  data?: any;
}

/**
 * Event fired when a message is received on a MozInterAppMessagePort.
 */
export interface MozInterAppMessageEvent extends Event {
  /**
   * The message data.
   */
  readonly data: any;
}
