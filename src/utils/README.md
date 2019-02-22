# `clamp`

```js
clamp(5, 10, 15); // 10
clamp(12, 10, 15); // 12
clamp(17, 10, 15); // 15
```

# `debounce`

```js
elem.addEventListener('keyup', debounce(this.updatePreview, 250), false);
```

Debounce function is cancelable:

```js
var debouncedUpdatePreview = debounce(this.updatePreview, 250);
elem.addEventListener('keyup', debouncedUpdatePreview, false);

// later, to cancel pending calls
debouncedUpdatePreview.reset();
```

# `getByPath`

```js
var obj = {
  a: {
    b: 123,
  },
};

var result = getByPath(obj, ['a', 'b']); // 123
```

Wildcard `*` is also supported.

# `invariant`, `warning`

```js
invariant(conditionToBeTrue, 'Expected true but got false.');
warning(conditionToBeTrue, 'Expected true but got false.');
```

They both use `sprintf` behind the scenes (only `%s` is supported):

```js
sprintf('Oh, %s', 'yeah!');
```
