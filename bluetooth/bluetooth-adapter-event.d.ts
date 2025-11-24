import { BluetoothAdapter } from './bluetooth-adapter';

/**
 * @permissions bluetooth
 */
export interface BluetoothAdapterEvent extends Event {
  readonly adapter: BluetoothAdapter | null;
  readonly address: string | null;
}

export interface BluetoothAdapterEventInit extends EventInit {
  adapter?: BluetoothAdapter | null;
  address?: string | null;
}

declare const BluetoothAdapterEvent: {
  prototype: BluetoothAdapterEvent;
  new (
    type: string,
    eventInitDict?: BluetoothAdapterEventInit
  ): BluetoothAdapterEvent;
};
