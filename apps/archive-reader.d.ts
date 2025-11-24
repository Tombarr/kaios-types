import { DOMRequest } from '../common';

/**
 * dom/webidl/ArchiveReader.webidl
 */

/**
 * Allows reading content from archive files (e.g., zip).
 * @note Pref: "dom.archivereader.enabled"
 */
export interface ArchiveReader {
  /**
   * Returns a request that resolves to a list of filenames in the archive.
   */
  getFilenames(): ArchiveRequest;

  /**
   * Returns a request that resolves to a Blob for the specified filename.
   * @param filename - The name of the file to retrieve.
   */
  getFile(filename: string): ArchiveRequest;

  /**
   * Returns a request that resolves to an array of Blobs for all files in the archive.
   */
  getFiles(): ArchiveRequest;
}

/**
 * Options for creating an ArchiveReader.
 */
export interface ArchiveReaderOptions {
  /**
   * The character encoding of the filenames in the archive.
   * Default: "windows-1252"
   */
  encoding?: string;
}

/**
 * A request object specific to ArchiveReader operations.
 */
export interface ArchiveRequest extends DOMRequest {
  // Specialized properties for archive requests can be added here if needed
}
