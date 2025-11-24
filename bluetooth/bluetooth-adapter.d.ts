import { BluetoothGattServer } from './bluetooth-gatt-server';
import { BluetoothPairingListener } from './bluetooth-pairing-listener';
import { BluetoothDiscoveryHandle } from './bluetooth-discovery-handle';
import { BluetoothDevice } from './bluetooth-device';
import { DOMRequest } from '../common';

export interface MediaMetaData {
  title?: string;
  artist?: string;
  album?: string;
  mediaNumber?: number;
  totalMediaCount?: number;
  duration?: number;
}

export interface MediaPlayStatus {
  duration?: number;
  position?: number;
  playStatus?: string;
}

/**
 * @permissions bluetooth
 */
export interface BluetoothAdapter extends EventTarget {
  readonly state: BluetoothAdapterState;

  /**
   * @available CertifiedApps
   */
  readonly address: string;

  readonly name: string;
  readonly discoverable: boolean;
  readonly discovering: boolean;
  readonly gattServer: BluetoothGattServer | null;

  /**
   * @available CertifiedApps
   */
  readonly pairingReqs: BluetoothPairingListener | null;

  onattributechanged: EventHandler;
  ondevicepaired: EventHandler;
  ondeviceunpaired: EventHandler;
  onpairingaborted: EventHandler;
  ona2dpstatuschanged: EventHandler;
  onhfpstatuschanged: EventHandler;
  onhidstatuschanged: EventHandler;
  onscostatuschanged: EventHandler;
  onrequestmediaplaystatus: EventHandler;
  onobexpasswordreq: EventHandler;
  onpullphonebookreq: EventHandler;
  onpullvcardentryreq: EventHandler;
  onpullvcardlistingreq: EventHandler;
  onmapfolderlistingreq: EventHandler;
  onmapmessageslistingreq: EventHandler;
  onmapgetmessagereq: EventHandler;
  onmapsetmessagestatusreq: EventHandler;
  onmapsendmessagereq: EventHandler;
  onmapmessageupdatereq: EventHandler;

  /**
   * Turns on the Bluetooth adapter.
   *
   * @available CertifiedApps
   */
  enable(): Promise<void>;

  /**
   * Turns off the Bluetooth adapter.
   *
   * @available CertifiedApps
   */
  disable(): Promise<void>;

  /**
   * Sets the name of the adapter.
   *
   * @param name The name to set.
   * @available CertifiedApps
   */
  setName(name: string): Promise<void>;

  /**
   * Sets the discoverable state of the adapter.
   *
   * @param discoverable Boolean indicating if the adapter should be discoverable.
   */
  setDiscoverable(discoverable: boolean): Promise<void>;

  /**
   * Starts the discovery process for visible devices.
   *
   * @returns A Promise that resolves to a BluetoothDiscoveryHandle.
   */
  startDiscovery(): Promise<BluetoothDiscoveryHandle>;

  /**
   * Stops the discovery process.
   */
  stopDiscovery(): Promise<void>;

  /**
   * Initiates pairing with a remote device.
   *
   * @param deviceAddress The address of the remote device.
   */
  pair(deviceAddress: string): Promise<void>;

  /**
   * Unpairs a remote device.
   *
   * @param deviceAddress The address of the remote device.
   */
  unpair(deviceAddress: string): Promise<void>;

  /**
   * Retrieves a list of paired devices.
   *
   * @returns An array of BluetoothDevice objects.
   */
  getPairedDevices(): BluetoothDevice[];

  /**
   * Starts scanning for Bluetooth Low Energy (LE) devices.
   *
   * @param serviceUuids An array of service UUIDs to filter by.
   */
  startLeScan(serviceUuids: string[]): Promise<BluetoothDiscoveryHandle>;

  /**
   * Stops scanning for Bluetooth Low Energy (LE) devices.
   *
   * @param discoveryHandle The handle returned by startLeScan.
   */
  stopLeScan(discoveryHandle: BluetoothDiscoveryHandle): Promise<void>;

  /**
   * Retrieves the connected devices for a specific service.
   *
   * @param serviceUuid The UUID of the service.
   * @throws
   * @available CertifiedApps
   */
  getConnectedDevices(serviceUuid: number): DOMRequest;

  /**
   * Connects to a specific service on a remote device.
   *
   * @param device The BluetoothDevice to connect to.
   * @param serviceUuid The UUID of the service to connect to.
   * @throws
   * @available CertifiedApps
   */
  connect(device: BluetoothDevice, serviceUuid?: number): DOMRequest;

  /**
   * Disconnects from a specific service on a remote device.
   *
   * @param device The BluetoothDevice to disconnect from.
   * @param serviceUuid The UUID of the service to disconnect from.
   * @throws
   * @available CertifiedApps
   */
  disconnect(device: BluetoothDevice, serviceUuid?: number): DOMRequest;

  /**
   * Sends a file to a remote device.
   *
   * @param deviceAddress The address of the recipient device.
   * @param blob The file content to send.
   * @throws
   * @available CertifiedApps
   */
  sendFile(deviceAddress: string, blob: Blob): DOMRequest;

  /**
   * Stops sending a file to a remote device.
   *
   * @param deviceAddress The address of the recipient device.
   * @throws
   * @available CertifiedApps
   */
  stopSendingFile(deviceAddress: string): DOMRequest;

  /**
   * Confirms the reception of a file from a remote device.
   *
   * @param deviceAddress The address of the sender device.
   * @param confirmation True to accept the file, false to reject.
   * @throws
   * @available CertifiedApps
   */
  confirmReceivingFile(
    deviceAddress: string,
    confirmation: boolean
  ): DOMRequest;

  /**
   * Connects to the SCO (Synchronous Connection Oriented) link.
   *
   * @throws
   * @available CertifiedApps
   */
  connectSco(): DOMRequest;

  /**
   * Disconnects the SCO link.
   *
   * @throws
   * @available CertifiedApps
   */
  disconnectSco(): DOMRequest;

  /**
   * Checks if the SCO link is connected.
   *
   * @throws
   * @available CertifiedApps
   */
  isScoConnected(): DOMRequest;

  /**
   * Answers a waiting call.
   *
   * @throws
   * @available CertifiedApps
   */
  answerWaitingCall(): DOMRequest;

  /**
   * Ignores a waiting call.
   *
   * @throws
   * @available CertifiedApps
   */
  ignoreWaitingCall(): DOMRequest;

  /**
   * Toggles calls.
   *
   * @throws
   * @available CertifiedApps
   */
  toggleCalls(): DOMRequest;

  /**
   * Sends media metadata to the remote device.
   *
   * @param mediaMetaData The metadata to send.
   * @throws
   * @available CertifiedApps
   */
  sendMediaMetaData(mediaMetaData?: MediaMetaData): DOMRequest;

  /**
   * Sends media play status to the remote device.
   *
   * @param mediaPlayStatus The play status to send.
   * @throws
   * @available CertifiedApps
   */
  sendMediaPlayStatus(mediaPlayStatus?: MediaPlayStatus): DOMRequest;
}

export type BluetoothAdapterState =
  | 'disabled'
  | 'disabling'
  | 'enabled'
  | 'enabling';

export type BluetoothAdapterAttribute =
  | 'unknown'
  | 'state'
  | 'address'
  | 'name'
  | 'discoverable'
  | 'discovering';
