/**
 * Information about a system update provider.
 */
export interface SystemUpdateProviderInfo {
  /**
   * The name of the provider.
   */
  name?: string;

  /**
   * The UUID of the provider.
   */
  uuid?: string;
}

/**
 * Information about a system update package.
 */
export interface SystemUpdatePackageInfo {
  /**
   * The type of the update package.
   */
  type?: string;

  /**
   * The version of the update.
   */
  version?: string;

  /**
   * A description of the update.
   */
  description?: string;

  /**
   * The build date of the update.
   */
  buildDate?: number;

  /**
   * The size of the update package.
   */
  size?: number;
}

/**
 * @permissions system-update
 * @preference dom.system_update.enabled
 * Represents a provider for system updates.
 */
export interface SystemUpdateProvider extends EventTarget {
  /**
   * The name of the provider.
   */
  readonly name: string;

  /**
   * The UUID of the provider.
   */
  readonly uuid: string;

  /**
   * Event handler for when an update is available.
   */
  onupdateavailable: EventHandler;

  /**
   * Event handler for update progress.
   */
  onprogress: EventHandler;

  /**
   * Event handler for when an update is ready to be installed.
   */
  onupdateready: EventHandler;

  /**
   * Event handler for when an error occurs.
   */
  onerror: EventHandler;

  /**
   * Checks for available updates.
   */
  checkForUpdate(): void;

  /**
   * Starts downloading the update.
   */
  startDownload(): void;

  /**
   * Stops downloading the update.
   */
  stopDownload(): void;

  /**
   * Applies the downloaded update.
   */
  applyUpdate(): void;

  /**
   * Sets a parameter for the update provider.
   * @param name The name of the parameter.
   * @param value The value of the parameter.
   * @returns True if the parameter was set successfully.
   */
  setParameter(name: string, value: string): boolean;

  /**
   * Gets a parameter from the update provider.
   * @param name The name of the parameter.
   * @returns The value of the parameter.
   */
  getParameter(name: string): string;
}

/**
 * @navigatorProperty updateManager
 * @permissions system-update
 * @preference dom.system_update.enabled
 * Manages system update providers.
 */
export interface SystemUpdateManager {
  /**
   * Retrieves a list of available update providers.
   */
  getProviders(): Promise<SystemUpdateProviderInfo[]>;

  /**
   * Sets the active update provider.
   * @param uuid The UUID of the provider to set as active.
   */
  setActiveProvider(uuid: string): Promise<SystemUpdateProvider>;

  /**
   * Gets the currently active update provider.
   */
  getActiveProvider(): Promise<SystemUpdateProvider>;
}
