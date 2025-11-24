import { BluetoothGattCharacteristic } from './bluetooth-gatt-characteristic';

/**
 * @permissions bluetooth
 */
export interface BluetoothGattCharacteristicEvent extends Event {
  /** The characteristic associated with the event. */
  readonly characteristic: BluetoothGattCharacteristic | null;
}

export interface BluetoothGattCharacteristicEventInit extends EventInit {
  characteristic?: BluetoothGattCharacteristic | null;
}

declare const BluetoothGattCharacteristicEvent: {
  prototype: BluetoothGattCharacteristicEvent;
  new (
    type: string,
    eventInitDict?: BluetoothGattCharacteristicEventInit
  ): BluetoothGattCharacteristicEvent;
};
