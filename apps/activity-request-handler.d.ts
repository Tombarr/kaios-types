import { ActivityOptions } from './moz-activity';

/**
 * Handles incoming activity requests.
 *
 * Preference: "dom.sysmsg.enabled"
 * @chromeOnly
 */
export interface ActivityRequestHandler {
  /**
   * Sends a success result back to the caller.
   *
   * @param result - The result to return.
   * @remarks UnsafeInPrerendering
   */
  postResult(result: any): void;

  /**
   * Sends an error back to the caller.
   *
   * @param error - The error message or object.
   * @remarks UnsafeInPrerendering
   */
  postError(error: string): void;

  /**
   * The options that initiated this activity request.
   */
  readonly source: ActivityOptions;
}
