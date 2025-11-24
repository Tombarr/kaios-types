import { DOMRequest } from '../common';

/**
 * Provides access to the FM radio.
 */
export interface FMRadio extends EventTarget {
  /**
   * Indicates whether the FM radio is enabled.
   */
  readonly enabled: boolean;
  /**
   * Indicates whether RDS (Radio Data System) is enabled.
   */
  readonly rdsEnabled: boolean;
  /**
   * Indicates whether an antenna is plugged in.
   */
  readonly antennaAvailable: boolean;
  /**
   * The current frequency in MHz, or null if not enabled.
   */
  readonly frequency: number | null;
  /**
   * The upper bound of the frequency range in MHz.
   */
  readonly frequencyUpperBound: number;
  /**
   * The lower bound of the frequency range in MHz.
   */
  readonly frequencyLowerBound: number;
  /**
   * The channel width in MHz.
   */
  readonly channelWidth: number;
  /**
   * RDS group mask.
   */
  rdsGroupMask: number;
  /**
   * Program Identification (PI) code.
   */
  readonly pi: number | null;
  /**
   * Program Type (PTY) code.
   */
  readonly pty: number | null;
  /**
   * Program Service (PS) name.
   */
  readonly ps: string | null;
  /**
   * Radio Text (RT).
   */
  readonly rt: string | null;
  /**
   * Raw RDS group data.
   */
  readonly rdsgroup: Uint16Array | null;

  /**
   * Event handler for when the radio is enabled.
   */
  onenabled: EventHandler;
  /**
   * Event handler for when the radio is disabled.
   */
  ondisabled: EventHandler;
  /**
   * Event handler for when RDS is enabled.
   */
  onrdsenabled: EventHandler;
  /**
   * Event handler for when RDS is disabled.
   */
  onrdsdisabled: EventHandler;
  /**
   * Event handler for antenna availability changes.
   */
  onantennaavailablechange: EventHandler;
  /**
   * Event handler for frequency changes.
   */
  onfrequencychange: EventHandler;
  /**
   * Event handler for PI code changes.
   */
  onpichange: EventHandler;
  /**
   * Event handler for PTY code changes.
   */
  onptychange: EventHandler;
  /**
   * Event handler for PS name changes.
   */
  onpschange: EventHandler;
  /**
   * Event handler for RT changes.
   */
  onrtchange: EventHandler;
  /**
   * Event handler for new RDS group data.
   */
  onnewrdsgroup: EventHandler;

  /**
   * Disables the FM radio.
   * @returns A DOMRequest indicating success or failure.
   */
  disable(): DOMRequest;
  /**
   * Enables the FM radio on the specified frequency.
   * @param frequency The frequency to tune to in MHz.
   * @returns A DOMRequest indicating success or failure.
   */
  enable(frequency: number): DOMRequest;
  /**
   * Sets the frequency.
   * @param frequency The frequency to tune to in MHz.
   * @returns A DOMRequest indicating success or failure.
   */
  setFrequency(frequency: number): DOMRequest;
  /**
   * Seeks the next available station upwards.
   * @returns A DOMRequest indicating success or failure.
   */
  seekUp(): DOMRequest;
  /**
   * Seeks the next available station downwards.
   * @returns A DOMRequest indicating success or failure.
   */
  seekDown(): DOMRequest;
  /**
   * Cancels the current seek operation.
   * @returns A DOMRequest indicating success or failure.
   */
  cancelSeek(): DOMRequest;
  /**
   * Enables RDS.
   * @returns A DOMRequest indicating success or failure.
   */
  enableRDS(): DOMRequest;
  /**
   * Disables RDS.
   * @returns A DOMRequest indicating success or failure.
   */
  disableRDS(): DOMRequest;
}
