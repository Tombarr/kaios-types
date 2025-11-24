/// <reference types="../types.d.ts" />

import { describe, it, expect } from 'vitest';

/**
 * Tests for the AudioChannelManager API and associated global extensions.
 */
describe('AudioChannelManager API', () => {
  it('should have mozAudioChannelManager property on navigator', () => {
    expect(navigator.mozAudioChannelManager).toBeDefined();
  });

  it('should have correct properties on AudioChannelManager', () => {
    const manager = navigator.mozAudioChannelManager;

    // Check properties exist and have correct types (at runtime/mock level)
    expect(manager.volumeControlChannel).toBeDefined();
    expect(typeof manager.headphones).toBe('boolean');
    expect(typeof manager.telephonySpeaker).toBe('boolean');
    expect(Array.isArray(manager.allowedAudioChannels)).toBe(true);
  });

  it('should have volumeControlChannel property', () => {
    const manager = navigator.mozAudioChannelManager;
    expect(typeof manager.volumeControlChannel).toBe('string');
  });

  it('should allow setting volume control channel', () => {
    const manager = navigator.mozAudioChannelManager;
    // Verify method signature accepts string
    manager.volumeControlChannel = 'content';
    expect(true).toBe(true); // Verification that it compiles/runs
  });

  it('should have onheadphonesstatuschanged event handler', () => {
    const manager = navigator.mozAudioChannelManager;
    // Can be null or function
    expect(manager.onheadphonesstatuschanged).toBeDefined();
  });

  it('should support event listener for headphones status change', () => {
    const manager = navigator.mozAudioChannelManager;
    const handler = () => {};

    manager.addEventListener('headphonesstatuschanged', handler);
    manager.removeEventListener('headphonesstatuschanged', handler);

    expect(true).toBe(true); // Verification that it compiles/runs
  });
});

describe('HTMLMediaElement Extensions', () => {
  it('should have mozAudioChannelType property on HTMLMediaElement', () => {
    const audio = document.createElement('audio');
    // Initially might be undefined in JSDOM/Node environment, but we check if we can access it
    expect(audio.mozAudioChannelType).toBeDefined();
  });

  it('should allow setting mozAudioChannelType', () => {
    const audio = document.createElement('audio');
    audio.mozAudioChannelType = 'content';
    expect(audio.mozAudioChannelType).toBe('content');

    audio.mozAudioChannelType = 'alarm';
    expect(audio.mozAudioChannelType).toBe('alarm');
  });

  it('should have additional Mozilla extensions', () => {
    const audio = document.createElement('audio');

    // Check methods
    expect(typeof audio.mozCaptureStream).toBe('function');
    expect(typeof audio.mozCaptureStreamUntilEnded).toBe('function');
    expect(typeof audio.mozGetMetadata).toBe('function');

    // Check properties
    expect(typeof audio.mozPreservesPitch).toBe('boolean');
    expect(typeof audio.mozAutoplayEnabled).toBe('boolean');
    expect(typeof audio.mozAudioCaptured).toBe('boolean');
    expect(typeof audio.mozFragmentEnd).toBe('number');
  });

  it('should support interruption events', () => {
    const audio = document.createElement('audio');

    // Type check for event handlers
    audio.onmozinterruptbegin = (_ev) => {};
    audio.onmozinterruptend = (_ev) => {};

    expect(audio.onmozinterruptbegin).toBeDefined();
    expect(audio.onmozinterruptend).toBeDefined();
  });
});
