# KaiOS TypeScript Type Declarations

TypeScript type definitions for KaiOS. Currently supports **KaiOS v2.5**, the successor to **Firefox OS** also known as **Boot2Gecko** (B2G).

[![npm version](https://img.shields.io/npm/v/kaios-types.svg)](https://www.npmjs.com/package/kaios-types)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Overview

This package provides comprehensive TypeScript type definitions for the proprietary Web APIs available in KaiOS. These APIs give access to telephony, SMS, Bluetooth, WiFi, contacts, camera, and more.

**Note:** Most of these APIs are non-standard and proprietary to KaiOS platform. Many require specific permissions in your app's manifest (`manifest.webapp`) and are restricted to certain app types (i.e. privileged or certified).

## Documentation

For more information on KaiOS development, see the [KaiOS Developer Portal](https://developer.kaiostech.com/), [KaiOS.dev](https://kaios.dev) blog, and [BananaHackers](https://sites.google.com/view/bananahackers/home) website.

## Installation

NPM

```bash
npm install --save-dev kaios-types
```

PNPM

```bash
pnpm add kaios-types --save-dev
```

Bun

```bash
bun add --development kaios-types
```

## Usage

### Option 1: Global Type Declarations (Recommended)

Add the types to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["kaios-types"]
  }
}
```

Or use a triple-slash directive at the top of your TypeScript files:

```typescript
/// <reference types="kaios-types" />

// Now KaiOS APIs are available with full type checking
const settings = navigator.mozSettings;
settings.createLock().set({ 'wifi.enabled': true });
```

### Option 2: Modular Imports

You can also import specific types directly:

```typescript
import { MozActivity, ActivityOptions } from 'kaios-types/apps/moz-activity';
import { BluetoothManager } from 'kaios-types/bluetooth/bluetooth-manager';

const activity = new MozActivity({
  name: 'pick',
  data: { type: 'image/jpeg' }
});
```

## API Categories

### 📱 Apps & Activities

- **Applications** - Install, manage, and launch apps
- **Activities** - Inter-app communication and task delegation
- **Push Notifications** - SimplePush for notifications
- **Downloads** - File download management

### 📡 Connectivity

- **Telephony** - Make and receive phone calls
- **SMS/MMS** - Send and receive messages
- **Mobile Network** - Network status, signal strength, roaming
- **WiFi** - Connect to networks, WiFi Direct
- **Bluetooth** - Full Bluetooth stack with GATT support
- **NFC** - Near Field Communication and secure elements
- **TCP/UDP Sockets** - Low-level network communication

### 🎬 Media & Hardware

- **Camera** - Photo and video capture
- **FM Radio** - FM tuner control
- **TV** - TV tuner functionality
- **Volume** - System volume management

### 💾 Data & Storage

- **Contacts** - Address book management
- **DataStore** - Inter-app data sharing
- **Device Storage** - File system access (sdcard, pictures, music, videos)

### ⚙️ System

- **Settings** - Read and modify system settings
- **Power** - Screen brightness, power off, reboot
- **Alarms** - Schedule app wake-ups
- **Wake Locks** - Prevent device sleep
- **Time** - Set system time
- **Permissions** - Manage app permissions

## Examples

### Send an SMS

```typescript
const sms = navigator.mozMobileMessage;
const request = sms.send('+1234567890', 'Hello from KaiOS!');

request.onsuccess = () => {
  console.log('SMS sent successfully');
};

request.onerror = () => {
  console.error('Failed to send SMS:', request.error);
};
```

### Control WiFi

```typescript
const wifi = navigator.mozWifiManager;

// Enable WiFi
wifi.setWifiEnabled(true);

// Scan for networks
const request = wifi.getNetworks();
request.onsuccess = () => {
  const networks = request.result;
  networks.forEach((network) => {
    console.log(`Found network: ${network.ssid}`);
  });
};
```

### Access Contacts

```typescript
const contacts = navigator.mozContacts;

const request = contacts.find({
  filterBy: ['givenName'],
  filterValue: 'John',
  filterOp: 'contains'
});

request.onsuccess = () => {
  const cursor = request.result;
  cursor.forEach((contact) => {
    console.log(`Contact: ${contact.givenName} ${contact.familyName}`);
  });
};
```

### Adjust Volume

```typescript
const volumeManager = navigator.volumeManager;

// Increase volume
volumeManager.requestUp();

// Decrease volume
volumeManager.requestDown();

// Show volume UI
volumeManager.requestShow();
```

## Compatibility

- **KaiOS Version:** 2.5
- **TypeScript Version:** 5.0+
- **Based on:** Mozilla Boot to Gecko (B2G) / Firefox OS APIs

## API Documentation

For detailed API documentation and usage guidelines, see:

- [API_OVERVIEW.md](./API_OVERVIEW.md) - Comprehensive overview of all API categories
- [KaiOS Developer Portal](https://developer.kaiostech.com/)
- [KaiOS.dev Blog](https://kaios.dev)
- [BananaHackers](https://sites.google.com/view/bananahackers/home)

## License

[Apache License 2.0](https://github.com/Tombarr/kaios-types/blob/main/LICENSE)

## Contributing

Contributions are welcome! Please feel free to submit [issues](https://github.com/Tombarr/kaios-types/issues) or [pull requests](https://github.com/Tombarr/kaios-types/pulls).
