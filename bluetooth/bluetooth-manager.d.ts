import { BluetoothAdapter } from './bluetooth-adapter';

/**
 * @permissions bluetooth
 */
export interface BluetoothManager extends EventTarget {
  readonly defaultAdapter: BluetoothAdapter | null;

  /**
   * Fired when attribute(s) of BluetoothManager changed
   */
  onattributechanged: EventHandler;

  /**
   * Fired when a new adapter is plugged in
   */
  onadapteradded: EventHandler;

  /**
   * Fired when an existing adapter is unplugged
   */
  onadapterremoved: EventHandler;

  /**
   * Returns the list of available adapters.
   *
   * @returns An array of BluetoothAdapter objects.
   */
  getAdapters(): BluetoothAdapter[];
}

export type BluetoothManagerAttribute = 'unknown' | 'defaultAdapter';
