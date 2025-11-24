import { BluetoothGattService } from './bluetooth-gatt-service';
import { BluetoothGattCharacteristic } from './bluetooth-gatt-characteristic';

export interface BluetoothAdvertisingData {
  appearance?: number;
  includeDevName?: boolean;
  includeTxPower?: boolean;
  manufacturerId?: number;
  manufacturerData?: ArrayBuffer | null;
  serviceUuid?: string;
  serviceData?: ArrayBuffer | null;
  serviceUuids?: string[];
}

/**
 * @permissions bluetooth
 */
export interface BluetoothGattServer extends EventTarget {
  readonly services: BluetoothGattService[];

  /**
   * Fired when the connection state changes.
   */
  onconnectionstatechanged: EventHandler;

  /**
   * Fired when a read request for an attribute is received.
   */
  onattributereadreq: EventHandler;

  /**
   * Fired when a write request for an attribute is received.
   */
  onattributewritereq: EventHandler;

  /**
   * Connects to a remote device.
   *
   * @param address The address of the remote device.
   */
  connect(address: string): Promise<void>;

  /**
   * Disconnects from a remote device.
   *
   * @param address The address of the remote device.
   */
  disconnect(address: string): Promise<void>;

  /**
   * Starts advertising the GATT server.
   *
   * @param advData The advertising data.
   */
  startAdvertising(advData?: BluetoothAdvertisingData): Promise<void>;

  /**
   * Stops advertising the GATT server.
   */
  stopAdvertising(): Promise<void>;

  /**
   * Adds a service to the GATT server.
   *
   * @param service The service to add.
   */
  addService(service: BluetoothGattService): Promise<void>;

  /**
   * Removes a service from the GATT server.
   *
   * @param service The service to remove.
   */
  removeService(service: BluetoothGattService): Promise<void>;

  /**
   * Notifies a client that a characteristic value has changed.
   *
   * @param address The address of the client.
   * @param characteristic The characteristic that changed.
   * @param confirm Whether the client should confirm the notification (indication).
   */
  notifyCharacteristicChanged(
    address: string,
    characteristic: BluetoothGattCharacteristic,
    confirm: boolean
  ): Promise<void>;

  /**
   * Sends a response to a read or write request.
   *
   * @param address The address of the client.
   * @param status The status of the operation.
   * @param requestId The request ID.
   */
  sendResponse(
    address: string,
    status: number,
    requestId: number
  ): Promise<void>;
}
