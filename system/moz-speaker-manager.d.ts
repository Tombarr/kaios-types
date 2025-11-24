/**
 * Manages the device's speaker settings.
 */
export interface MozSpeakerManager extends EventTarget {
  /**
   * Query the speaker status.
   */
  readonly speakerforced: boolean;

  /**
   * Force device's acoustic sound output through speaker.
   */
  forcespeaker: boolean;

  /**
   * This event will be fired when device's speaker forced status change.
   */
  onspeakerforcedchange: EventHandler;
}
