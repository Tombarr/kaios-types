/**
 * @permissions bluetooth
 */
export interface BluetoothDiscoveryHandle extends EventTarget {
  /**
   * Fired when a device is found during discovery.
   */
  ondevicefound: EventHandler;
}
