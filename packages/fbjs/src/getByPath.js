// @flow

/**
 * Get a value from an object based on the given path
 *
 * Usage example:
 *
 *   var obj = {
 *     a : {
 *       b : 123
 *     }
 *   };
 *
 *   var result = getByPath(obj, ['a', 'b']); // 123
 *
 * If the path doesn't exist undefined will be returned:
 *
 *   var result = getByPath(obj, ['x', 'y', 'z']); // undefined
 */
export default function getByPath(
  root: Object | $ReadOnlyArray<any>,
  path: $ReadOnlyArray<string | number>,
  fallbackValue?: any
): any {
  let current = root;
  for (let i = 0; i < path.length; i++) {
    const segment = path[i];
    // $FlowExpectedError: segment could be a string which is not allowed as a key of array (but I am OK with that here)
    if (current && current[segment] !== undefined) {
      current = current[segment];
    } else {
      return fallbackValue;
    }
  }
  return current;
}

// TODO: helper "isGraphQLError"
//
// {
//   "errors": [
//     {
//       "message": "My lovely error message for developers to fix it...",
//       "locations": [{ "line": 4, "column": 5 }],
//       "path": [
//         "currency",
//         "format"
//       ]
//     }
//   ],
//   "data": {
//     "currency": {
//       "code": "usd",
//       "format": null    // error? value?
//     }
//   }
// }
