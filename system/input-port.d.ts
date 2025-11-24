/**
 * @preference dom.inputport.enabled
 * @permissions inputport
 * @available CertifiedApps
 * Represents a physical input port.
 */
export interface InputPort extends EventTarget {
  /**
   * The unique identifier of the input port.
   */
  readonly id: string;

  /**
   * The media stream associated with the input port.
   */
  readonly stream: MediaStream;

  /**
   * Whether the input port is connected.
   */
  readonly connected: boolean;

  /**
   * Event handler for when the input port connects.
   */
  onconnect: EventHandler;

  /**
   * Event handler for when the input port disconnects.
   */
  ondisconnect: EventHandler;
}
