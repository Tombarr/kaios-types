import { MozMobileConnectionInfo } from './moz-mobile-connection-info';
import { DOMRequest, MozMobileNetworkInfo } from '../common';

/**
 * File: dom/webidl/MozMobileConnection.webidl
 */

export type MobileNetworkSelectionMode = 'automatic' | 'manual';

export type MobileRadioState =
  | 'enabling'
  | 'enabled'
  | 'disabling'
  | 'disabled';

export type MobileNetworkType = 'gsm' | 'wcdma' | 'cdma' | 'evdo' | 'lte';

export type MobilePreferredNetworkType =
  | 'wcdma/gsm'
  | 'gsm'
  | 'wcdma'
  | 'wcdma/gsm-auto'
  | 'cdma/evdo'
  | 'cdma'
  | 'evdo'
  | 'wcdma/gsm/cdma/evdo'
  | 'lte/cdma/evdo'
  | 'lte/wcdma/gsm'
  | 'lte/wcdma/gsm/cdma/evdo'
  | 'lte'
  | 'lte/wcdma';

export type MobileRoamingMode = 'home' | 'affiliated' | 'any';

export interface MozCallForwardingOptions {
  active?: boolean | null;
  action?: number | null;
  reason?: number | null;
  number?: string | null;
  timeSeconds?: number | null;
  serviceClass?: number | null;
}

export interface MozCallBarringOptions {
  program?: number | null;
  enabled?: boolean | null;
  password?: string | null;
  serviceClass?: number | null;
  pin?: string | null;
  newPin?: string | null;
}

export interface MozMMIResult {
  success?: boolean; // default = true
  serviceCode?: string; // default = ""
  statusMessage?: string; // default = ""
  additionalInformation?: number | object;
}

export interface MozClirStatus {
  n: number;
  m: number;
}

/**
 * @pref dom.mobileconnection.enabled
 */
export interface MozMobileConnection extends EventTarget {
  /** ICC Service Class: Voice */
  readonly ICC_SERVICE_CLASS_VOICE: number; // 0x01
  /** ICC Service Class: Data */
  readonly ICC_SERVICE_CLASS_DATA: number; // 0x02
  /** ICC Service Class: Fax */
  readonly ICC_SERVICE_CLASS_FAX: number; // 0x04
  /** ICC Service Class: SMS */
  readonly ICC_SERVICE_CLASS_SMS: number; // 0x08
  /** ICC Service Class: Data Sync */
  readonly ICC_SERVICE_CLASS_DATA_SYNC: number; // 0x10
  /** ICC Service Class: Data Async */
  readonly ICC_SERVICE_CLASS_DATA_ASYNC: number; // 0x20
  /** ICC Service Class: Packet */
  readonly ICC_SERVICE_CLASS_PACKET: number; // 0x40
  /** ICC Service Class: PAD */
  readonly ICC_SERVICE_CLASS_PAD: number; // 0x80
  /** ICC Service Class: Max */
  readonly ICC_SERVICE_CLASS_MAX: number; // 0x80

  /** Call Forward Action: Disable */
  readonly CALL_FORWARD_ACTION_DISABLE: number; // 0
  /** Call Forward Action: Enable */
  readonly CALL_FORWARD_ACTION_ENABLE: number; // 1
  /** Call Forward Action: Query Status */
  readonly CALL_FORWARD_ACTION_QUERY_STATUS: number; // 2
  /** Call Forward Action: Registration */
  readonly CALL_FORWARD_ACTION_REGISTRATION: number; // 3
  /** Call Forward Action: Erasure */
  readonly CALL_FORWARD_ACTION_ERASURE: number; // 4

  /** Call Forward Reason: Unconditional */
  readonly CALL_FORWARD_REASON_UNCONDITIONAL: number; // 0
  /** Call Forward Reason: Mobile Busy */
  readonly CALL_FORWARD_REASON_MOBILE_BUSY: number; // 1
  /** Call Forward Reason: No Reply */
  readonly CALL_FORWARD_REASON_NO_REPLY: number; // 2
  /** Call Forward Reason: Not Reachable */
  readonly CALL_FORWARD_REASON_NOT_REACHABLE: number; // 3
  /** Call Forward Reason: All Call Forwarding */
  readonly CALL_FORWARD_REASON_ALL_CALL_FORWARDING: number; // 4
  /** Call Forward Reason: All Conditional Call Forwarding */
  readonly CALL_FORWARD_REASON_ALL_CONDITIONAL_CALL_FORWARDING: number; // 5

  /** Call Barring Program: All Outgoing */
  readonly CALL_BARRING_PROGRAM_ALL_OUTGOING: number; // 0
  /** Call Barring Program: Outgoing International */
  readonly CALL_BARRING_PROGRAM_OUTGOING_INTERNATIONAL: number; // 1
  /** Call Barring Program: Outgoing International Except Home */
  readonly CALL_BARRING_PROGRAM_OUTGOING_INTERNATIONAL_EXCEPT_HOME: number; // 2
  /** Call Barring Program: All Incoming */
  readonly CALL_BARRING_PROGRAM_ALL_INCOMING: number; // 3
  /** Call Barring Program: Incoming Roaming */
  readonly CALL_BARRING_PROGRAM_INCOMING_ROAMING: number; // 4
  /** Call Barring Program: All Service */
  readonly CALL_BARRING_PROGRAM_ALL_SERVICE: number; // 5
  /** Call Barring Program: Outgoing Service */
  readonly CALL_BARRING_PROGRAM_OUTGOING_SERVICE: number; // 6
  /** Call Barring Program: Incoming Service */
  readonly CALL_BARRING_PROGRAM_INCOMING_SERVICE: number; // 7

  /** CLIR Mode: Default */
  readonly CLIR_DEFAULT: number; // 0
  /** CLIR Mode: Invocation */
  readonly CLIR_INVOCATION: number; // 1
  /** CLIR Mode: Suppression */
  readonly CLIR_SUPPRESSION: number; // 2

  /**
   * The name of the last known network.
   * @permissions mobilenetwork
   */
  readonly lastKnownNetwork: string;

  /**
   * The name of the last known home network.
   * @permissions mobilenetwork
   */
  readonly lastKnownHomeNetwork: string;

  /**
   * Information about the voice connection.
   * @permissions mobileconnection
   */
  readonly voice: MozMobileConnectionInfo;

  /**
   * Information about the data connection.
   * @permissions mobileconnection
   */
  readonly data: MozMobileConnectionInfo;

  /**
   * The ICC ID (Integrated Circuit Card Identifier) of the SIM card.
   * @permissions mobileconnection
   */
  readonly iccId: string | null;

  /**
   * The network selection mode (automatic or manual).
   * @permissions mobileconnection
   */
  readonly networkSelectionMode: MobileNetworkSelectionMode | null;

  /**
   * The state of the mobile radio.
   * @permissions mobileconnection
   */
  readonly radioState: MobileRadioState | null;

  /**
   * The list of supported network types.
   * @permissions mobileconnection
   */
  readonly supportedNetworkTypes: MobileNetworkType[];

  /**
   * Searches for available networks.
   * @throws
   * @permissions mobileconnection
   */
  getNetworks(): DOMRequest;

  /**
   * Manually selects a network.
   * @param network - The network to select.
   * @throws
   * @permissions mobileconnection
   */
  selectNetwork(network: MozMobileNetworkInfo): DOMRequest;

  /**
   * Selects the network automatically.
   * @throws
   * @permissions mobileconnection
   */
  selectNetworkAutomatically(): DOMRequest;

  /**
   * Sets the preferred network type.
   * @param type - The preferred network type.
   * @throws
   * @permissions mobileconnection
   */
  setPreferredNetworkType(type: MobilePreferredNetworkType): DOMRequest;

  /**
   * Gets the preferred network type.
   * @throws
   * @permissions mobileconnection
   */
  getPreferredNetworkType(): DOMRequest;

  /**
   * Sets the roaming preference.
   * @param mode - The roaming mode.
   * @throws
   * @permissions mobileconnection
   */
  setRoamingPreference(mode: MobileRoamingMode): DOMRequest;

  /**
   * Gets the roaming preference.
   * @throws
   * @permissions mobileconnection
   */
  getRoamingPreference(): DOMRequest;

  /**
   * Sets the voice privacy mode.
   * @param enabled - Whether voice privacy is enabled.
   * @throws
   * @permissions mobileconnection
   */
  setVoicePrivacyMode(enabled: boolean): DOMRequest;

  /**
   * Gets the voice privacy mode.
   * @throws
   * @permissions mobileconnection
   */
  getVoicePrivacyMode(): DOMRequest;

  /**
   * Sets call forwarding options.
   * @param options - The call forwarding options.
   * @throws
   * @permissions mobileconnection
   */
  setCallForwardingOption(options?: MozCallForwardingOptions): DOMRequest;

  /**
   * Gets call forwarding options.
   * @param reason - The reason for call forwarding.
   * @throws
   * @permissions mobileconnection
   */
  getCallForwardingOption(reason: number): DOMRequest;

  /**
   * Sets call barring options.
   * @param options - The call barring options.
   * @throws
   * @permissions mobileconnection
   */
  setCallBarringOption(options?: MozCallBarringOptions): DOMRequest;

  /**
   * Gets call barring options.
   * @param options - The call barring options.
   * @throws
   * @permissions mobileconnection
   */
  getCallBarringOption(options?: MozCallBarringOptions): DOMRequest;

  /**
   * Changes the call barring password.
   * @param options - The call barring options including the password.
   * @throws
   * @permissions mobileconnection
   */
  changeCallBarringPassword(options?: MozCallBarringOptions): DOMRequest;

  /**
   * Sets call waiting options.
   * @param enabled - Whether call waiting is enabled.
   * @throws
   * @permissions mobileconnection
   */
  setCallWaitingOption(enabled: boolean): DOMRequest;

  /**
   * Gets call waiting status.
   * @throws
   * @permissions mobileconnection
   */
  getCallWaitingOption(): DOMRequest;

  /**
   * Sets the Calling Line Identification Restriction (CLIR) mode.
   * @param mode - The CLIR mode.
   * @throws
   * @permissions mobileconnection
   */
  setCallingLineIdRestriction(mode: number): DOMRequest;

  /**
   * Gets the Calling Line Identification Restriction (CLIR) status.
   * @throws
   * @permissions mobileconnection
   */
  getCallingLineIdRestriction(): DOMRequest;

  /**
   * Exits emergency callback mode.
   * @throws
   * @permissions mobileconnection
   */
  exitEmergencyCbMode(): DOMRequest;

  /**
   * Enables or disables the radio.
   * @param enabled - Whether the radio should be enabled.
   * @throws
   * @permissions mobileconnection
   */
  setRadioEnabled(enabled: boolean): DOMRequest;

  /**
   * Event handler for when voice connection info changes.
   */
  onvoicechange: EventHandler;
  /**
   * Event handler for when data connection info changes.
   */
  ondatachange: EventHandler;
  /**
   * Event handler for when a data error occurs.
   */
  ondataerror: EventHandler;
  /**
   * Event handler for when call forwarding state changes.
   */
  oncfstatechange: EventHandler;
  /**
   * Event handler for when emergency callback mode changes.
   */
  onemergencycbmodechange: EventHandler;
  /**
   * Event handler for when OTA status changes.
   */
  onotastatuschange: EventHandler;
  /**
   * Event handler for when ICC info changes.
   */
  oniccchange: EventHandler;
  /**
   * Event handler for when radio state changes.
   */
  onradiostatechange: EventHandler;
  /**
   * Event handler for when CLIR mode changes.
   */
  onclirmodechange: EventHandler;
}
