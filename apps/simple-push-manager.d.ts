import { DOMRequest } from '../common';

/**
 * @navigatorProperty push
 * @permissions push
 * @preference services.push.enabled
 */
export interface SimplePushManager {
  /**
   * Registers the application to receive push notifications.
   */
  register(): DOMRequest;

  /**
   * Unregisters a specific push endpoint.
   * @param pushEndpoint - The endpoint URL to unregister.
   */
  unregister(pushEndpoint: string): DOMRequest;

  /**
   * Retrieves all active push registrations for the application.
   */
  registrations(): DOMRequest;
}
