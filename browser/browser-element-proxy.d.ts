import {
  BrowserElementCommon,
  BrowserElementPrivileged
} from './browser-element';

/// <reference path="./browser-element.d.ts" />

/**
 * Proxy interface for browser elements, used in embedded system apps.
 *
 * Preference: "dom.mozBrowserFramesEnabled"
 * @permissions browser:embedded-system-app
 */
export interface BrowserElementProxy
  extends EventTarget,
    BrowserElementCommon,
    BrowserElementPrivileged {}
