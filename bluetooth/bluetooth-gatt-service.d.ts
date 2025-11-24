import {
  BluetoothGattCharacteristic,
  GattPermissions,
  GattCharacteristicProperties
} from './bluetooth-gatt-characteristic';

/**
 * @permissions bluetooth
 */
export interface BluetoothGattService {
  readonly characteristics: BluetoothGattCharacteristic[];
  readonly includedServices: BluetoothGattService[];
  readonly isPrimary: boolean;
  readonly uuid: string;
  readonly instanceId: number;

  /**
   * Adds a characteristic to the service.
   *
   * @param uuid The UUID of the characteristic.
   * @param permissions The permissions for the characteristic.
   * @param properties The properties of the characteristic.
   * @param value The initial value of the characteristic.
   * @returns A Promise resolving to the created BluetoothGattCharacteristic.
   */
  addCharacteristic(
    uuid: string,
    permissions: GattPermissions,
    properties: GattCharacteristicProperties,
    value: ArrayBuffer
  ): Promise<BluetoothGattCharacteristic>;

  /**
   * Adds an included service to the service.
   *
   * @param service The service to include.
   */
  addIncludedService(service: BluetoothGattService): Promise<void>;
}

export interface BluetoothGattServiceInit {
  isPrimary?: boolean;
  uuid?: string;
}

declare const BluetoothGattService: {
  prototype: BluetoothGattService;
  new (init: BluetoothGattServiceInit): BluetoothGattService;
};
