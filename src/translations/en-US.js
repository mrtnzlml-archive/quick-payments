// @flow

const Translations = {
  'Homepage.Title': 'Scan QR code to pay',
  'Payment.Title': 'How much?',
  'BarcodeScanner.RequestingCameraPermission':
    'Requesting for camera permission',
  'BarcodeScanner.NoCameraPermission': 'No access to camera',
};

export type TranslationKeys = $Keys<typeof Translations>;
export default (Translations: { [TranslationKeys]: string });
