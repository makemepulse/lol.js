/**
 * Scope a function inside another one. Prevent binding.
 *
 * @param {Object} obj
 * @param {Function} fn
 */
function scope( fn, ctx ) {
  return function $scope(){
    return fn.apply(ctx, arguments)
  }
}

/**
 * Bind a list of key methods to the context
 * @param {any} ctx
 * @param {...string} methods
 */
function bind() {
  var methods = Array.prototype.slice.apply(arguments);
  var context = methods.shift();

  methods.forEach(function(str) {
    context[str] = context[str].bind(context);
  });
}

module.exports = {
  scope: scope,
  bind:  bind
}