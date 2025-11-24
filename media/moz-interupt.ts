/**
 * AudioChannels API
 *
 * @see https://wiki.mozilla.org/WebAPI/AudioChannels
 */

export interface MozInterruptBegin extends Event {
  type: 'mozinterruptbegin';
}

export interface MozInterruptEnd extends Event {
  type: 'mozinterruptend';
}
