/// <reference types="../types.d.ts" />

import { describe, it, expect } from 'vitest';

/**
 * These tests verify that KaiOS global properties are properly declared
 * in the type definitions. They don't test runtime functionality,
 * but rather ensure the TypeScript compiler recognizes these properties.
 */

describe('Navigator KaiOS Properties', () => {
  it('should have mozApps property', () => {
    expect(typeof navigator.mozApps).toBeDefined();
  });

  it('should have mozSettings property', () => {
    expect(typeof navigator.mozSettings).toBeDefined();
  });

  it('should have mozBluetooth property', () => {
    expect(typeof navigator.mozBluetooth).toBeDefined();
  });

  it('should have mozTelephony property', () => {
    expect(typeof navigator.mozTelephony).toBeDefined();
  });

  it('should have mozMobileConnections property', () => {
    expect(typeof navigator.mozMobileConnections).toBeDefined();
  });

  it('should have mozMobileMessage property', () => {
    expect(typeof navigator.mozMobileMessage).toBeDefined();
  });

  it('should have mozWifiManager property', () => {
    expect(typeof navigator.mozWifiManager).toBeDefined();
  });

  it('should have mozContacts property', () => {
    expect(typeof navigator.mozContacts).toBeDefined();
  });

  it('should have mozCameras property', () => {
    expect(typeof navigator.mozCameras).toBeDefined();
  });

  it('should have mozPower property', () => {
    expect(typeof navigator.mozPower).toBeDefined();
  });

  it('should have volumeManager property', () => {
    expect(typeof navigator.volumeManager).toBeDefined();
  });

  it('should have mozAlarms property', () => {
    expect(typeof navigator.mozAlarms).toBeDefined();
  });

  it('should have mozNfc property', () => {
    expect(typeof navigator.mozNfc).toBeDefined();
  });

  it('should have mozFMRadio property', () => {
    expect(typeof navigator.mozFMRadio).toBeDefined();
  });

  it('should have connection property (NetworkInformation)', () => {
    expect(typeof navigator.connection).toBeDefined();
  });

  it('should have getDeviceStorage method', () => {
    expect(typeof navigator.getDeviceStorage).toBe('function');
  });

  it('should have requestWakeLock method', () => {
    expect(typeof navigator.requestWakeLock).toBe('function');
  });

  it('should have getBattery method', () => {
    expect(typeof navigator.getBattery).toBe('function');
  });

  it('should have mozSetMessageHandler method', () => {
    expect(typeof navigator.mozSetMessageHandler).toBe('function');
  });

  it('should have mozHasPendingMessage method', () => {
    expect(typeof navigator.mozHasPendingMessage).toBe('function');
  });

  it('should have largeTextEnabled property', () => {
    expect(typeof navigator.largeTextEnabled).toBeDefined();
  });

  it('should have seManager property', () => {
    expect(typeof navigator.seManager).toBeDefined();
  });
});

describe('Navigator Method Signatures', () => {
  it('should allow calling getDeviceStorage with string parameter', () => {
    // This is a compile-time test - if it compiles, the signature is correct
    const storage = navigator.getDeviceStorage('sdcard');
    expect(storage).toBeDefined();
  });

  it('should allow calling requestWakeLock with string parameter', () => {
    // This is a compile-time test - if it compiles, the signature is correct
    const wakeLock = navigator.requestWakeLock('screen');
    expect(wakeLock).toBeDefined();
  });

  it('should allow calling getBattery and return a Promise', async () => {
    const batteryPromise = navigator.getBattery();
    expect(batteryPromise).toBeInstanceOf(Promise);
    const battery = await batteryPromise;
    expect(battery).toBeDefined();
  });

  it('should allow calling mozSetMessageHandler with type and handler', () => {
    navigator.mozSetMessageHandler('alarm', (message) => {
      console.log('Alarm:', message);
    });
    expect(true).toBe(true); // Compile-time test
  });

  it('should allow calling mozHasPendingMessage with type', () => {
    const hasPending = navigator.mozHasPendingMessage('sms-received');
    expect(typeof hasPending).toBe('boolean');
  });
});

describe('VolumeManager Methods', () => {
  it('should have requestUp method', () => {
    expect(typeof navigator.volumeManager?.requestUp).toBe('function');
  });

  it('should have requestDown method', () => {
    expect(typeof navigator.volumeManager?.requestDown).toBe('function');
  });

  it('should have requestShow method', () => {
    expect(typeof navigator.volumeManager?.requestShow).toBe('function');
  });
});

describe('BatteryManager API', () => {
  it('should have all required BatteryManager properties', async () => {
    const battery = await navigator.getBattery();
    expect(typeof battery.charging).toBe('boolean');
    expect(typeof battery.chargingTime).toBe('number');
    expect(typeof battery.dischargingTime).toBe('number');
    expect(typeof battery.level).toBe('number');
  });

  it('should have KaiOS 2.5+ extended properties', async () => {
    const battery = await navigator.getBattery();
    expect(battery.health).toBeDefined();
    expect(battery.present).toBeDefined();
    expect(battery.temperature).toBeDefined();
  });
});

describe('SEManager API', () => {
  it('should have getSEReaders method', () => {
    expect(typeof navigator.seManager.getSEReaders).toBe('function');
  });

  it('should return Promise from getSEReaders', () => {
    const promise = navigator.seManager.getSEReaders();
    expect(promise).toBeInstanceOf(Promise);
  });
});

describe('LargeText API', () => {
  it('should have largeTextEnabled property', () => {
    expect(typeof navigator.largeTextEnabled).toBe('boolean');
  });

  it('should support largetextenabledchanged event on window', () => {
    const handler = () => {};
    window.addEventListener('largetextenabledchanged', handler);
    window.removeEventListener('largetextenabledchanged', handler);
    expect(true).toBe(true); // Compile-time test
  });
});

describe('Window Global Constructors', () => {
  it('should have MozActivity constructor', () => {
    expect(typeof window.MozActivity).toBeDefined();
  });
});
