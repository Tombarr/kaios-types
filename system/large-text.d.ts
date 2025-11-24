/**
 * LargeText API
 *
 * Allows applications to detect and respond to user text size preferences
 * for accessibility. Available in KaiOS 2.5+.
 *
 * @available CertifiedApps
 * @see https://developer.kaiostech.com/docs/api/web-apis/largetext/largetext
 */

/**
 * Event fired when the user changes the Device/Accessibility/Large Text setting.
 * Applications should listen for this event on the window object and update
 * their UI layout accordingly.
 *
 * @example
 * ```typescript
 * window.addEventListener('largetextenabledchanged', () => {
 *   if (navigator.largeTextEnabled) {
 *     // Update UI for large text display
 *     document.body.classList.add('large-text');
 *   } else {
 *     document.body.classList.remove('large-text');
 *   }
 * });
 * ```
 */
export interface LargeTextEnabledChangedEvent extends Event {
  type: 'largetextenabledchanged';
}
