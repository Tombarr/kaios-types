import { DOMRequest } from '../common';

/**
 * Callback for the next paint event.
 */
export type BrowserElementNextPaintEventCallback = () => void;

/**
 * Case sensitivity options for find operations.
 */
export type BrowserFindCaseSensitivity = 'case-sensitive' | 'case-insensitive';

/**
 * Direction options for find operations.
 */
export type BrowserFindDirection = 'forward' | 'backward';

/**
 * Options for downloading a file.
 */
export interface BrowserElementDownloadOptions {
  /**
   * Suggested filename for the download.
   */
  filename?: string;
  /**
   * Referrer URL for the download.
   */
  referrer?: string;
}

/**
 * Options for executing a script.
 */
export interface BrowserElementExecuteScriptOptions {
  /**
   * The URL associated with the script.
   */
  url?: string;
  /**
   * The origin associated with the script.
   */
  origin?: string;
}

/**
 * Common methods for browser elements.
 *
 * Preference: "dom.mozBrowserFramesEnabled"
 * @permissions browser or embed-widgets
 */
export interface BrowserElementCommon {
  /**
   * Sets the visibility of the browser element.
   *
   * @param visible Whether the element should be visible.
   * @throws {Error} NS_ERROR_NOT_AVAILABLE.
   */
  setVisible(visible: boolean): void;

  /**
   * Gets the visibility state of the browser element.
   *
   * @returns A DOMRequest that resolves to the visibility state.
   * @throws {Error} NS_ERROR_NOT_AVAILABLE.
   */
  getVisible(): DOMRequest;

  /**
   * Sets the active state of the browser element.
   *
   * @param active Whether the element should be active.
   * @throws {Error} NS_ERROR_NOT_AVAILABLE.
   */
  setActive(active: boolean): void;

  /**
   * Gets the active state of the browser element.
   *
   * @returns True if active, false otherwise.
   * @throws {Error} NS_ERROR_NOT_AVAILABLE.
   */
  getActive(): boolean;

  /**
   * Adds a listener for the next paint event.
   *
   * @param listener The callback to invoke on the next paint.
   * @throws {Error} NS_ERROR_NOT_AVAILABLE.
   */
  addNextPaintListener(listener: BrowserElementNextPaintEventCallback): void;

  /**
   * Removes a listener for the next paint event.
   *
   * @param listener The callback to remove.
   * @throws {Error} NS_ERROR_NOT_AVAILABLE.
   */
  removeNextPaintListener(listener: BrowserElementNextPaintEventCallback): void;
}

/**
 * Privileged methods for browser elements.
 */
export interface BrowserElementPrivileged {
  /**
   * Sends a mouse event to the browser element content.
   *
   * @param type The type of mouse event (e.g., "mousedown", "mouseup").
   * @param x The x coordinate.
   * @param y The y coordinate.
   * @param button The button pressed.
   * @param clickCount The number of clicks.
   * @param modifiers Modifier keys pressed.
   * @throws {Error} NS_ERROR_NOT_AVAILABLE.
   * @permissions browser
   */
  sendMouseEvent(
    type: string,
    x: number,
    y: number,
    button: number,
    clickCount: number,
    modifiers: number
  ): void;

  /**
   * Sends a touch event to the browser element content.
   *
   * @param type The type of touch event.
   * @param identifiers Array of touch identifiers.
   * @param x Array of x coordinates.
   * @param y Array of y coordinates.
   * @param rx Array of radius-x values.
   * @param ry Array of radius-y values.
   * @param rotationAngles Array of rotation angles.
   * @param forces Array of force values.
   * @param count Number of touches.
   * @param modifiers Modifier keys.
   * @throws {Error} NS_ERROR_NOT_AVAILABLE.
   * Requires "TouchEvent::PrefEnabled" to be true.
   * @permissions browser
   */
  sendTouchEvent(
    type: string,
    identifiers: number[],
    x: number[],
    y: number[],
    rx: number[],
    ry: number[],
    rotationAngles: number[],
    forces: number[],
    count: number,
    modifiers: number
  ): void;

  /**
   * Navigates back in the session history.
   *
   * @throws {Error} NS_ERROR_NOT_AVAILABLE.
   * @permissions browser
   */
  goBack(): void;

  /**
   * Navigates forward in the session history.
   *
   * @throws {Error} NS_ERROR_NOT_AVAILABLE.
   * @permissions browser
   */
  goForward(): void;

  /**
   * Reloads the current page.
   *
   * @param hardReload Whether to perform a hard reload (bypassing cache).
   * @throws {Error} NS_ERROR_NOT_AVAILABLE.
   * @permissions browser
   */
  reload(hardReload?: boolean): void;

  /**
   * Stops loading the current page.
   *
   * @throws {Error} NS_ERROR_NOT_AVAILABLE.
   * @permissions browser
   */
  stop(): void;

  /**
   * Downloads a file from a URL.
   *
   * @param url The URL to download.
   * @param options Download options.
   * @returns A DOMRequest indicating success or failure.
   * @throws {Error} NS_ERROR_NOT_AVAILABLE.
   * @permissions browser
   */
  download(url: string, options?: BrowserElementDownloadOptions): DOMRequest;

  /**
   * Purges the session history.
   *
   * @returns A DOMRequest indicating success or failure.
   * @throws {Error} NS_ERROR_NOT_AVAILABLE.
   * @permissions browser
   */
  purgeHistory(): DOMRequest;

  /**
   * Captures a screenshot of the browser element content.
   *
   * @param width The width of the screenshot.
   * @param height The height of the screenshot.
   * @param mimeType The MIME type of the screenshot (optional).
   * @returns A DOMRequest resolving to a Blob.
   * @throws {Error} NS_ERROR_NOT_AVAILABLE.
   * @permissions browser
   */
  getScreenshot(width: number, height: number, mimeType?: string): DOMRequest;

  /**
   * Sets the zoom factor.
   *
   * @param zoom The zoom factor.
   * @throws {Error} NS_ERROR_NOT_AVAILABLE.
   * @permissions browser
   */
  zoom(zoom: number): void;

  /**
   * Checks if it is possible to navigate back.
   *
   * @returns A DOMRequest resolving to a boolean.
   * @throws {Error} NS_ERROR_NOT_AVAILABLE.
   * @permissions browser
   */
  getCanGoBack(): DOMRequest;

  /**
   * Checks if it is possible to navigate forward.
   *
   * @returns A DOMRequest resolving to a boolean.
   * @throws {Error} NS_ERROR_NOT_AVAILABLE.
   * @permissions browser
   */
  getCanGoForward(): DOMRequest;

  /**
   * Retrieves the dimensions of the content.
   *
   * @returns A DOMRequest resolving to the dimensions.
   * @throws {Error} NS_ERROR_NOT_AVAILABLE.
   * @permissions browser
   */
  getContentDimensions(): DOMRequest;

  /**
   * Sets whether the input method is active.
   *
   * @param isActive Whether the input method should be active.
   * @returns A DOMRequest indicating success or failure.
   * @throws {Error} NS_ERROR_NOT_AVAILABLE.
   * @permissions browser, input-manage
   */
  setInputMethodActive(isActive: boolean): DOMRequest;

  /**
   * Sets whether NFC events should be focused on this element.
   *
   * @param isFocus Whether to focus NFC events.
   * @throws {Error} NS_ERROR_NOT_AVAILABLE.
   * @permissions browser, nfc-manager
   */
  setNFCFocus(isFocus: boolean): void;

  /**
   * Finds text within the content.
   *
   * @param searchString The text to search for.
   * @param caseSensitivity Case sensitivity option.
   * @throws {Error} NS_ERROR_NOT_AVAILABLE.
   * @permissions browser
   */
  findAll(
    searchString: string,
    caseSensitivity: BrowserFindCaseSensitivity
  ): void;

  /**
   * Finds the next occurrence of the text.
   *
   * @param direction Direction to search.
   * @throws {Error} NS_ERROR_NOT_AVAILABLE.
   * @permissions browser
   */
  findNext(direction: BrowserFindDirection): void;

  /**
   * Clears the current search match.
   *
   * @throws {Error} NS_ERROR_NOT_AVAILABLE.
   * @permissions browser
   */
  clearMatch(): void;

  /**
   * Executes a script in the context of the browser element.
   *
   * @param script The script source code.
   * @param options Options for execution.
   * @returns A DOMRequest that resolves when execution is complete.
   * @throws {Error} NS_ERROR_NOT_AVAILABLE.
   * @permissions browser, browser:universalxss
   */
  executeScript(
    script: string,
    options?: BrowserElementExecuteScriptOptions
  ): DOMRequest;

  /**
   * Retrieves structured data from the page (e.g., Microdata, Open Graph).
   *
   * @returns A DOMRequest resolving to the structured data.
   * @throws {Error} NS_ERROR_NOT_AVAILABLE.
   * @permissions browser
   */
  getStructuredData(): DOMRequest;

  /**
   * Retrieves the Web Manifest of the page.
   *
   * @returns A DOMRequest resolving to the manifest.
   * @throws {Error} NS_ERROR_NOT_AVAILABLE.
   * @permissions browser
   */
  getWebManifest(): DOMRequest;
}

/**
 * Combined interface for browser elements.
 */
export interface BrowserElement
  extends BrowserElementCommon,
    BrowserElementPrivileged {}
