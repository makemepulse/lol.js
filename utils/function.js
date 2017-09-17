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

module.exports = {
  scope: scope
}