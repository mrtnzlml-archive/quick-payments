/* eslint-disable prettier/prettier */
// @flow

/**
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
};

export type TranslationKeys = $Keys<typeof Translations>;
export default (Translations: { [TranslationKeys]: string });
