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
  'BarcodeScanner.NoCameraPermission': 'No access to camera',
  'BarcodeScanner.RequestingCameraPermission': 'Requesting for camera permission',
  'BarcodeScanner.ScanCode': 'Scan QR code',

  'Dashboard.Title': 'Payments history',
  'Dashboard.Navigation.BecomeRetailer': 'BECOME RETAILER',
  'Dashboard.Navigation.MyCard': 'MY CARDS',

  'General.Cancel': 'Cancel',
  'General.Form.Validation.Email': 'Please insert valid email address.',
  'General.TODO': '***TODO***',

  'Onboarding.Email': 'What is your email address?',
  'Onboarding.Email.Submit': 'Login',
  'Onboarding.Subtitle': 'Simplest in-person payments',
  'Onboarding.Title': '$PRODUCT_NAME',

  'Payment.Title': 'How much?',
  'Payment.Result.GoToDashboard': 'Go to dashboard',
};

export type TranslationKeys = $Keys<typeof Translations>;
export type TranslationKeysObject = {[TranslationKeys]: string};
export default (Translations: TranslationKeysObject);
