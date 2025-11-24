import { TVTuner } from '../common';

/**
 * Manages TV tuners and provides access to TV functionality.
 *
 * Preference: "dom.tv.enabled"
 * @permissions tv
 * @available CertifiedApps
 */
export interface TVManager extends EventTarget {
  /**
   * Retrieves the list of available TV tuners.
   *
   * @returns A promise that resolves to an array of TVTuner objects.
   * @throws {Error} NS_ERROR_NOT_AVAILABLE if TV is not supported or available.
   */
  getTuners(): Promise<TVTuner[]>;
}
