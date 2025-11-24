import { TVProgram } from './tv-program';
import { TVSource } from '../common';

/**
 * Type of the TV channel.
 */
export type TVChannelType = 'tv' | 'radio' | 'data';

/**
 * Options for retrieving TV programs.
 */
export interface TVGetProgramsOptions {
  /**
   * Start time in milliseconds since epoch.
   */
  startTime: number;
  /**
   * Duration in milliseconds.
   */
  duration: number;
}

/**
 * Represents a TV channel.
 *
 * Preference: "dom.tv.enabled"
 * @permissions tv
 * @available CertifiedApps
 */
export interface TVChannel extends EventTarget {
  /**
   * Retrieves a list of programs for this channel within a specified time range.
   *
   * @param options Filtering options for the programs.
   * @returns A promise resolving to an array of TVProgram objects.
   * @throws {Error} NS_ERROR_NOT_AVAILABLE or NS_ERROR_ILLEGAL_VALUE.
   */
  getPrograms(options?: TVGetProgramsOptions): Promise<TVProgram[]>;

  /**
   * Retrieves the program currently playing on this channel.
   *
   * @returns A promise resolving to the current TVProgram.
   * @throws {Error} NS_ERROR_NOT_AVAILABLE.
   */
  getCurrentProgram(): Promise<TVProgram>;

  /**
   * The network identifier.
   */
  readonly networkId: string;

  /**
   * The transport stream identifier.
   */
  readonly transportStreamId: string;

  /**
   * The service identifier.
   */
  readonly serviceId: string;

  /**
   * The TV source providing this channel.
   */
  readonly source: TVSource;

  /**
   * The type of the channel (e.g., 'tv', 'radio', 'data').
   */
  readonly type: TVChannelType;

  /**
   * The name of the channel.
   */
  readonly name: string;

  /**
   * The channel number.
   */
  readonly number: string;

  /**
   * Indicates if this is an emergency channel.
   */
  readonly isEmergency: boolean;

  /**
   * Indicates if this channel is free-to-air.
   */
  readonly isFree: boolean;
}
