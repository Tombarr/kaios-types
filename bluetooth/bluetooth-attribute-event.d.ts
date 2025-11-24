/**
 * @permissions bluetooth
 */
export interface BluetoothAttributeEvent extends Event {
  readonly attrs: string[];
}

export interface BluetoothAttributeEventInit extends EventInit {
  attrs?: string[];
}

declare const BluetoothAttributeEvent: {
  prototype: BluetoothAttributeEvent;
  new (
    type: string,
    eventInitDict?: BluetoothAttributeEventInit
  ): BluetoothAttributeEvent;
};
