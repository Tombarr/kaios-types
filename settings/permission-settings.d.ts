/**
 * @permissions permissions
 * @preference dom.mozPermissionSettings.enabled
 */
export interface PermissionSettings {
  /**
   * Gets the current permission value for a specific permission and origin.
   *
   * @param permission - The name of the permission to query (e.g., "geolocation").
   * @param manifestURI - The manifest URI of the application.
   * @param origin - The origin URI to check the permission for.
   * @param browserFlag - Whether the permission check is for a browser element.
   * @returns The permission state (e.g., "allow", "deny", "prompt", "unknown").
   */
  get(
    permission: string,
    manifestURI: string,
    origin: string,
    browserFlag: boolean
  ): string;

  /**
   * Sets the permission value for a specific permission and origin.
   *
   * @param permission - The name of the permission to set.
   * @param value - The value to set (e.g., "allow", "deny", "prompt").
   * @param manifestURI - The manifest URI of the application.
   * @param origin - The origin URI to set the permission for.
   * @param browserFlag - Whether the permission setting is for a browser element.
   */
  set(
    permission: string,
    value: string,
    manifestURI: string,
    origin: string,
    browserFlag: boolean
  ): void;

  /**
   * Checks if a permission is explicitly set for a given origin.
   *
   * @param permission - The name of the permission to check.
   * @param manifestURI - The manifest URI of the application.
   * @param origin - The origin URI to check.
   * @param browserFlag - Whether the check is for a browser element.
   * @returns True if the permission is explicitly set, false otherwise.
   */
  isExplicit(
    permission: string,
    manifestURI: string,
    origin: string,
    browserFlag: boolean
  ): boolean;

  /**
   * Removes a permission setting.
   *
   * Removing a permission is only allowed for pages with a different origin than the app
   * and pages that have browserFlag=true, so remove() doesn't have a browserFlag parameter.
   *
   * @param permission - The name of the permission to remove.
   * @param manifestURI - The manifest URI of the application.
   * @param origin - The origin URI to remove the permission from.
   */
  remove(permission: string, manifestURI: string, origin: string): void;
}
