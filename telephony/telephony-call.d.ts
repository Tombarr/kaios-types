import { TelephonyCallId } from './telephony';
import { TelephonyCallGroup } from './telephony-call-group';

export type TelephonyCallState =
  | 'dialing'
  | 'alerting'
  | 'connected'
  | 'held'
  | 'disconnected'
  | 'incoming';

export type TelephonyCallDisconnectedReason =
  | 'BadNumber'
  | 'NoRouteToDestination'
  | 'ChannelUnacceptable'
  | 'OperatorDeterminedBarring'
  | 'NormalCallClearing'
  | 'Busy'
  | 'NoUserResponding'
  | 'UserAlertingNoAnswer'
  | 'CallRejected'
  | 'NumberChanged'
  | 'CallRejectedDestinationFeature'
  | 'PreEmption'
  | 'DestinationOutOfOrder'
  | 'InvalidNumberFormat'
  | 'FacilityRejected'
  | 'ResponseToStatusEnquiry'
  | 'Congestion'
  | 'NetworkOutOfOrder'
  | 'NetworkTempFailure'
  | 'SwitchingEquipCongestion'
  | 'AccessInfoDiscarded'
  | 'RequestedChannelNotAvailable'
  | 'ResourceUnavailable'
  | 'QosUnavailable'
  | 'RequestedFacilityNotSubscribed'
  | 'IncomingCallsBarredWithinCug'
  | 'BearerCapabilityNotAuthorized'
  | 'BearerCapabilityNotAvailable'
  | 'BearerNotImplemented'
  | 'ServiceNotAvailable'
  | 'IncomingCallExceeded'
  | 'RequestedFacilityNotImplemented'
  | 'UnrestrictedBearerNotAvailable'
  | 'ServiceNotImplemented'
  | 'InvalidTransactionId'
  | 'NotCugMember'
  | 'IncompatibleDestination'
  | 'InvalidTransitNetworkSelection'
  | 'SemanticallyIncorrectMessage'
  | 'InvalidMandatoryInfo'
  | 'MessageTypeNotImplemented'
  | 'MessageTypeIncompatibleProtocolState'
  | 'InfoElementNotImplemented'
  | 'ConditionalIe'
  | 'MessageIncompatibleProtocolState'
  | 'RecoveryOnTimerExpiry'
  | 'Protocol'
  | 'Interworking'
  | 'Barred'
  | 'FDNBlocked'
  | 'SubscriberUnknown'
  | 'DeviceNotAccepted'
  | 'ModifiedDial'
  | 'CdmaLockedUntilPowerCycle'
  | 'CdmaDrop'
  | 'CdmaIntercept'
  | 'CdmaReorder'
  | 'CdmaSoReject'
  | 'CdmaRetryOrder'
  | 'CdmaAcess'
  | 'CdmaPreempted'
  | 'CdmaNotEmergency'
  | 'CdmaAccessBlocked'
  | 'Unspecified';

/**
 * @preference dom.telephony.enabled
 */
export interface TelephonyCall extends EventTarget {
  /**
   * The service ID associated with the call.
   */
  readonly serviceId: number;

  /**
   * The unique identifier for the call.
   */
  readonly id: TelephonyCallId;

  /**
   * The second unique identifier for the call, if any.
   */
  readonly secondId: TelephonyCallId | null;

  /**
   * The current state of the call.
   */
  readonly state: TelephonyCallState;

  /**
   * Indicates whether this is an emergency call.
   */
  readonly emergency: boolean;

  /**
   * Indicates whether the call can be switched.
   */
  readonly switchable: boolean;

  /**
   * Indicates whether the call can be merged into a conference.
   */
  readonly mergeable: boolean;

  /**
   * The error associated with the call, if any.
   */
  readonly error: DOMError | null;

  /**
   * The reason why the call was disconnected, if applicable.
   */
  readonly disconnectedReason: TelephonyCallDisconnectedReason | null;

  /**
   * The group the call belongs to, if any.
   */
  readonly group: TelephonyCallGroup | null;

  /**
   * Answers the incoming call.
   */
  answer(): Promise<void>;

  /**
   * Hangs up the call.
   */
  hangUp(): Promise<void>;

  /**
   * Puts the call on hold.
   */
  hold(): Promise<void>;

  /**
   * Resumes the held call.
   */
  resume(): Promise<void>;

  /**
   * Event handler for when the call state changes.
   */
  onstatechange: EventHandler;

  /**
   * Event handler for when the call is dialing.
   */
  ondialing: EventHandler;

  /**
   * Event handler for when the call is alerting (ringing).
   */
  onalerting: EventHandler;

  /**
   * Event handler for when the call is connected.
   */
  onconnected: EventHandler;

  /**
   * Event handler for when the call is disconnected.
   */
  ondisconnected: EventHandler;

  /**
   * Event handler for when the call is held.
   */
  onheld: EventHandler;

  /**
   * Event handler for when an error occurs.
   */
  onerror: EventHandler;

  /**
   * Event handler for when the call group changes.
   */
  ongroupchange: EventHandler;
}
