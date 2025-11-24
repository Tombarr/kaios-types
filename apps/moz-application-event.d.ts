import { DOMApplication } from './apps';

export interface MozApplicationEventInit extends EventInit {
  application?: DOMApplication | null;
}

/**
 * @chromeOnly
 */
export interface MozApplicationEvent extends Event {
  readonly application: DOMApplication | null;
}
