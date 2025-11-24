import { DOMRequest, DOMCursor } from '../common';

/**
 * Device Storage API
 *
 * @see https://developer.kaiostech.com/docs/api/web-apis/deviceStorage/device-storage/
 */

export interface DeviceStorageEnumerationParameters {
  /**
   * A date to filter the results by. Only files modified since this date will be returned.
   */
  since?: Date;
}

/**
 * Provides access to the device's storage areas.
 * @note Pref: "device.storage.enabled"
 */
export interface DeviceStorage extends EventTarget {
  /**
   * Event handler for when the storage changes.
   */
  onchange: ((this: DeviceStorage, ev: Event) => any) | null;

  /**
   * Adds a file to the storage.
   * @param aBlob The content to add.
   * @throws Error
   */
  add(aBlob: Blob | null): DOMRequest | null;

  /**
   * Adds a file to the storage with a specific name.
   * @param aBlob The content to add.
   * @param aName The name to give the file.
   * @throws Error
   */
  addNamed(aBlob: Blob | null, aName: string): DOMRequest | null;

  /**
   * Appends content to an existing file.
   * @param aBlob The content to append.
   * @param aName The name of the file to append to.
   * @throws Error
   */
  appendNamed(aBlob: Blob | null, aName: string): DOMRequest | null;

  /**
   * Retrieves a file from storage.
   * @param aName The name of the file to retrieve.
   * @throws Error
   */
  get(aName: string): DOMRequest;

  /**
   * Retrieves an editable file from storage.
   * @param aName The name of the file to retrieve.
   * @throws Error
   */
  getEditable(aName: string): DOMRequest;

  /**
   * Deletes a file from storage.
   * @param aName The name of the file to delete.
   * @throws Error
   */
  delete(aName: string): DOMRequest;

  /**
   * Enumerates the files in the storage.
   * @param options Parameters to filter the enumeration.
   * @throws Error
   */
  enumerate(options?: DeviceStorageEnumerationParameters): DOMCursor;

  /**
   * Enumerates the files in a specific path.
   * @param path The path to enumerate.
   * @param options Parameters to filter the enumeration.
   * @throws Error
   */
  enumerate(
    path: string,
    options?: DeviceStorageEnumerationParameters
  ): DOMCursor;

  /**
   * Enumerates the editable files in the storage.
   * @param options Parameters to filter the enumeration.
   * @throws Error
   */
  enumerateEditable(options?: DeviceStorageEnumerationParameters): DOMCursor;

  /**
   * Enumerates the editable files in a specific path.
   * @param path The path to enumerate.
   * @param options Parameters to filter the enumeration.
   * @throws Error
   */
  enumerateEditable(
    path: string,
    options?: DeviceStorageEnumerationParameters
  ): DOMCursor;

  /**
   * gets the amount of free space in the storage.
   * @throws Error
   */
  freeSpace(): DOMRequest;

  /**
   * Gets the amount of used space in the storage.
   * @throws Error
   */
  usedSpace(): DOMRequest;

  /**
   * Gets the availability status of the storage.
   * @throws Error
   */
  available(): DOMRequest;

  /**
   * Gets the status of the storage.
   * @throws Error
   */
  storageStatus(): DOMRequest;

  /**
   * Formats the storage.
   * @throws Error
   */
  format(): DOMRequest;

  /**
   * Mounts the storage.
   * @throws Error
   */
  mount(): DOMRequest;

  /**
   * Unmounts the storage.
   * @throws Error
   */
  unmount(): DOMRequest;

  /**
   * The name of the storage area.
   */
  readonly storageName: string;

  /**
   * Whether the storage can be mounted.
   */
  readonly canBeMounted: boolean;

  /**
   * Whether the storage can be shared.
   */
  readonly canBeShared: boolean;

  /**
   * Whether the storage can be formatted.
   */
  readonly canBeFormatted: boolean;

  /**
   * Whether this is the default storage.
   */
  readonly default: boolean;

  /**
   * Whether the storage is removable.
   */
  readonly isRemovable: boolean;

  /**
   * Whether the storage has low disk space.
   */
  readonly lowDiskSpace: boolean;

  /**
   * Gets the root directory of the storage.
   */
  getRoot(): Promise<any>;
}
