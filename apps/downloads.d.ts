/**
 * dom/webidl/Downloads.webidl
 */

export type DownloadState =
  | 'downloading'
  | 'stopped'
  | 'succeeded'
  | 'finalized';

/**
 * Manages file downloads.
 *
 * @note NavigatorProperty: "mozDownloadManager"
 * @note JSImplementation: "@mozilla.org/downloads/manager;1"
 * @note Pref: "dom.mozDownloads.enabled"
 * @note Permissions: "downloads"
 */
export interface DOMDownloadManager extends EventTarget {
  /**
   * Retrieves the list of current downloads.
   */
  getDownloads(): Promise<DOMDownload[]>;

  /**
   * Removes a download from the manager.
   *
   * @param download - The download to remove.
   * @note UnsafeInPrerendering
   */
  remove(download: DOMDownload): Promise<DOMDownload>;

  /**
   * Clears all completed ("succeeded" or "finalized") downloads from the manager.
   *
   * @note UnsafeInPrerendering
   */
  clearAllDone(): void;

  /**
   * Adopts a download into the manager.
   *
   * @param download - Parameters for the download to adopt.
   * @available: CertifiedApps
   */
  adoptDownload(download?: AdoptDownloadDict): Promise<DOMDownload>;

  ondownloadstart: ((this: DOMDownloadManager, ev: Event) => any) | null;
}

/**
 * Represents a single file download.
 *
 * @note JSImplementation: "@mozilla.org/downloads/download;1"
 * @note Pref: "dom.mozDownloads.enabled"
 * @note Permissions: "downloads"
 */
export interface DOMDownload extends EventTarget {
  /**
   * The total size of the file in bytes.
   */
  readonly totalBytes: number;

  /**
   * The number of bytes downloaded so far.
   */
  readonly currentBytes: number;

  /**
   * The URL of the file being downloaded.
   */
  readonly url: string;

  /**
   * The local path where the file is being saved.
   */
  readonly path: string;

  /**
   * The name of the storage area where the file is saved.
   */
  readonly storageName: string;

  /**
   * The relative path within the storage area.
   */
  readonly storagePath: string;

  /**
   * The current state of the download.
   */
  readonly state: DownloadState;

  /**
   * The MIME type of the file.
   */
  readonly contentType: string;

  /**
   * The time when the download started.
   */
  readonly startTime: Date;

  /**
   * The unique identifier of the download.
   */
  readonly id: string;

  /**
   * The manifest URL of the application that initiated the download.
   */
  readonly sourceAppManifestURL: string | null;

  /**
   * The error object if the download failed.
   */
  readonly error: DOMError | null;

  /**
   * Pauses the download.
   *
   * @note UnsafeInPrerendering
   */
  pause(): Promise<DOMDownload>;

  /**
   * Resumes the download.
   *
   * @note UnsafeInPrerendering
   */
  resume(): Promise<DOMDownload>;

  onstatechange: ((this: DOMDownload, ev: Event) => any) | null;
}

/**
 * Dictionary of parameters for adopting a download.
 */
export interface AdoptDownloadDict {
  /**
   * The URL of the download.
   */
  url?: string;

  /**
   * The name of the storage area.
   */
  storageName?: string | null;

  /**
   * The path within the storage area.
   */
  storagePath?: string | null;

  /**
   * The MIME type of the file.
   */
  contentType?: string | null;

  /**
   * The start time of the download.
   */
  startTime?: Date | null;
}
