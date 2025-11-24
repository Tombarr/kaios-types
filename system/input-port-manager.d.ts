import { InputPort } from './input-port';

/**
 * @preference dom.inputport.enabled
 * @permissions inputport
 * @available CertifiedApps
 * Manages input ports on the device.
 */
export interface InputPortManager {
  /**
   * Retrieves a list of available input ports.
   * @throws
   */
  getInputPorts(): Promise<InputPort[]>;
}
