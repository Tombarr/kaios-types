/**
 * KaiOS / B2G Type Definitions
 *
 * This file aggregates the type definitions for the proprietary Web APIs found in KaiOS.
 * It extends the standard Web APIs (like Navigator).
 */

import { DOMApplicationsRegistry } from './apps/apps';
import { PermissionSettings } from './settings/permission-settings';
import { SettingsManager } from './settings/settings-manager';
import { SystemUpdateManager } from './system/system-update';
import { SimplePushManager } from './apps/simple-push-manager';
import { Telephony } from './telephony/telephony';
import { MozMobileConnection } from './telephony/moz-mobile-connection';
import { MozMobileMessageManager } from './telephony/moz-mobile-message-manager';
import { MozVoicemail } from './telephony/moz-voicemail';
import { MozCellBroadcast } from './telephony/moz-cell-broadcast';
import { MozIccManager } from './telephony/moz-icc-manager';
import { PhoneNumberService } from './telephony/phone-number-service';
import {
  MozWifiManager,
  MozWifiNetwork,
  NetworkProperties
} from './wifi/moz-wifi-manager';
import { MozWifiP2pManager } from './wifi/moz-wifi-p2p-manager';
import { MozTetheringManager } from './wifi/moz-tethering-manager';
import { MozNetworkStatsManager } from './network/moz-network-stats-manager';
import { NetworkInformation } from './network/network-information';
import { BluetoothManager } from './bluetooth/bluetooth-manager';
import { MozPowerManager } from './system/moz-power-manager';
import { MozWakeLock } from './system/moz-wake-lock';
import { MozTimeManager } from './system/moz-time-manager';
import { FMRadio } from './media/fm-radio';
import { CameraManager } from './media/camera-manager';
import {
  AudioChannelManager,
  AudioChannelType
} from './media/audio-channel-manager';
import { AlarmsManager } from './system/alarms-manager';
import { EngineeringMode } from './system/engineering-mode';
import { InputPortManager } from './system/input-port-manager';
import { DataStore } from './data/datastore';
import { ContactManager, mozContact, ContactProperties } from './data/contacts';
import { DOMDownloadManager } from './apps/downloads';
import { DeviceStorage } from './system/device-storage';
import { BrowserElementProxy } from './browser/browser-element-proxy';
import { MozNFC } from './nfc/moz-nfc';
import { TVManager } from './media/tv-manager';
import { MozActivity, ActivityOptions } from './apps/moz-activity';
import {
  MozInterAppConnection,
  MozInterAppMessagePort,
  MozInterAppConnectionRequest,
  MozInterAppMessageEvent,
  MozInterAppMessageEventInit
} from './apps/inter-app';
import {
  MozApplicationEvent,
  MozApplicationEventInit
} from './apps/moz-application-event';
import {
  MozSettingsEvent,
  MozSettingsEventInit
} from './settings/moz-settings-event';
import {
  MozSettingsTransactionEvent,
  MozSettingsTransactionEventInit
} from './settings/moz-settings-transaction-event';
import { MozSmsEvent, MozSmsEventInit } from './telephony/moz-sms-event';
import { MozMmsEvent, MozMmsEventInit } from './telephony/moz-mms-event';
import { TCPSocket, SocketOptions } from './network/tcp-socket';
import { UDPSocket, UDPOptions } from './network/udp-socket';
import {
  BluetoothAdapterEvent,
  BluetoothAdapterEventInit
} from './bluetooth/bluetooth-adapter-event';
import {
  BluetoothDeviceEvent,
  BluetoothDeviceEventInit
} from './bluetooth/bluetooth-device-event';
import {
  BluetoothAttributeEvent,
  BluetoothAttributeEventInit
} from './bluetooth/bluetooth-attribute-event';
import {
  BluetoothPairingEvent,
  BluetoothPairingEventInit
} from './bluetooth/bluetooth-pairing-event';
import {
  BluetoothStatusChangedEvent,
  BluetoothStatusChangedEventInit
} from './bluetooth/bluetooth-status-changed-event';
import {
  BluetoothGattAttributeEvent,
  BluetoothGattAttributeEventInit
} from './bluetooth/bluetooth-gatt-attribute-event';
import {
  BluetoothGattCharacteristicEvent,
  BluetoothGattCharacteristicEventInit
} from './bluetooth/bluetooth-gatt-characteristic-event';
import {
  BluetoothGattService,
  BluetoothGattServiceInit
} from './bluetooth/bluetooth-gatt-service';
import {
  BluetoothLeDeviceEvent,
  BluetoothLeDeviceEventInit
} from './bluetooth/bluetooth-le-device-event';
import { MozSpeakerManager } from './system/moz-speaker-manager';
import { VolumeManager } from './system/volume-manager';
import { BatteryManager } from './system/battery-manager';
import {
  SystemMessageType,
  SystemMessageHandler
} from './system/system-messages';
import { LargeTextEnabledChangedEvent } from './system/large-text';
import { MozInterruptBegin, MozInterruptEnd } from './media/moz-interupt';
import { SEManager } from './nfc/secure-element';
import {
  CameraDetectedFace,
  CameraDetectedFaceInit
} from './media/camera-control';
import { ArchiveReader, ArchiveReaderOptions } from './apps/archive-reader';
import { ActivityRequestHandler } from './apps/activity-request-handler';

export * from './apps/activity-request-handler';
export * from './apps/apps';
export * from './apps/archive-reader';
export * from './apps/downloads';
export * from './apps/inter-app';
export * from './apps/moz-activity';
export * from './apps/moz-application-event';
export * from './apps/simple-push-manager';
export * from './bluetooth/bluetooth-adapter-event';
export * from './bluetooth/bluetooth-adapter';
export * from './bluetooth/bluetooth-attribute-event';
export * from './bluetooth/bluetooth-class-of-device';
export * from './bluetooth/bluetooth-device-event';
export * from './bluetooth/bluetooth-device';
export * from './bluetooth/bluetooth-discovery-handle';
export * from './bluetooth/bluetooth-gatt-attribute-event';
export * from './bluetooth/bluetooth-gatt-characteristic-event';
export * from './bluetooth/bluetooth-gatt-characteristic';
export * from './bluetooth/bluetooth-gatt-descriptor';
export * from './bluetooth/bluetooth-gatt-server';
export * from './bluetooth/bluetooth-gatt-service';
export * from './bluetooth/bluetooth-gatt';
export * from './bluetooth/bluetooth-le-device-event';
export * from './bluetooth/bluetooth-manager';
export * from './bluetooth/bluetooth-pairing-event';
export * from './bluetooth/bluetooth-pairing-handle';
export * from './bluetooth/bluetooth-pairing-listener';
export * from './bluetooth/bluetooth-status-changed-event';
export * from './browser/browser-element-proxy';
export * from './browser/browser-element';
export * from './data/contacts';
export * from './data/datastore';
export * from './media/camera-control';
export * from './media/camera-manager';
export * from './media/audio-channel-manager';
export * from './media/fm-radio';
export * from './media/tv-channel';
export * from './media/tv-manager';
export * from './media/tv-program';
export * from './network/moz-network-stats-manager';
export * from './network/network-information';
export * from './network/tcp-socket';
export * from './network/udp-socket';
export * from './nfc/moz-nfc-peer';
export * from './nfc/moz-nfc-tag';
export * from './nfc/moz-nfc';
export * from './nfc/secure-element';
export * from './settings/moz-settings-event';
export * from './settings/moz-settings-transaction-event';
export * from './settings/permission-settings';
export * from './settings/settings-manager';
export * from './system/alarms-manager';
export * from './system/device-storage';
export * from './system/engineering-mode';
export * from './system/input-port-manager';
export * from './system/input-port';
export * from './system/moz-power-manager';
export * from './system/moz-speaker-manager';
export * from './system/moz-time-manager';
export * from './system/moz-wake-lock';
export * from './system/system-update';
export * from './system/volume-manager';
export * from './system/battery-manager';
export * from './system/system-messages';
export * from './system/large-text';
export * from './telephony/moz-cell-broadcast';
export * from './telephony/moz-icc-manager';
export * from './telephony/moz-mms-event';
export * from './telephony/moz-mobile-connection-info';
export * from './telephony/moz-mobile-connection';
export * from './telephony/moz-mobile-message-manager';
export * from './telephony/moz-sms-event';
export * from './telephony/moz-voicemail';
export * from './telephony/phone-number-service';
export * from './telephony/telephony-call-group';
export * from './telephony/telephony-call';
export * from './telephony/telephony';
export * from './wifi/moz-tethering-manager';
export * from './wifi/moz-wifi-manager';
export * from './wifi/moz-wifi-p2p-manager';
export * from './common';

declare global {
  interface Navigator {
    /**
     * @permissions webapps-manage, homescreen-webapps-manage
     */
    readonly mozApps: DOMApplicationsRegistry;

    /**
     * @permissions permissions
     * @preference dom.mozPermissionSettings.enabled
     */
    readonly mozPermissionSettings: PermissionSettings;

    /**
     * @permissions settings-api-read, settings-api-write
     * @preference dom.mozSettings.enabled
     */
    readonly mozSettings: SettingsManager;

    /**
     * @permissions system-update
     * @preference dom.system_update.enabled
     */
    readonly updateManager: SystemUpdateManager;

    /**
     * @permissions push
     * @preference services.push.enabled
     */
    readonly push: SimplePushManager;

    /**
     * @preference dom.telephony.enabled
     */
    readonly mozTelephony: Telephony;

    /**
     * @preference dom.mobileconnection.enabled
     * @permissions mobileconnection, mobilenetwork
     */
    readonly mozMobileConnections: MozMobileConnection[];

    /**
     * @preference dom.sms.enabled
     * @permissions sms
     */
    readonly mozMobileMessage: MozMobileMessageManager;

    /**
     * @preference dom.voicemail.enabled
     * @permissions voicemail
     */
    readonly mozVoicemail: MozVoicemail;

    /**
     * @preference dom.cellbroadcast.enabled
     * @permissions cellbroadcast
     */
    readonly mozCellBroadcast: MozCellBroadcast;

    /**
     * @preference dom.icc.enabled
     * @permissions mobileconnection
     */
    readonly mozIccManager: MozIccManager;

    /**
     * @permissions phonenumberservice
     */
    readonly mozPhoneNumberService: PhoneNumberService;

    /**
     * @preference dom.wifi.enabled
     */
    readonly mozWifiManager: MozWifiManager;

    /**
     * @preference dom.wifi.p2p.enabled
     */
    readonly mozWifiP2pManager: MozWifiP2pManager;

    /**
     * @permissions tethering
     */
    readonly mozTetheringManager: MozTetheringManager;

    /**
     * @preference dom.mozNetworkStats.enabled
     * @permissions networkstats-manage
     */
    readonly mozNetworkStats: MozNetworkStatsManager;

    /**
     * @preference dom.netinfo.enabled
     */
    readonly connection: NetworkInformation;

    /**
     * @permissions bluetooth
     */
    readonly mozBluetooth: BluetoothManager;

    /**
     * @permissions power
     */
    readonly mozPower: MozPowerManager;

    /**
     * @preference dom.wakelock.enabled
     */
    requestWakeLock(aTopic: string): MozWakeLock;

    readonly mozTime: MozTimeManager;

    readonly mozFMRadio: FMRadio;

    readonly mozCameras: CameraManager;

    /**
     * @navigatorProperty mozAudioChannelManager
     * @permissions audio-channel-telephony, audio-channel-ringer, audio-channel-alarm, audio-channel-notification, audio-channel-content
     */
    readonly mozAudioChannelManager: AudioChannelManager;

    /**
     * @navigatorProperty mozAlarms
     * @permissions alarms
     * @preference dom.mozAlarms.enabled
     */
    readonly mozAlarms: AlarmsManager;

    /**
     * @navigatorProperty engineeringMode
     * @available CertifiedApps
     * @permissions engineering-mode
     */
    readonly engineeringMode: EngineeringMode;

    /**
     * @preference dom.inputport.enabled
     * @permissions inputport
     * @available CertifiedApps
     */
    readonly inputPortManager: InputPortManager;

    /**
     * VolumeManager interface provides methods to control device audio volume.
     * Allows requesting volume up/down and displaying the volume UI.
     *
     * @navigatorProperty volumeManager
     */
    readonly volumeManager: VolumeManager;

    /**
     * Returns a Promise that resolves with a BatteryManager object providing
     * information about the system's battery charge level and charging state.
     *
     * @returns A Promise that resolves to a BatteryManager
     * @example
     * ```typescript
     * navigator.getBattery().then((battery) => {
     *   console.log(`Battery level: ${battery.level * 100}%`);
     * });
     * ```
     */
    getBattery(): Promise<BatteryManager>;

    /**
     * Registers a handler function to receive system messages of a specific type.
     * System messages are queued if no handler is registered.
     *
     * @param type - The system message type to handle
     * @param handler - Function invoked when a message is received, or null to unregister
     * @example
     * ```typescript
     * navigator.mozSetMessageHandler('alarm', (message) => {
     *   console.log('Alarm received:', message);
     * });
     * ```
     */
    mozSetMessageHandler(
      type: SystemMessageType,
      handler: SystemMessageHandler | null
    ): void;

    /**
     * Checks if there are pending system messages of a given type.
     *
     * @param type - The system message type to check
     * @returns true if pending messages exist, false otherwise
     * @example
     * ```typescript
     * if (navigator.mozHasPendingMessage('sms-received')) {
     *   console.log('There are pending SMS messages');
     * }
     * ```
     */
    mozHasPendingMessage(type: SystemMessageType): boolean;

    /**
     * Indicates the user's text size preference for accessibility.
     * Returns true for large text, false for normal text.
     *
     * @available CertifiedApps
     * @example
     * ```typescript
     * if (navigator.largeTextEnabled) {
     *   document.body.classList.add('large-text');
     * }
     * ```
     */
    readonly largeTextEnabled: boolean;

    /**
     * Secure Element Manager for accessing SE readers on the device.
     *
     * @preference dom.secureelement.enabled
     * @permissions secureelement-manage
     * @available CertifiedApps
     */
    readonly seManager: SEManager;

    getDataStores(name: string, owner?: string): Promise<DataStore[]>;

    /**
     * @navigatorProperty mozContacts
     * @permissions contacts-read contacts-write contacts-create
     */
    readonly mozContacts: ContactManager;

    /**
     * @navigatorProperty mozDownloadManager
     * @permissions downloads
     * @preference dom.mozDownloads.enabled
     */
    readonly mozDownloadManager: DOMDownloadManager;

    /**
     * @preference device.storage.enabled
     */
    getDeviceStorage(type: string): DeviceStorage;
    getDeviceStorages(type: string): DeviceStorage[];

    /**
     * @navigatorProperty mozBrowserElementProxy
     * @preference dom.mozBrowserFramesEnabled
     * @permissions browser:embedded-system-app
     */
    readonly mozBrowserElementProxy: BrowserElementProxy;

    /**
     * @navigatorProperty mozNfc
     * @permissions nfc, nfc-share
     * @available PrivilegedApps
     */
    readonly mozNfc: MozNFC;

    /**
     * @preference dom.tv.enabled
     * @permissions tv
     * @available CertifiedApps
     */
    readonly tv: TVManager;
  }

  interface Window {
    /**
     * @preference dom.sysmsg.enabled
     */
    MozActivity: {
      new (options?: ActivityOptions): MozActivity;
    };

    MozInterAppConnection: {
      new (
        keyword: string,
        publisher: string,
        subscriber: string
      ): MozInterAppConnection;
    };

    MozInterAppConnectionRequest: {
      new (
        keyword: string,
        port: MozInterAppMessagePort,
        from: string
      ): MozInterAppConnectionRequest;
    };

    MozInterAppMessagePort: {
      new (messagePortID: string): MozInterAppMessagePort;
    };

    MozInterAppMessageEvent: {
      new (
        type: string,
        eventInitDict?: MozInterAppMessageEventInit
      ): MozInterAppMessageEvent;
    };

    /**
     * @chromeOnly
     */
    MozApplicationEvent: {
      new (
        type: string,
        eventInitDict?: MozApplicationEventInit
      ): MozApplicationEvent;
    };

    /**
     * @permissions settings-api-read, settings-api-write
     */
    MozSettingsEvent: {
      new (
        type: string,
        eventInitDict?: MozSettingsEventInit
      ): MozSettingsEvent;
    };

    /**
     * @permissions settings-api-read, settings-api-write
     */
    MozSettingsTransactionEvent: {
      new (
        type: string,
        eventInitDict?: MozSettingsTransactionEventInit
      ): MozSettingsTransactionEvent;
    };

    MozSmsEvent: {
      new (type: string, eventInitDict?: MozSmsEventInit): MozSmsEvent;
    };

    MozMmsEvent: {
      new (type: string, eventInitDict?: MozMmsEventInit): MozMmsEvent;
    };

    MozWifiNetwork: {
      new (properties?: NetworkProperties): MozWifiNetwork;
    };

    TCPSocket: {
      new (host: string, port: number, options?: SocketOptions): TCPSocket;
    };

    UDPSocket: {
      new (options?: UDPOptions): UDPSocket;
    };

    BluetoothAdapterEvent: {
      new (
        type: string,
        eventInitDict?: BluetoothAdapterEventInit
      ): BluetoothAdapterEvent;
    };

    BluetoothDeviceEvent: {
      new (
        type: string,
        eventInitDict?: BluetoothDeviceEventInit
      ): BluetoothDeviceEvent;
    };

    BluetoothAttributeEvent: {
      new (
        type: string,
        eventInitDict?: BluetoothAttributeEventInit
      ): BluetoothAttributeEvent;
    };

    BluetoothPairingEvent: {
      new (
        type: string,
        eventInitDict?: BluetoothPairingEventInit
      ): BluetoothPairingEvent;
    };

    BluetoothStatusChangedEvent: {
      new (
        type: string,
        eventInitDict?: BluetoothStatusChangedEventInit
      ): BluetoothStatusChangedEvent;
    };

    BluetoothGattAttributeEvent: {
      new (
        type: string,
        eventInitDict?: BluetoothGattAttributeEventInit
      ): BluetoothGattAttributeEvent;
    };

    BluetoothGattCharacteristicEvent: {
      new (
        type: string,
        eventInitDict?: BluetoothGattCharacteristicEventInit
      ): BluetoothGattCharacteristicEvent;
    };

    BluetoothGattService: {
      new (init: BluetoothGattServiceInit): BluetoothGattService;
    };

    BluetoothLeDeviceEvent: {
      new (
        type: string,
        eventInitDict?: BluetoothLeDeviceEventInit
      ): BluetoothLeDeviceEvent;
    };

    MozSpeakerManager: {
      new (): MozSpeakerManager;
    };

    CameraDetectedFace: {
      new (initDict?: CameraDetectedFaceInit): CameraDetectedFace;
    };

    mozContact: {
      new (properties?: ContactProperties): mozContact;
      prototype: mozContact;
    };

    ArchiveReader: {
      new (blob: Blob, options?: ArchiveReaderOptions): ArchiveReader;
      prototype: ArchiveReader;
    };

    BrowserElementProxy: {
      new (): BrowserElementProxy;
    };

    /**
     * @chromeOnly
     */
    ActivityRequestHandler: {
      new (
        id: string,
        options?: ActivityOptions,
        returnvalue?: boolean
      ): ActivityRequestHandler;
    };
  }

  /**
   * Event map for Window interface with KaiOS-specific events.
   */
  interface WindowEventMap {
    /**
     * Event fired when user changes Device/Accessibility/Large Text setting.
     * @available CertifiedApps
     */
    largetextenabledchanged: LargeTextEnabledChangedEvent;
    /**
     * Called when the media element is interrupted
     * because of the audiochannel manager.
     */
    mozinteruptbegin: MozInterruptBegin;
    /**
     * Called when the interruption is concluded.
     */
    mozinteruptend: MozInterruptEnd;
  }

  interface HTMLMediaElement {
    /**
     * @chromeOnly
     */
    readonly mozMediaSourceObject: MediaSource | null;

    /**
     * @chromeOnly
     */
    readonly mozDebugReaderData: string;

    /**
     * @preference media.test.dumpDebugInfo
     */
    mozDumpDebugInfo(): void;

    srcObject: MediaStream | null;

    /**
     * @deprecated Use srcObject instead.
     */
    mozSrcObject: MediaStream | null;

    mozPreservesPitch: boolean;

    readonly mozAutoplayEnabled: boolean;

    /**
     * NB: for internal use with the video controls
     */
    mozMediaStatisticsShowing: boolean;

    /**
     * NB: for internal use with the video controls
     */
    mozAllowCasting: boolean;

    /**
     * NB: for internal use with the video controls
     */
    mozIsCasting: boolean;

    /**
     * Stream capture
     * @throws
     * @remarks UnsafeInPrerendering
     */
    mozCaptureStream(): MediaStream;

    /**
     * Stream capture
     * @throws
     * @remarks UnsafeInPrerendering
     */
    mozCaptureStreamUntilEnded(): MediaStream;

    readonly mozAudioCaptured: boolean;

    /**
     * Return embedded metadata from the stream as a
     * JSObject with key:value pairs for each tag. This can be used by
     * player interfaces to display the song title, artist, etc.
     * @throws
     */
    mozGetMetadata(): any;

    /**
     * Provides access to the fragment end time if
     * the media element has a fragment URI for the currentSrc, otherwise
     * it is equal to the media duration.
     */
    readonly mozFragmentEnd: number;

    /**
     * An audio channel type for media elements.
     *
     * @permissions audio-channel-telephony, audio-channel-ringer, audio-channel-alarm, audio-channel-notification, audio-channel-content
     * @preference media.useAudioChannelAPI
     * @throws
     */
    mozAudioChannelType: AudioChannelType;

    /**
     * Called when the media element is interrupted because of the audiochannel manager.
     * @preference media.useAudioChannelAPI
     */
    onmozinterruptbegin: ((this: HTMLMediaElement, ev: Event) => any) | null;

    /**
     * Called when the interruption is concluded.
     * @preference media.useAudioChannelAPI
     */
    onmozinterruptend: ((this: HTMLMediaElement, ev: Event) => any) | null;
  }

  // Mozilla extensions
  interface AudioContext {
    /*
     * Read AudioChannel.webidl for more information about this attribute.
     */
    readonly mozAudioChannelType: AudioChannelType;

    /*
     * These 2 events are dispatched when the `AudioContext` object is muted by
     * the AudioChannelService. It's call `interrupt` because when this event is
     * dispatched on a `HTMLMediaElement`, the audio stream is paused.
     */
    onmozinterruptbegin: WindowEventHandlers;
    onmozinterruptend: WindowEventHandlers;
  }
}
