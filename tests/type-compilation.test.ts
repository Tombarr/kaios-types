/// <reference types="../types.d.ts" />

import { describe, it, expectTypeOf } from 'vitest';
import type {
  VolumeManager,
  SettingsManager,
  BluetoothManager,
  Telephony,
  MozWifiManager,
  ContactManager,
  CameraManager,
  DOMRequest
} from '../types';

/**
 * Type compilation tests - these verify that types are correctly defined
 * and can be used in TypeScript code without compilation errors.
 */

describe('Type Definitions - Navigator Extensions', () => {
  it('should have correct type for volumeManager', () => {
    expectTypeOf(navigator.volumeManager).toMatchTypeOf<VolumeManager>();
  });

  it('should have correct type for mozSettings', () => {
    expectTypeOf(navigator.mozSettings).toMatchTypeOf<SettingsManager>();
  });

  it('should have correct type for mozBluetooth', () => {
    expectTypeOf(navigator.mozBluetooth).toMatchTypeOf<BluetoothManager>();
  });

  it('should have correct type for mozTelephony', () => {
    expectTypeOf(navigator.mozTelephony).toMatchTypeOf<Telephony>();
  });

  it('should have correct type for mozWifiManager', () => {
    expectTypeOf(navigator.mozWifiManager).toMatchTypeOf<MozWifiManager>();
  });

  it('should have correct type for mozContacts', () => {
    expectTypeOf(navigator.mozContacts).toMatchTypeOf<ContactManager>();
  });

  it('should have correct type for mozCameras', () => {
    expectTypeOf(navigator.mozCameras).toMatchTypeOf<CameraManager>();
  });
});

describe('Type Definitions - VolumeManager Interface', () => {
  it('should have requestUp method returning void', () => {
    expectTypeOf(navigator.volumeManager.requestUp).toBeFunction();
    expectTypeOf(navigator.volumeManager.requestUp).returns.toBeVoid();
  });

  it('should have requestDown method returning void', () => {
    expectTypeOf(navigator.volumeManager.requestDown).toBeFunction();
    expectTypeOf(navigator.volumeManager.requestDown).returns.toBeVoid();
  });

  it('should have requestShow method returning void', () => {
    expectTypeOf(navigator.volumeManager.requestShow).toBeFunction();
    expectTypeOf(navigator.volumeManager.requestShow).returns.toBeVoid();
  });
});

describe('Type Definitions - Common Types', () => {
  it('should allow DOMRequest with success/error handlers', () => {
    const request: DOMRequest = {} as DOMRequest;
    expectTypeOf(request.onsuccess).toEqualTypeOf<
      ((this: DOMRequest, ev: Event) => any) | null
    >();
    expectTypeOf(request.onerror).toEqualTypeOf<
      ((this: DOMRequest, ev: Event) => any) | null
    >();
  });
});

describe('Type Definitions - Activity Constructor', () => {
  it('should allow creating MozActivity with ActivityOptions', () => {
    expectTypeOf(window.MozActivity).toBeConstructibleWith({
      name: 'pick',
      data: { type: 'image/jpeg' }
    });
  });
});

describe('Type Definitions - Method Signatures', () => {
  it('getDeviceStorage should accept string and return DeviceStorage', () => {
    expectTypeOf(navigator.getDeviceStorage).toBeFunction();
    expectTypeOf(navigator.getDeviceStorage).parameter(0).toBeString();
  });

  it('requestWakeLock should accept string and return MozWakeLock', () => {
    expectTypeOf(navigator.requestWakeLock).toBeFunction();
    expectTypeOf(navigator.requestWakeLock).parameter(0).toBeString();
  });
});
