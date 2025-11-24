import { MozIsoDepTech, MozNfcATech, MozNDEFRecord } from '../common';

/**
 * Enum representing NFC technology types.
 */
export enum NFCTechType {
  'NFC-A',
  'NFC-B',
  'NFC-F',
  'NFC-V',
  'ISO-DEP',
  'MIFARE-Classic',
  'MIFARE-Ultralight',
  'NFC-Barcode',
  'Unknown'
}

/**
 * Enum representing NFC tag types.
 */
export enum NFCTagType {
  'Type1',
  'Type2',
  'Type3',
  'Type4',
  'MIFARE-Classic'
}

/**
 * Union type of supported NFC tag technologies.
 */
export type MozTagTech = MozIsoDepTech | MozNfcATech;

/**
 * Represents an NFC Tag.
 * @available PrivilegedApps
 */
export interface MozNFCTag {
  /**
   * List of supported technologies by the tag.
   */
  readonly techList: NFCTechType[] | null;

  /**
   * The ID of the tag.
   */
  readonly id: Uint8Array | null;

  /**
   * The type of the tag.
   */
  readonly type: NFCTagType | null;

  /**
   * The maximum NDEF message size in bytes.
   */
  readonly maxNDEFSize: number | null;

  /**
   * Whether the tag is read-only.
   */
  readonly isReadOnly: boolean | null;

  /**
   * Whether the tag can be formatted.
   */
  readonly isFormatable: boolean | null;

  /**
   * Whether the tag can be made read-only.
   */
  readonly canBeMadeReadOnly: boolean | null;

  /**
   * Whether the tag is lost.
   */
  readonly isLost: boolean;

  /**
   * Reads NDEF records from the tag.
   * @returns A promise resolving to an array of NDEF records.
   * @throws {Error}
   */
  readNDEF(): Promise<MozNDEFRecord[]>;

  /**
   * Writes NDEF records to the tag.
   * @param records - The records to write.
   * @throws {Error}
   */
  writeNDEF(records: MozNDEFRecord[]): Promise<void>;

  /**
   * Makes the tag read-only permanently.
   * @throws {Error}
   */
  makeReadOnly(): Promise<void>;

  /**
   * Formats the tag as NDEF.
   * @throws {Error}
   */
  format(): Promise<void>;

  /**
   * Selects a specific technology for interaction.
   * @param tech - The technology to select.
   * @throws {Error}
   */
  selectTech(tech: NFCTechType): MozTagTech;

  /**
   * The session token.
   * @chromeOnly
   */
  session: string;

  /**
   * Notifies that the tag has been lost.
   * @chromeOnly
   */
  notifyLost(): void;

  /**
   * Sends raw data to the tag.
   * @param tech - The technology to use.
   * @param command - The command data.
   * @returns The response data.
   * @throws {Error}
   * @chromeOnly
   */
  transceive(tech: NFCTechType, command: Uint8Array): Promise<Uint8Array>;
}
