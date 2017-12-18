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
 * @param {string[]} key
 * @param {any} ctx
 */
function bind( key, ctx ) {
  var keys = Array.isArray(key) ? key : [ key ]
  keys.forEach(function(k) {
    ctx[k] = ctx[k].bind(ctx)
  })
}

module.exports = {
  scope: scope,
  bind:  bind
}