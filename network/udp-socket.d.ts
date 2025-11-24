/**
 * File: dom/webidl/UDPSocket.webidl
 */

/**
 * Options for opening a UDP socket.
 */
export interface UDPOptions {
  localAddress: string;
  localPort: number;
  remoteAddress: string;
  remotePort: number;
  addressReuse?: boolean;
  loopback?: boolean;
}

/**
 * State of the socket.
 */
export type SocketReadyState = 'opening' | 'open' | 'closing' | 'closed';

/**
 * Represents a UDP socket.
 * Requires "dom.udpsocket.enabled" system preference.
 * Requires "udp-socket" permission.
 */
export interface UDPSocket extends EventTarget {
  /**
   * The local address bound to the socket.
   */
  readonly localAddress?: string;

  /**
   * The local port bound to the socket.
   */
  readonly localPort?: number;

  /**
   * The remote address the socket is connected to.
   */
  readonly remoteAddress?: string;

  /**
   * The remote port the socket is connected to.
   */
  readonly remotePort?: number;

  /**
   * Whether address reuse is enabled.
   */
  readonly addressReuse: boolean;

  /**
   * Whether loopback is enabled.
   */
  readonly loopback: boolean;

  /**
   * The current state of the socket.
   */
  readonly readyState: SocketReadyState;

  /**
   * Promise resolving when the socket is opened.
   */
  readonly opened: Promise<void>;

  /**
   * Promise resolving when the socket is closed.
   */
  readonly closed: Promise<void>;

  /**
   * Event handler for incoming messages.
   * Bug 1056444: use event interface before Stream API is ready
   */
  onmessage: EventHandler;

  /**
   * Closes the socket.
   */
  close(): Promise<void>;

  /**
   * Joins a multicast group.
   * @param multicastGroupAddress - The address of the multicast group to join.
   * @throws {Error}
   */
  joinMulticastGroup(multicastGroupAddress: string): void;

  /**
   * Leaves a multicast group.
   * @param multicastGroupAddress - The address of the multicast group to leave.
   * @throws {Error}
   */
  leaveMulticastGroup(multicastGroupAddress: string): void;

  /**
   * Sends data over the socket.
   * @param data - The data to send.
   * @param remoteAddress - Optional remote address if not connected.
   * @param remotePort - Optional remote port if not connected.
   * @returns True if sent successfully.
   * @throws {Error}
   */
  send(
    data: string | Blob | ArrayBuffer | ArrayBufferView,
    remoteAddress?: string,
    remotePort?: number
  ): boolean; // Bug 1056444: use send method before Stream API is ready
}
