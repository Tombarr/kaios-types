/**
 * System Messages API
 *
 * Allows applications to register handlers for system-level events and messages.
 * System messages enable apps to respond to events even when not running.
 *
 * @see https://developer.kaiostech.com/docs/api/web-apis/mozsetmessagehandler/mozsetmessagehandler
 * @see https://developer.kaiostech.com/docs/api/web-apis/mozhaspendingmessage/mozhaspendingmessage
 */

/**
 * Valid system message types that can be registered with mozSetMessageHandler.
 * Each message type may require specific permissions as noted below.
 *
 * Message types and their required permissions:
 * - activity: (no permission required)
 * - alarm: alarms
 * - bluetooth-*: bluetooth
 * - cellbroadcast-received: cellbroadcast
 * - connection: (no permission required)
 * - captive-portal: wifi-manage
 * - headset-button: (no permission required)
 * - icc-stkcommand: settings (read, write)
 * - media-button: (no permission required)
 * - networkstats-alarm: networkstats-manage
 * - notification: desktop-notification
 * - push: push
 * - push-register: push
 * - request-sync: (no permission required)
 * - sms-*: sms
 * - telephony-*: telephony
 * - ussd-received: mobileconnection
 * - wappush-received: wappush
 * - cdma-info-rec-received: mobileconnection
 * - nfc-hci-event-transaction: nfc-hci-events
 * - nfc-manager-*: nfc-manager
 * - wifip2p-pairing-request: wifi-manage
 * - first-run-with-sim: settings (read, write)
 * - audiochannel-interruption-*: (no permission required)
 * - datastore-update-{storename}: (datastore access permission)
 */
export type SystemMessageType =
  | 'activity'
  | 'alarm'
  | 'bluetooth-dialer-command'
  | 'bluetooth-cancel'
  | 'bluetooth-hid-status-changed'
  | 'bluetooth-pairing-request'
  | 'bluetooth-opp-transfer-complete'
  | 'bluetooth-opp-update-progress'
  | 'bluetooth-opp-receiving-file-confirmation'
  | 'bluetooth-opp-transfer-start'
  | 'cellbroadcast-received'
  | 'connection'
  | 'captive-portal'
  | 'headset-button'
  | 'icc-stkcommand'
  | 'media-button'
  | 'networkstats-alarm'
  | 'notification'
  | 'push'
  | 'push-register'
  | 'request-sync'
  | 'sms-delivery-success'
  | 'sms-delivery-error'
  | 'sms-read-success'
  | 'sms-received'
  | 'sms-sent'
  | 'sms-failed'
  | 'telephony-new-call'
  | 'telephony-call-ended'
  | 'ussd-received'
  | 'wappush-received'
  | 'cdma-info-rec-received'
  | 'nfc-hci-event-transaction'
  | 'nfc-manager-tech-discovered'
  | 'nfc-manager-tech-lost'
  | 'nfc-manager-send-file'
  | 'wifip2p-pairing-request'
  | 'first-run-with-sim'
  | 'audiochannel-interruption-begin'
  | 'audiochannel-interruption-ended'
  | string; // Allow string to support datastore-update-{storename} pattern

/**
 * Generic system message handler function.
 * The actual message parameter type varies depending on the message type.
 */
export type SystemMessageHandler = (message: any) => void;
