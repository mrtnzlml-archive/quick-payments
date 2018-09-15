// @flow

/**
 * Invokes the given callback after a specified number of milliseconds have
 * elapsed, ignoring subsequent calls.
 *
 * For example, if you wanted to update a preview after the user stops typing
 * you could do the following:
 *
 *   elem.addEventListener('keyup', debounce(this.updatePreview, 250), false);
 *
 * The returned function has a reset method which can be called to cancel a
 * pending invocation.
 *
 *   var debouncedUpdatePreview = debounce(this.updatePreview, 250);
 *   elem.addEventListener('keyup', debouncedUpdatePreview, false);
 *
 *   // later, to cancel pending calls
 *   debouncedUpdatePreview.reset();
 */
export default function debounce(func: Function, wait: number) {
  let timeout;

  function debouncer(...args: $ReadOnlyArray<mixed>) {
    debouncer.reset();

    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  }

  debouncer.reset = function() {
    clearTimeout(timeout);
  };

  return debouncer;
}
