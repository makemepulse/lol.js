/**
 * Scope a function inside another one. Prevent binding.
 *
 * @param {Object} obj
 * @param {Function} fn
 */
function scope( obj, fn ) {
  return function $scope(){
    return fn.apply(obj, arguments)
  }
}

module.exports = {
  scope: scope
}