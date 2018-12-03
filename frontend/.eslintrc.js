const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  extends: ['eslint-config-mrtnzlml'],
  rules: {
    'no-restricted-imports': [
      ERROR,
      {
        paths: [
          {
            name: 'react-native',
            importNames: [
              'Dimensions', // Dimensions
              'Text', // Text
              'TouchableOpacity', // Touchable
              'TouchableNativeFeedback', // Touchable
              'StyleSheet', // StyleSheet
            ],
            message: "Please use '_shared' package instead.",
          },
        ],
      },
    ],
  },
};
