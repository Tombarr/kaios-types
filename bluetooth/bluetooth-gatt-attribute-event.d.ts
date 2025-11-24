import { BluetoothGattCharacteristic } from './bluetooth-gatt-characteristic';
import { BluetoothGattDescriptor } from './bluetooth-gatt-descriptor';

/**
 * @permissions bluetooth
 */
export interface BluetoothGattAttributeEvent extends Event {
  /** The address of the remote device. */
  readonly address: string;
  /** The request identifier. */
  readonly requestId: number;
  /** The characteristic involved in the request. */
  readonly characteristic: BluetoothGattCharacteristic | null;
  /** The descriptor involved in the request. */
  readonly descriptor: BluetoothGattDescriptor | null;
  /**
   * The value of the attribute.
   * @throws
   */
  readonly value: ArrayBuffer | null;
  /** Indicates if a response is needed for this request. */
  readonly needResponse: boolean;
}

export interface BluetoothGattAttributeEventInit extends EventInit {
  address?: string;
  requestId?: number;
  characteristic?: BluetoothGattCharacteristic | null;
  descriptor?: BluetoothGattDescriptor | null;
  value?: ArrayBuffer | null;
  needResponse?: boolean;
}

declare const BluetoothGattAttributeEvent: {
  prototype: BluetoothGattAttributeEvent;
  new (
    type: string,
    eventInitDict?: BluetoothGattAttributeEventInit
  ): BluetoothGattAttributeEvent;
};
