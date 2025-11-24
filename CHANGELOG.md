# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.1] - 2024-11-24

### Added
- Initial release of KaiOS TypeScript type definitions for version 2.5
- Comprehensive type definitions for all major KaiOS APIs:
  - **Apps**: Application management, activities, push notifications, downloads
  - **Bluetooth**: Complete Bluetooth stack with GATT support (22 files)
  - **Browser**: Browser element embedding and control
  - **Data**: Contacts and DataStore APIs
  - **Media**: Camera, FM Radio, TV tuner
  - **Network**: TCP/UDP sockets, network statistics, connection information
  - **NFC**: NFC operations and secure element access
  - **Settings**: System settings and permission management
  - **System**: Power management, alarms, wake locks, device storage, time
  - **Telephony**: Phone calls, SMS/MMS, mobile connections, SIM card access
  - **WiFi**: WiFi management, WiFi Direct, tethering
- VolumeManager API for audio volume control
- TSDoc documentation with KaiOS-specific annotations:
  - `@permissions` - Required permissions
  - `@preference` - System preferences
  - `@available` - App type restrictions
  - `@navigatorProperty` - Navigator property names
  - `@chromeOnly` - System-only APIs
- Global augmentation for `Navigator` and `Window` interfaces
- ES module support with explicit imports/exports
- Modular structure organized by API category
- NPM package configuration
- Vitest test suite for type validation
- ESLint and Prettier for code quality
- DevContainer support for development
- Comprehensive README with usage examples

### Documentation
- API_OVERVIEW.md - Complete overview of all API categories
- DOCUMENTATION_STANDARDS.md - TSDoc conventions and standards
- REFACTOR_SUMMARY.md - Refactoring history
- CONVERSION_NOTES.md - WebIDL to TypeScript conversion notes
- CLAUDE.md - Development guide for Claude Code
- README.md - Installation and usage instructions

### Development Tools
- TypeScript 5.3+ support
- Vitest for testing
- ESLint with TypeScript support
- Prettier for code formatting
- DevContainer configuration
- npm scripts for validation and testing

[0.1.1]: https://github.com/Tombarr/kaios-types/releases/tag/v0.1.1
