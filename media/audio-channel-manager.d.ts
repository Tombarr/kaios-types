export type AudioChannelType =
  | 'normal'
  | 'content'
  | 'notification'
  | 'alarm'
  | 'telephony'
  | 'ringer'
  | 'publicnotification';

/**
 * The AudioChannelManager interface allows managing the audio channels of the device.
 * It provides access to volume control and headphone status.
 *
 * @permissions audio-channel-telephony, audio-channel-ringer, audio-channel-alarm, audio-channel-notification, audio-channel-content
 * @preference media.useAudioChannelAPI
 *
 * @see https://wiki.mozilla.org/WebAPI/AudioChannels
 */
export interface AudioChannelManager extends EventTarget {
  /**
   * Indicates which audio channel's volume is currently being controlled by the hardware volume keys.
   */
  volumeControlChannel: string;

  /**
   * Indicates whether headphones are currently plugged in.
   */
  readonly headphones: boolean;

  /**
   * Indicates whether the telephony speaker is currently enabled.
   */
  readonly telephonySpeaker: boolean;

  /**
   * Fired when the headphones status changes (plugged in or removed).
   */
  onheadphonesstatuschanged:
    | ((this: AudioChannelManager, ev: Event) => any)
    | null;

  /**
   * Returns a list of audio channels that are allowed to be used.
   */
  readonly allowedAudioChannels: AudioChannelType[];
}
