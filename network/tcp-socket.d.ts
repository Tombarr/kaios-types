import { ServerSocketOptions, TCPServerSocket } from '../common';

/**
 * File: dom/webidl/TCPSocket.webidl
 */

/**
 * The binary type for TCP socket data.
 */
export type TCPSocketBinaryType = 'arraybuffer' | 'string';

/**
 * Options for opening a TCP socket.
 */
export interface SocketOptions {
  useSecureTransport?: boolean;
  binaryType?: TCPSocketBinaryType;
}

/**
 * State of the TCP socket.
 */
export type TCPReadyState = 'connecting' | 'open' | 'closing' | 'closed';

/**
 * Legacy interface for creating TCP sockets.
 */
export interface LegacyMozTCPSocket {
  /**
   * Opens a new TCP connection.
   * @param host - The hostname or IP address.
   * @param port - The port number.
   * @param options - Connection options.
   * @throws {Error}
   */
  open(host: string, port: number, options?: SocketOptions): TCPSocket;

  /**
   * Listens for incoming TCP connections.
   * @param port - The port to listen on.
   * @param options - Server options.
   * @param backlog - The maximum length of the queue of pending connections.
   * @throws {Error}
   */
  // Note: TCPServerSocket and ServerSocketOptions are not defined in the provided IDL
  listen(
    port: number,
    options?: ServerSocketOptions,
    backlog?: number
  ): TCPServerSocket;
}

/**
 * Represents a TCP socket connection.
 * Available only if "mozilla::dom::TCPSocket::ShouldTCPSocketExist" is true.
 * Exposed to: Window, System
 */
export interface TCPSocket extends EventTarget {
  /**
   * Upgrades the connection to use secure transport (SSL/TLS).
   * @throws {Error}
   */
  upgradeToSecure(): void;

  /**
   * The remote host.
   */
  readonly host: string;

  /**
   * The remote port.
   */
  readonly port: number;

  /**
   * Whether the connection is secure.
   */
  readonly ssl: boolean;

  /**
   * The amount of buffered data.
   */
  readonly bufferedAmount: number;

  /**
   * Suspends the socket, stopping data events.
   */
  suspend(): void;

  /**
   * Resumes the socket.
   * @throws {Error}
   */
  resume(): void;

  /**
   * Closes the socket.
   */
  close(): void;

  /**
   * Sends data over the socket.
   * @param data - The data string to send.
   * @returns True if written directly to kernel buffer, false if buffered in user space.
   * @throws {Error}
   */
  send(data: string): boolean;

  /**
   * Sends data over the socket.
   * @param data - The binary data to send.
   * @param byteOffset - The offset in the buffer.
   * @param byteLength - The length of data to send.
   * @returns True if written directly to kernel buffer, false if buffered in user space.
   * @throws {Error}
   */
  send(data: ArrayBuffer, byteOffset?: number, byteLength?: number): boolean;

  /**
   * The current state of the socket.
   */
  readonly readyState: TCPReadyState;

  /**
   * The type of binary data being used.
   */
  readonly binaryType: TCPSocketBinaryType;

  /**
   * Event handler for when the socket opens.
   */
  onopen: EventHandler;

  /**
   * Event handler for when the buffer drains.
   */
  ondrain: EventHandler;

  /**
   * Event handler for incoming data.
   */
  ondata: EventHandler;

  /**
   * Event handler for errors.
   */
  onerror: EventHandler;

  /**
   * Event handler for socket close.
   */
  onclose: EventHandler;
}
