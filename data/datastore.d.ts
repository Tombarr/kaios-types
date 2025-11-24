/**
 * Data Store API
 *
 * @see https://developer.kaiostech.com/docs/api/web-apis/dataStore/data-store/
 */

export type DataStoreKey = string | number;

/**
 * @note Func: "Navigator::HasDataStoreSupport"
 * @note ChromeConstructor
 * @note Exposed: Window, Worker
 */
export interface DataStore extends EventTarget {
  /**
   * The name of the data store.
   * @throws Error if the store is not available.
   */
  readonly name: string;

  /**
   * The owner of the data store (manifest URL).
   * @throws Error if the store is not available.
   */
  readonly owner: string;

  /**
   * Whether the data store is read-only.
   * @throws Error if the store is not available.
   */
  readonly readOnly: boolean;

  /**
   * Retrieves one or more objects from the store by their IDs.
   *
   * @param id - The ID(s) of the object(s) to retrieve.
   * @returns A Promise that resolves with the object(s).
   * @throws Error
   */
  get(...id: DataStoreKey[]): Promise<any>;

  /**
   * Updates an existing object in the store.
   *
   * @param obj - The object to update.
   * @param id - The ID of the object.
   * @param revisionId - Optional revision ID to ensure consistency.
   * @returns A Promise that resolves when the update is complete.
   * @throws Error
   */
  put(obj: any, id: DataStoreKey, revisionId?: string): Promise<void>;

  /**
   * Adds a new object to the store.
   *
   * @param obj - The object to add.
   * @param id - Optional ID for the object.
   * @param revisionId - Optional revision ID to ensure consistency.
   * @returns A Promise that resolves with the ID of the added object.
   * @throws Error
   */
  add(obj: any, id?: DataStoreKey, revisionId?: string): Promise<DataStoreKey>;

  /**
   * Removes an object from the store.
   *
   * @param id - The ID of the object to remove.
   * @param revisionId - Optional revision ID to ensure consistency.
   * @returns A Promise that resolves with a boolean indicating success.
   * @throws Error
   */
  remove(id: DataStoreKey, revisionId?: string): Promise<boolean>;

  /**
   * Clears all objects from the store.
   *
   * @param revisionId - Optional revision ID to ensure consistency.
   * @returns A Promise that resolves when the store is cleared.
   * @throws Error
   */
  clear(revisionId?: string): Promise<void>;

  /**
   * The current revision ID of the store.
   * @throws Error
   */
  readonly revisionId: string;

  /**
   * Event handler called when the store changes.
   */
  onchange: ((this: DataStore, ev: Event) => any) | null;

  /**
   * Gets the number of objects in the store.
   *
   * @returns A Promise that resolves with the count.
   * @throws Error
   */
  getLength(): Promise<number>;

  /**
   * Synchronizes with the store, returning a cursor for iterating over changes.
   *
   * @param revisionId - The revision ID to start syncing from.
   * @returns A DataStoreCursor object.
   * @throws Error
   */
  sync(revisionId?: string): DataStoreCursor;
}

/**
 * @note Func: "Navigator::HasDataStoreSupport"
 * @note ChromeConstructor
 * @note Exposed: Window, Worker
 */
export interface DataStoreCursor {
  /**
   * The DataStore associated with this cursor.
   * @throws Error
   */
  readonly store: DataStore;

  /**
   * Retrieves the next task from the cursor.
   *
   * @returns A Promise that resolves with the next DataStoreTask.
   * @throws Error
   */
  next(): Promise<DataStoreTask>;

  /**
   * Closes the cursor.
   * @throws Error
   */
  close(): void;
}

export type DataStoreOperation = 'add' | 'update' | 'remove' | 'clear' | 'done';

export interface DataStoreTask {
  revisionId: string;
  operation: DataStoreOperation;
  id: DataStoreKey | null;
  data: any;
}
