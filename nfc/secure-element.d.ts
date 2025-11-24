/**
 * Manages access to Secure Element readers on the device.
 * Accessed via navigator.seManager.
 *
 * @preference dom.secureelement.enabled
 * @permissions secureelement-manage
 * @available CertifiedApps
 */
export interface SEManager {
  /**
   * Retrieves all available Secure Element readers on the device.
   *
   * @returns A Promise that resolves with an array of SEReader objects
   * @example
   * ```typescript
   * navigator.seManager.getSEReaders().then((readers) => {
   *   readers.forEach((reader) => {
   *     console.log(`SE Reader present: ${reader.isSEPresent}`);
   *   });
   * });
   * ```
   */
  getSEReaders(): Promise<SEReader[]>;
}

/**
 * Enum for Secure Element types.
 */
export enum SEType {
  'uicc',
  'eSE'
}

/**
 * Enum for Secure Element errors.
 */
export enum SEError {
  'SESecurityError',
  'SEIoError',
  'SEBadStateError',
  'SEInvalidChannelError',
  'SEInvalidApplicationError',
  'SENotPresentError',
  'SEIllegalParameterError',
  'SEGenericError'
}

/**
 * Enum for Secure Element channel types.
 */
export enum SEChannelType {
  'basic',
  'logical'
}

/**
 * Interface representing a Secure Element APDU command.
 */
export interface SECommand {
  cla: number;
  ins: number;
  p1: number;
  p2: number;
  data?: number[] | null;
  le?: number;
}

/**
 * Represents a Secure Element Reader.
 * Preference: "dom.secureelement.enabled"
 * @permissions secureelement-manage
 * @available CertifiedApps
 */
export interface SEReader {
  /**
   * Whether the Secure Element is present.
   */
  readonly isSEPresent: boolean;

  /**
   * The type of the Secure Element.
   */
  readonly type: SEType;

  /**
   * Opens a session with the Secure Element.
   * @returns A promise resolving to the session.
   * @throws {Error}
   */
  openSession(): Promise<SESession>;

  /**
   * Closes all sessions.
   * @throws {Error}
   */
  closeAll(): Promise<void>;
}

/**
 * Represents a session with a Secure Element.
 * Preference: "dom.secureelement.enabled"
 * @permissions secureelement-manage
 * @available CertifiedApps
 */
export interface SESession {
  /**
   * The reader associated with this session.
   */
  readonly reader: SEReader;

  /**
   * Whether the session is closed.
   */
  readonly isClosed: boolean;

  /**
   * Opens a logical channel to an applet.
   * @param aid - The Applet ID.
   * @returns A promise resolving to the channel.
   * @throws {Error}
   */
  openLogicalChannel(aid: Uint8Array | null): Promise<SEChannel>;

  /**
   * Closes all channels in this session.
   * @throws {Error}
   */
  closeAll(): Promise<void>;
}

/**
 * Represents a channel to a Secure Element applet.
 * Preference: "dom.secureelement.enabled"
 * @permissions secureelement-manage
 * @available CertifiedApps
 */
export interface SEChannel {
  /**
   * The session associated with this channel.
   */
  readonly session: SESession;

  /**
   * The response from the open command.
   */
  readonly openResponse: Uint8Array | null;

  /**
   * Whether the channel is closed.
   */
  readonly isClosed: boolean;

  /**
   * The type of the channel.
   */
  readonly type: SEChannelType;

  /**
   * Transmits an APDU command to the applet.
   * @param command - The command to transmit.
   * @returns A promise resolving to the response.
   * @throws {Error}
   */
  transmit(command?: SECommand): Promise<SEResponse>;

  /**
   * Closes the channel.
   * @throws {Error}
   */
  close(): Promise<void>;
}

/**
 * Represents a response from a Secure Element.
 * Preference: "dom.secureelement.enabled"
 * @permissions secureelement-manage
 * @available CertifiedApps
 */
export interface SEResponse {
  /**
   * The channel associated with this response.
   */
  readonly channel: SEChannel;

  /**
   * Status Word 1.
   */
  readonly sw1: number;

  /**
   * Status Word 2.
   */
  readonly sw2: number;

  /**
   * The response data.
   */
  readonly data: number[] | null;
}
