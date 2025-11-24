/**
 * @permissions bluetooth
 */
export interface BluetoothStatusChangedEvent extends Event {
  /** The address of the device. */
  readonly address: string;
  /** The new status. */
  readonly status: boolean;
}

export interface BluetoothStatusChangedEventInit extends EventInit {
  address?: string;
  status?: boolean;
}

declare const BluetoothStatusChangedEvent: {
  prototype: BluetoothStatusChangedEvent;
  new (
    type: string,
    eventInitDict?: BluetoothStatusChangedEventInit
  ): BluetoothStatusChangedEvent;
};
