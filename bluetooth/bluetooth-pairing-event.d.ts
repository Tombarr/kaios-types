import { BluetoothPairingHandle } from './bluetooth-pairing-handle';

/**
 * @permissions bluetooth
 */
export interface BluetoothPairingEvent extends Event {
  /** The name of the remote device. */
  readonly deviceName: string;
  /** The handle for controlling the pairing process. */
  readonly handle: BluetoothPairingHandle | null;
}

export interface BluetoothPairingEventInit extends EventInit {
  deviceName?: string;
  handle?: BluetoothPairingHandle | null;
}

declare const BluetoothPairingEvent: {
  prototype: BluetoothPairingEvent;
  new (
    type: string,
    eventInitDict?: BluetoothPairingEventInit
  ): BluetoothPairingEvent;
};
