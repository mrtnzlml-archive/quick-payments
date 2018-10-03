Simplest in-person payments

- [Relay README](frontend/npm/relay/README.md)

# Start API server

You will need Elixir to run it:

```
(cd backend ; mix run --no-halt)
```

http://127.0.0.1:4040/graphiql

# Start Webserver

```
(cd frontend/apps/website ; yarn start)
```

And open `file:///...` index.html located in `web` directory. Yes, it's a bit ugly but it's still
 under heavy development. ¯\_(ツ)_/¯ (`quick-payments/frontend/apps/website/index.html`)

# Start iOS simulator

```
(cd frontend ; yarn ios)
```

This should just work (if you have Xcode installed).

# Directory structure

```
.
├── backend
│   ├── apps
├── cloudbuild.yaml
└── frontend
    ├── apps
    ├── flow-typed
    ├── npm
    ├── packages
    ├── schema.graphql
    ├── scripts
```

```
node ./scripts/publish-npm-packages.js
```

---

# TODO

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
- [ ] rejected code scanner permissions
- [ ] amount to pay (after QR code)
- [ ] confirmation (for the retailer) - should retailer get a notification?
- [ ] rejection (for the customer)

References:

- https://stripe.com/docs/connect/destination-charges
- https://stripe.com/docs/connect/currencies

## Dashboard

- [ ] dashboard with payment history

## Others

- [ ] become retailer
- [ ] debit cards overview (safe storage needed)
- [ ] profile of the user + logout

# Building Standalone Apps for Android and iOS

- https://docs.expo.io/versions/latest/guides/building-standalone-apps.html
