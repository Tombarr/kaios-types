import { TelephonyCall } from './telephony-call';
import { TelephonyCallGroup } from './telephony-call-group';

export type MMICall = any; // Placeholder
export type CallsList = TelephonyCall[]; // Placeholder assumption
export type TelephonyCallId = number; // Placeholder assumption

/**
 * @preference dom.telephony.enabled
 */
export interface Telephony extends EventTarget {
  /**
   * Make a phone call or send the mmi code depending on the number provided.
   * @param number - The number to dial.
   * @param serviceId - The service ID to use for the call.
   */
  dial(number: string, serviceId?: number): Promise<TelephonyCall | MMICall>;

  /**
   * Make an emergency call.
   * @param number - The emergency number to dial.
   * @param serviceId - The service ID to use for the call.
   */
  dialEmergency(number: string, serviceId?: number): Promise<TelephonyCall>;

  /**
   * Send a series of DTMF tones.
   * @param tones - The DTMF tones to send.
   * @param pauseDuration - The duration of the pause between tones in milliseconds.
   * @param toneDuration - The duration of each tone in milliseconds.
   * @param serviceId - The service ID to use for sending tones.
   */
  sendTones(
    tones: string,
    pauseDuration?: number,
    toneDuration?: number,
    serviceId?: number
  ): Promise<void>;

  /**
   * Start sending a DTMF tone.
   * @param tone - The DTMF tone to start.
   * @param serviceId - The service ID to use.
   */
  startTone(tone: string, serviceId?: number): void;

  /**
   * Stop sending the currently playing DTMF tone.
   * @param serviceId - The service ID to use.
   */
  stopTone(serviceId?: number): void;

  /**
   * Request audio channel for telephony.
   * @permissions audio-channel-telephony
   */
  ownAudioChannel(): void;

  /**
   * Indicates whether the microphone is muted.
   */
  muted: boolean;

  /**
   * Indicates whether the speakerphone is enabled.
   */
  speakerEnabled: boolean;

  /**
   * The currently active call or call group.
   */
  readonly active: TelephonyCall | TelephonyCallGroup | null;

  /**
   * A list of all calls.
   */
  readonly calls: CallsList;

  /**
   * The conference call group.
   */
  readonly conferenceGroup: TelephonyCallGroup;

  /**
   * A promise that resolves when the telephony API is ready.
   */
  readonly ready: Promise<void>;

  /**
   * Event handler for incoming calls.
   */
  onincoming: EventHandler;

  /**
   * Event handler for when the list of calls changes.
   */
  oncallschanged: EventHandler;

  /**
   * Event handler for when a call is held remotely.
   */
  onremoteheld: EventHandler;

  /**
   * Event handler for when a call is resumed remotely.
   */
  onremoteresumed: EventHandler;
}
