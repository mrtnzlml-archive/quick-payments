/* eslint-disable prettier/prettier */
// @flow

/**
 * This vocabulary is little bit special because it's considered to be an original.
 * Other translations use this vocabulary as a reference.
 *
 * Special variables:
 *
 * $PRODUCT_NAME - name of the product
 */
const Translations = {
  // Dashboard
  'Dashboard.Title': 'TODO: payments history',
  'Dashboard.Navigation.MyCard': 'MY CARDS',
  'Dashboard.Navigation.BecomeRetailer': 'BECOME RETAILER',

  // Payment
  'Payment.Title': 'How much?',

  // BarcodeScanner
  'BarcodeScanner.ScanCode': 'Scan QR code',
  'BarcodeScanner.RequestingCameraPermission': 'Requesting for camera permission',
  'BarcodeScanner.NoCameraPermission': 'No access to camera',

  // Onboarding
  'Onboarding.Title': '$PRODUCT_NAME',
  'Onboarding.Subtitle': 'Simplest in-person payments',
  'Onboarding.Email': 'What is your email address?',
  'Onboarding.Email.Submit': 'Login',

  // General
  'General.Cancel': 'Cancel',
  'General.TODO': '***TODO***',
  'General.Form.Validation.Email': 'Please insert valid email address.',
};

export type TranslationKeys = $Keys<typeof Translations>;
export type TranslationKeysObject = { [TranslationKeys]: string }
export default (Translations: TranslationKeysObject);
