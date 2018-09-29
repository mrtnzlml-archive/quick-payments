// @flow

// const Scenes = {
//   dashboard: require('./scenes/dashboard').default,
//   onboarding: require('./scenes/onboarding').default,
//   payment: {
//     amount: require('./scenes/payment/amount').default,
//     codeScan: require('./scenes/payment/codeScan').default,
//     result: require('./scenes/payment/result').default,
//   },
// };

export {default as CardsScene} from './cards/index';

export {default as DashboardScene} from './dashboard/index';

export {default as OnboardingScene} from './onboarding/index';

export {default as CodeScanScene} from './payment/codeScan/index';
export {default as PaymentResultScreen} from './payment/result/index';
