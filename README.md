# TODO

- fraud protection (https://stripe.com/docs/connect/best-practices#fraud, https://stripe.com/docs/disputes/prevention#avoiding-fraudulent-payments)
- https://stripe.com/docs/connect/best-practices

# QR Code Specification

QR code should contain only PoS URL unique for every retailer. Behind this PoS link is going to be:

- unique ID of the merchant
- currency of the merchant

# Scenes

## Onboarding

- [ ] create your account (email + password)
- [ ] add debit card

References:

- https://stripe.com/docs/connect/custom-accounts (only for retailers)

## Payment

- [ ] QR code scanner
- [ ] amount to pay
- [ ] confirmation for the retailer

References:

- https://stripe.com/docs/connect/destination-charges
- https://stripe.com/docs/connect/currencies

## Others

- [ ] personal profile (+ become retailer)
- [ ] payment history (all previous payments)
