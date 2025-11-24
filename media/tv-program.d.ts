import { TVChannel } from './tv-channel';

/**
 * Represents a TV program.
 *
 * Preference: "dom.tv.enabled"
 * @permissions tv
 * @available CertifiedApps
 */
export interface TVProgram {
  /**
   * Returns the list of available audio languages for this program.
   *
   * @returns An array of language codes.
   */
  getAudioLanguages(): string[];

  /**
   * Returns the list of available subtitle languages for this program.
   *
   * @returns An array of language codes.
   */
  getSubtitleLanguages(): string[];

  /**
   * The unique identifier for the event/program.
   */
  readonly eventId: string;

  /**
   * The channel this program belongs to.
   */
  readonly channel: TVChannel;

  /**
   * The title of the program.
   */
  readonly title: string;

  /**
   * The start time of the program in milliseconds since epoch.
   */
  readonly startTime: number;

  /**
   * The duration of the program in milliseconds.
   */
  readonly duration: number;

  /**
   * The description of the program.
   */
  readonly description: string | null;

  /**
   * The rating of the program.
   */
  readonly rating: string | null;
}
