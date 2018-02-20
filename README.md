[![CircleCI](https://circleci.com/gh/adeira/mobile-quick-payments/tree/master.svg?style=svg)](https://circleci.com/gh/adeira/mobile-quick-payments/tree/master)

Simplest in-person payments

# TODO

- dockerize API
- fraud protection (https://stripe.com/docs/connect/best-practices#fraud, https://stripe.com/docs/disputes/prevention#avoiding-fraudulent-payments)
- https://stripe.com/docs/connect/best-practices

# QR Code Specification

QR code should contain only unique ID for every retailer. Behind this merchant UID:

- currency of the merchant
- other details (TODO)

# Scenes

## Onboarding

- [ ] create your account (email + password)
- [ ] add debit card
- [ ] how does it work (scan QR code, entry amount to pay, show to the retailer, go)

References:

- https://stripe.com/docs/connect/custom-accounts (only for retailers)

## Payment

- [x] QR code scanner
- [ ] amount to pay
- [ ] confirmation (for the retailer) - should retailer get a notification?
- [ ] rejection (for the customer)

References:

- https://stripe.com/docs/connect/destination-charges
- https://stripe.com/docs/connect/currencies

## Others

- [ ] personal profile (+ become retailer)
- [ ] payment history (all previous payments)

# Building Standalone Apps for Android and iOS

- https://docs.expo.io/versions/latest/guides/building-standalone-apps.html
