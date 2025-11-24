import {
  BluetoothGattCharacteristic,
  GattPermissions
} from './bluetooth-gatt-characteristic';

/**
 * @permissions bluetooth
 */
export interface BluetoothGattDescriptor {
  readonly characteristic: BluetoothGattCharacteristic;
  readonly uuid: string;
  readonly value: ArrayBuffer | null;
  readonly permissions: GattPermissions;

  /**
   * Reads the value of the descriptor.
   *
   * @returns A Promise resolving to the value as an ArrayBuffer.
   */
  readValue(): Promise<ArrayBuffer>;

  /**
   * Writes a value to the descriptor.
   *
   * @param value The value to write.
   */
  writeValue(value: ArrayBuffer): Promise<void>;
}
