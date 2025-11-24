import { BluetoothDevice } from './bluetooth-device';

/**
 * @permissions bluetooth
 */
export interface BluetoothLeDeviceEvent extends Event {
  /** The found Bluetooth device. */
  readonly device: BluetoothDevice | null;
  /** The Received Signal Strength Indication (RSSI). */
  readonly rssi: number;
  /**
   * The scan record of the device.
   * @throws
   */
  readonly scanRecord: ArrayBuffer | null;
}

export interface BluetoothLeDeviceEventInit extends EventInit {
  device?: BluetoothDevice | null;
  rssi?: number;
  scanRecord?: ArrayBuffer | null;
}

declare const BluetoothLeDeviceEvent: {
  prototype: BluetoothLeDeviceEvent;
  new (
    type: string,
    eventInitDict?: BluetoothLeDeviceEventInit
  ): BluetoothLeDeviceEvent;
};
