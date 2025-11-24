import { DOMRequest } from '../common';
import { MozInterAppConnection, MozInterAppMessagePort } from './inter-app';

export interface InstallParameters {
  /**
   * Receipts for the installation.
   */
  receipts?: string[];

  /**
   * Categories for the application.
   */
  categories?: string[];
}

export interface LanguageDesc {
  /**
   * The target language code.
   */
  target: string;

  /**
   * The revision number.
   */
  revision: number;

  /**
   * The name of the language.
   */
  name: string;
}

export type LocaleResourceType = 'binary' | 'json' | 'text';

/**
 * Helper type for MozMap WebIDL construct
 */
export type MozMap<T> = Record<string, T>;

/**
 * @permissions webapps-manage, homescreen-webapps-manage
 */
export interface DOMApplicationsRegistry {
  /**
   * @permissions webapps-manage, homescreen-webapps-manage
   */
  readonly mgmt: DOMApplicationsManager;

  /**
   * Installs an application from a manifest URL.
   *
   * @param url - The URL of the manifest.
   * @param params - Optional parameters for the installation.
   */
  install(url: string, params?: InstallParameters): DOMRequest;

  /**
   * Installs a packaged application.
   *
   * @param url - The URL of the package.
   * @param params - Optional parameters for the installation.
   */
  installPackage(url: string, params?: InstallParameters): DOMRequest;

  /**
   * Returns the application associated with the current context.
   */
  getSelf(): DOMRequest;

  /**
   * Returns all installed applications.
   */
  getInstalled(): DOMRequest;

  /**
   * Checks if an application is installed.
   *
   * @param manifestUrl - The URL of the manifest to check.
   */
  checkInstalled(manifestUrl: string): DOMRequest;

  /**
   * Language pack API.
   * These promises will be rejected if the page is not in an app context,
   * i.e. they are implicitly acting on getSelf().
   */
  getAdditionalLanguages(): Promise<MozMap<LanguageDesc[]>>;

  /**
   * Resolves to a different object depending on the dataType value.
   *
   * @param language - The language code.
   * @param version - The version string.
   * @param path - The path to the resource.
   * @param dataType - The type of data to retrieve.
   */
  getLocalizationResource(
    language: string,
    version: string,
    path: string,
    dataType: LocaleResourceType
  ): Promise<any>;
}

/**
 * @chromeOnly
 */
export interface DOMApplication extends EventTarget {
  // manifest and updateManifest will be turned into dictionaries once
  // in bug 1053033 once bug 963382 is fixed.
  /**
   * The application manifest.
   */
  readonly manifest: any;

  /**
   * The update manifest, if available.
   */
  readonly updateManifest: any;

  /**
   * The URL of the manifest.
   */
  readonly manifestURL: string;

  /**
   * The origin of the application.
   */
  readonly origin: string;

  /**
   * The origin from which the application was installed.
   */
  readonly installOrigin: string;

  /**
   * The time the application was installed.
   */
  readonly installTime: number; // DOMTimeStamp

  /**
   * Whether the application can be removed.
   */
  readonly removable: boolean;

  /**
   * Whether the application is enabled.
   */
  readonly enabled: boolean;

  /**
   * List of receipts associated with the application.
   */
  readonly receipts: string[];

  /**
   * The progress of the installation or update.
   */
  readonly progress: number;

  /**
   * The current installation state.
   */
  readonly installState: string;

  /**
   * The time of the last update check.
   */
  readonly lastUpdateCheck: number; // DOMTimeStamp

  /**
   * The time of the last update.
   */
  readonly updateTime: number; // DOMTimeStamp

  /**
   * Whether a download is available.
   */
  readonly downloadAvailable: boolean;

  /**
   * Whether the application is currently downloading.
   */
  readonly downloading: boolean;

  /**
   * Whether the download is ready to be applied.
   */
  readonly readyToApplyDownload: boolean;

  /**
   * The size of the download.
   */
  readonly downloadSize: number;

  /**
   * The error object if the download failed.
   */
  readonly downloadError: DOMError | null;

  onprogress: ((this: DOMApplication, ev: Event) => any) | null;
  ondownloadsuccess: ((this: DOMApplication, ev: Event) => any) | null;
  ondownloaderror: ((this: DOMApplication, ev: Event) => any) | null;
  ondownloadavailable: ((this: DOMApplication, ev: Event) => any) | null;
  ondownloadapplied: ((this: DOMApplication, ev: Event) => any) | null;

  /**
   * Starts the download.
   */
  download(): void;

  /**
   * Cancels the download.
   */
  cancelDownload(): void;

  /**
   * Launches the application.
   *
   * @param url - Optional URL to launch.
   */
  launch(url?: string | null): DOMRequest;

  /**
   * Clears the browser data associated with the application.
   */
  clearBrowserData(): DOMRequest;

  /**
   * Checks for updates.
   */
  checkForUpdate(): DOMRequest;

  /**
   * Inter-App Communication APIs.
   *
   * https://wiki.mozilla.org/WebAPI/Inter_App_Communication_Alt_proposal
   *
   * @param keyword - The keyword to connect to.
   * @param rules - Optional rules for the connection.
   */
  connect(keyword: string, rules?: any): Promise<MozInterAppConnection>;

  /**
   * Returns the list of incoming connections.
   */
  getConnections(): Promise<MozInterAppMessagePort[]>;

  // Receipts handling functions.
  /**
   * Adds a receipt to the application.
   * @param receipt - The receipt to add.
   */
  addReceipt(receipt?: string): DOMRequest;

  /**
   * Removes a receipt from the application.
   * @param receipt - The receipt to remove.
   */
  removeReceipt(receipt?: string): DOMRequest;

  /**
   * Replaces a receipt.
   * @param oldReceipt - The old receipt.
   * @param newReceipt - The new receipt.
   */
  replaceReceipt(oldReceipt?: string, newReceipt?: string): DOMRequest;

  // Export this app as a shareable Blob.
  /**
   * Exports the application as a Blob.
   */
  export(): Promise<Blob>;

  // Returns the localized value of a property, using either the manifest or
  // a langpack if one is available.
  /**
   * Gets the localized value of a property.
   *
   * @param property - The property name.
   * @param locale - The locale code.
   * @param entryPoint - Optional entry point.
   */
  getLocalizedValue(
    property: string,
    locale: string,
    entryPoint?: string
  ): Promise<string>;
}

/**
 * @chromeOnly
 * @permissions webapps-manage, homescreen-webapps-manage
 */
export interface DOMApplicationsManager extends EventTarget {
  /**
   * Gets all installed applications.
   */
  getAll(): DOMRequest;

  /**
   * @permissions webapps-manage
   * Applies a downloaded update to the application.
   * @param app - The application to update.
   */
  applyDownload(app: DOMApplication): void;

  /**
   * Uninstalls an application.
   * @param app - The application to uninstall.
   */
  uninstall(app: DOMApplication): DOMRequest;

  /**
   * @permissions webapps-manage
   * Imports an application from a Blob.
   * @param blob - The blob containing the application.
   */
  import(blob: Blob): Promise<DOMApplication>;

  /**
   * @permissions webapps-manage
   * Extracts the manifest from a Blob.
   * @param blob - The blob containing the application/manifest.
   */
  extractManifest(blob: Blob): Promise<any>;

  /**
   * @permissions webapps-manage
   * Sets the enabled state of an application.
   * @param app - The application.
   * @param state - The new enabled state.
   */
  setEnabled(app: DOMApplication, state: boolean): void;

  /**
   * Gets the icon of an application.
   * @param app - The application.
   * @param iconID - The ID of the icon.
   * @param entryPoint - Optional entry point.
   */
  getIcon(
    app: DOMApplication,
    iconID: string,
    entryPoint?: string
  ): Promise<Blob>;

  oninstall: ((this: DOMApplicationsManager, ev: Event) => any) | null;
  onuninstall: ((this: DOMApplicationsManager, ev: Event) => any) | null;
  onenabledstatechange:
    | ((this: DOMApplicationsManager, ev: Event) => any)
    | null;
}
