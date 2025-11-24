import { DOMRequest, DOMCursor } from '../common';

/**
 * dom/webidl/Contacts.webidl
 */

export interface ContactAddress {
  type?: string[] | null;
  streetAddress?: string | null;
  locality?: string | null;
  region?: string | null;
  postalCode?: string | null;
  countryName?: string | null;
  pref?: boolean | null;
}

export interface ContactField {
  type?: string[] | null;
  value?: string | null;
  pref?: boolean | null;
}

export interface ContactTelField extends ContactField {
  carrier?: string | null;
}

export interface ContactProperties {
  bday?: Date | null;
  anniversary?: Date | null;

  sex?: string | null;
  genderIdentity?: string | null;

  photo?: Blob[] | null;

  adr?: ContactAddress[] | null;

  email?: ContactField[] | null;
  url?: ContactField[] | null;
  impp?: ContactField[] | null;

  tel?: ContactTelField[] | null;

  name?: string[] | null;
  honorificPrefix?: string[] | null;
  givenName?: string[] | null;
  phoneticGivenName?: string[] | null;
  additionalName?: string[] | null;
  familyName?: string[] | null;
  phoneticFamilyName?: string[] | null;
  honorificSuffix?: string[] | null;
  nickname?: string[] | null;
  category?: string[] | null;
  org?: string[] | null;
  jobTitle?: string[] | null;
  note?: string[] | null;
  key?: string[] | null;
}

/**
 * @note JSImplementation: "@mozilla.org/contact;1"
 * @note Permissions: "contacts-read contacts-write contacts-create"
 */
export interface mozContact {
  /**
   * The unique identifier of the contact.
   */
  id: string;

  /**
   * Date when the contact was published.
   */
  readonly published: Date | null;

  /**
   * Date when the contact was last updated.
   */
  readonly updated: Date | null;

  /**
   * The birth date of the contact.
   */
  bday: Date | null;

  /**
   * The anniversary date of the contact.
   */
  anniversary: Date | null;

  /**
   * The sex of the contact.
   */
  sex: string | null;

  /**
   * The gender identity of the contact.
   */
  genderIdentity: string | null;

  /**
   * Photos associated with the contact.
   */
  photo: Blob[] | null;

  /**
   * Addresses associated with the contact.
   */
  adr: ContactAddress[] | null;

  /**
   * Email addresses associated with the contact.
   */
  email: ContactField[] | null;

  /**
   * URLs associated with the contact.
   */
  url: ContactField[] | null;

  /**
   * Instant messaging profiles associated with the contact.
   */
  impp: ContactField[] | null;

  /**
   * Telephone numbers associated with the contact.
   */
  tel: ContactTelField[] | null;

  /**
   * The contact's names.
   */
  name: string[] | null;

  /**
   * Honorific prefixes (e.g., Mr., Dr.).
   */
  honorificPrefix: string[] | null;

  /**
   * Given names (first names).
   */
  givenName: string[] | null;

  /**
   * Phonetic representations of the given names.
   */
  phoneticGivenName: string[] | null;

  /**
   * Additional names (middle names).
   */
  additionalName: string[] | null;

  /**
   * Family names (last names).
   */
  familyName: string[] | null;

  /**
   * Phonetic representations of the family names.
   */
  phoneticFamilyName: string[] | null;

  /**
   * Honorific suffixes (e.g., Jr., III).
   */
  honorificSuffix: string[] | null;

  /**
   * Nicknames.
   */
  nickname: string[] | null;

  /**
   * Categories or tags for the contact.
   */
  category: string[] | null;

  /**
   * Organizations the contact belongs to.
   */
  org: string[] | null;

  /**
   * Job titles.
   */
  jobTitle: string[] | null;

  /**
   * Notes about the contact.
   */
  note: string[] | null;

  /**
   * Public keys associated with the contact.
   */
  key: string[] | null;

  /**
   * Initializes the contact with the given properties.
   *
   * @param properties - Initial properties for the contact.
   */
  init(properties?: ContactProperties): void;

  /**
   * Sets metadata for the contact (Chrome only).
   *
   * @chromeOnly
   * @param id - The contact ID.
   * @param published - The published date.
   * @param updated - The updated date.
   */
  setMetadata(id: string, published: Date | null, updated: Date | null): void;

  /**
   * Returns a JSON representation of the contact.
   */
  toJSON(): any;
}

export interface ContactFindSortOptions {
  /**
   * The field to sort by ("givenName" or "familyName").
   */
  sortBy?: string;

  /**
   * The sort order ("ascending" or "descending"). Default is "ascending".
   */
  sortOrder?: string;
}

export interface ContactFindOptions extends ContactFindSortOptions {
  /**
   * The string to search for.
   */
  filterValue?: string;

  /**
   * The operator to use for filtering (e.g., "equals", "startsWith", "match").
   */
  filterOp?: string;

  /**
   * The field(s) to filter by. Can be a string or an array of strings.
   */
  filterBy?: string | string[];

  /**
   * The maximum number of results to return. Default is 0 (no limit).
   */
  filterLimit?: number;
}

/**
 * @note NavigatorProperty: "mozContacts"
 * @note JSImplementation: "@mozilla.org/contactManager;1"
 * @note Permissions: "contacts-read contacts-write contacts-create"
 */
export interface ContactManager extends EventTarget {
  /**
   * Finds contacts matching the given options.
   *
   * @param options - Options for filtering and sorting the results.
   * @returns A DOMRequest that returns an array of mozContact objects.
   */
  find(options?: ContactFindOptions): DOMRequest;

  /**
   * Retrieves all contacts.
   *
   * @param options - Options for sorting the results.
   * @returns A DOMCursor for iterating over the contacts.
   */
  getAll(options?: ContactFindSortOptions): DOMCursor;

  /**
   * Clears all contacts.
   *
   * @returns A DOMRequest indicating success or failure.
   */
  clear(): DOMRequest;

  /**
   * Saves a contact.
   *
   * @param contact - The contact to save.
   * @returns A DOMRequest indicating success or failure.
   */
  save(contact: mozContact): DOMRequest;

  /**
   * Removes a contact.
   *
   * @param contactOrId - The contact object or its ID to remove.
   * @returns A DOMRequest indicating success or failure.
   */
  remove(contactOrId: mozContact | string): DOMRequest;

  /**
   * Gets the current revision of the contacts database.
   *
   * @returns A DOMRequest returning the revision number.
   */
  getRevision(): DOMRequest;

  /**
   * Gets the total number of contacts.
   *
   * @returns A DOMRequest returning the count.
   */
  getCount(): DOMRequest;

  /**
   * Event handler called when a contact changes.
   */
  oncontactchange: ((this: ContactManager, ev: Event) => any) | null;
}
