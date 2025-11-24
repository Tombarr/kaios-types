import { CallsList } from './telephony';
import { TelephonyCall } from './telephony-call';

export type TelephonyCallGroupState = '' | 'connected' | 'held';

/**
 * @preference dom.telephony.enabled
 */
export interface TelephonyCallGroup extends EventTarget {
  /**
   * The list of calls in the group.
   */
  readonly calls: CallsList;

  /**
   * Adds a call (or calls) to the conference group.
   * @param call - The call to add.
   * @param secondCall - An optional second call to add.
   */
  add(call: TelephonyCall, secondCall?: TelephonyCall): Promise<void>;

  /**
   * Removes a call from the conference group.
   * @param call - The call to remove.
   */
  remove(call: TelephonyCall): Promise<void>;

  /**
   * Hangs up the conference call.
   */
  hangUp(): Promise<void>;

  /**
   * Puts the conference call on hold.
   */
  hold(): Promise<void>;

  /**
   * Resumes the held conference call.
   */
  resume(): Promise<void>;

  /**
   * The current state of the call group.
   */
  readonly state: TelephonyCallGroupState;

  /**
   * Event handler for when the group state changes.
   */
  onstatechange: EventHandler;

  /**
   * Event handler for when the group is connected.
   */
  onconnected: EventHandler;

  /**
   * Event handler for when the group is held.
   */
  onheld: EventHandler;

  /**
   * Event handler for when the list of calls in the group changes.
   */
  oncallschanged: EventHandler;

  /**
   * Event handler for when an error occurs.
   */
  onerror: EventHandler;
}
