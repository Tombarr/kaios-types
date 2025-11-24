import { BluetoothGattService } from './bluetooth-gatt-service';

/**
 * @permissions bluetooth
 */
export interface BluetoothGatt extends EventTarget {
  readonly services: BluetoothGattService[];
  readonly connectionState: BluetoothConnectionState;

  /**
   * Fired when the value of a characteristic changes.
   */
  oncharacteristicchanged: EventHandler;

  /**
   * Fired when the connection state changes.
   */
  onconnectionstatechanged: EventHandler;

  /**
   * Connects to the GATT server.
   */
  connect(): Promise<void>;

  /**
   * Disconnects from the GATT server.
   */
  disconnect(): Promise<void>;

  /**
   * Discovers services offered by the GATT server.
   */
  discoverServices(): Promise<void>;

  /**
   * Reads the RSSI (Received Signal Strength Indication) of the remote device.
   *
   * @returns A Promise resolving to the RSSI value.
   */
  readRemoteRssi(): Promise<number>;
}

export type BluetoothConnectionState =
  | 'disconnected'
  | 'disconnecting'
  | 'connected'
  | 'connecting';
