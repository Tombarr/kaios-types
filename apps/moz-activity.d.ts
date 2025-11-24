import { DOMRequest } from '../common';

/**
 * Options to configure a MozActivity.
 */
export interface ActivityOptions {
  /**
   * The name of the activity (e.g., "pick", "share", "view").
   */
  name?: string;

  /**
   * Data associated with the activity.
   */
  data?: any;

  /**
   * Whether to return filter results.
   */
  getFilterResults?: boolean;
}

/**
 * Represents a request to delegate an action to another application.
 *
 * @preference dom.sysmsg.enabled
 */
export interface MozActivity extends DOMRequest {
  // Constructor defined in global augmentation
  // new (options: ActivityOptions): MozActivity;
}
