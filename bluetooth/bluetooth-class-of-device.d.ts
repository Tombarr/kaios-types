/**
 * @permissions bluetooth
 */
export interface BluetoothClassOfDevice {
  readonly LIMITED_DISCOVERABILITY: number; // 0x0001
  readonly POSITIONING: number; // 0x0008
  readonly NETWORKING: number; // 0x0010
  readonly RENDERING: number; // 0x0020
  readonly CAPTURING: number; // 0x0040
  readonly OBJECT_TRANSFER: number; // 0x0080
  readonly AUDIO: number; // 0x0100
  readonly TELEPHONY: number; // 0x0200
  readonly INFORMATION: number; // 0x0400

  readonly MISC: number; // 0x00
  readonly COMPUTER: number; // 0x01
  readonly PHONE: number; // 0x02
  readonly NETWORK: number; // 0x03
  readonly AUDIO_VIDEO: number; // 0x04
  readonly PERIPHERAL: number; // 0x05
  readonly IMAGING: number; // 0x06
  readonly WEARABLE: number; // 0x07
  readonly TOY: number; // 0x08
  readonly HEALTH: number; // 0x09
  readonly UNCATEGORIZED: number; // 0x1F

  readonly majorServiceClass: number;
  readonly majorDeviceClass: number;
  readonly minorDeviceClass: number;
}
