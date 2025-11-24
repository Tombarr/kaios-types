/**
 * Test setup file - mocks KaiOS APIs for testing
 * These are minimal mocks just to verify the type definitions work correctly
 */

// Mock Navigator extensions
Object.defineProperties(navigator, {
  volumeManager: {
    value: {
      requestUp: () => {},
      requestDown: () => {},
      requestShow: () => {}
    },
    configurable: true
  },
  getDeviceStorage: {
    value: (type: string) => ({
      type,
      storageName: 'mock'
    }),
    configurable: true
  },
  requestWakeLock: {
    value: (topic: string) => ({
      topic,
      unlock: () => {}
    }),
    configurable: true
  },
  getBattery: {
    value: () =>
      Promise.resolve({
        charging: false,
        chargingTime: 0,
        dischargingTime: 3600,
        level: 0.75,
        health: 'good',
        present: true,
        temperature: 25,
        onchargingchange: null,
        onchargingtimechange: null,
        ondischargingtimechange: null,
        onlevelchange: null,
        onbatteryhealthchange: null,
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => true
      }),
    configurable: true
  },
  mozSetMessageHandler: {
    value: (_type: string, _handler: ((message: any) => void) | null) => {
      // Mock implementation - just store the handler
    },
    configurable: true
  },
  mozHasPendingMessage: {
    value: (_type: string) => false,
    configurable: true
  },
  largeTextEnabled: {
    value: false,
    configurable: true,
    writable: true
  },
  seManager: {
    value: {
      getSEReaders: () => Promise.resolve([])
    },
    configurable: true
  },
  mozAudioChannelManager: {
    value: {
      volumeControlChannel: 'normal',
      headphones: false,
      telephonySpeaker: false,
      allowedAudioChannels: [
        'normal',
        'content',
        'notification',
        'alarm',
        'telephony',
        'ringer',
        'publicnotification'
      ],
      onheadphonesstatuschanged: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => true
    },
    configurable: true
  }
});

// Mock HTMLMediaElement extension
const mediaProto = window.HTMLMediaElement.prototype as any;

Object.defineProperty(mediaProto, 'mozAudioChannelType', {
  get() {
    return this._mozAudioChannelType || 'normal';
  },
  set(value) {
    this._mozAudioChannelType = value;
  },
  configurable: true
});

mediaProto.mozCaptureStream = () => ({}) as MediaStream;
mediaProto.mozCaptureStreamUntilEnded = () => ({}) as MediaStream;
mediaProto.mozGetMetadata = () => ({});
mediaProto.mozDumpDebugInfo = () => {};
mediaProto.mozPreservesPitch = true;
mediaProto.mozAutoplayEnabled = true;
mediaProto.mozAudioCaptured = false;
mediaProto.mozFragmentEnd = 0;

// Mock Window constructors

(window as any).MozActivity = class {
  constructor(options?: any) {
    this.options = options;
  }
  options: any;
};
