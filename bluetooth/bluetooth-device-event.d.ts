import { BluetoothDevice } from './bluetooth-device';

/**
 * @permissions bluetooth
 */
export interface BluetoothDeviceEvent extends Event {
  readonly device: BluetoothDevice | null;
  readonly address: string | null;
}

export interface BluetoothDeviceEventInit extends EventInit {
  device?: BluetoothDevice | null;
  address?: string | null;
}

declare const BluetoothDeviceEvent: {
  prototype: BluetoothDeviceEvent;
  new (
    type: string,
    eventInitDict?: BluetoothDeviceEventInit
  ): BluetoothDeviceEvent;
};
