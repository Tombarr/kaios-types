import { BluetoothClassOfDevice } from './bluetooth-class-of-device';
import { BluetoothGatt } from './bluetooth-gatt';

/**
 * @permissions bluetooth
 */
export interface BluetoothDevice extends EventTarget {
  readonly address: string;
  readonly cod: BluetoothClassOfDevice;
  readonly name: string;
  readonly paired: boolean;
  readonly type: BluetoothDeviceType;

  readonly gatt: BluetoothGatt | null;

  readonly uuids: string[];

  /**
   * Fired when an attribute of the device changes.
   */
  onattributechanged: EventHandler;

  /**
   * Fetches the UUIDs of services supported by the device.
   *
   * @returns A Promise that resolves to an array of UUID strings.
   */
  fetchUuids(): Promise<string[]>;
}

export type BluetoothDeviceType = 'unknown' | 'classic' | 'le' | 'dual';

export type BluetoothDeviceAttribute =
  | 'unknown'
  | 'cod'
  | 'name'
  | 'paired'
  | 'uuids';
