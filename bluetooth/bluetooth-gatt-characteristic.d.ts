import { BluetoothGattService } from './bluetooth-gatt-service';
import { BluetoothGattDescriptor } from './bluetooth-gatt-descriptor';

export interface GattCharacteristicProperties {
  broadcast?: boolean;
  read?: boolean;
  writeNoResponse?: boolean;
  write?: boolean;
  notify?: boolean;
  indicate?: boolean;
  signedWrite?: boolean;
  extendedProps?: boolean;
}

export interface GattPermissions {
  read?: boolean;
  readEncrypted?: boolean;
  readEncryptedMITM?: boolean;
  write?: boolean;
  writeEncrypted?: boolean;
  writeEncryptedMITM?: boolean;
  writeSigned?: boolean;
  writeSignedMITM?: boolean;
}

/**
 * @permissions bluetooth
 */
export interface BluetoothGattCharacteristic {
  readonly service: BluetoothGattService;
  readonly descriptors: BluetoothGattDescriptor[];
  readonly uuid: string;
  readonly instanceId: number;
  readonly value: ArrayBuffer | null;
  readonly permissions: GattPermissions;
  readonly properties: GattCharacteristicProperties;

  /**
   * Reads the value of the characteristic.
   *
   * @returns A Promise resolving to the value as an ArrayBuffer.
   */
  readValue(): Promise<ArrayBuffer>;

  /**
   * Writes a value to the characteristic.
   *
   * @param value The value to write.
   */
  writeValue(value: ArrayBuffer): Promise<void>;

  /**
   * Starts notifications for the characteristic.
   */
  startNotifications(): Promise<void>;

  /**
   * Stops notifications for the characteristic.
   */
  stopNotifications(): Promise<void>;

  /**
   * Adds a descriptor to the characteristic.
   *
   * @param uuid The UUID of the descriptor.
   * @param permissions The permissions for the descriptor.
   * @param value The initial value of the descriptor.
   * @returns A Promise resolving to the created BluetoothGattDescriptor.
   */
  addDescriptor(
    uuid: string,
    permissions: GattPermissions,
    value: ArrayBuffer
  ): Promise<BluetoothGattDescriptor>;
}
