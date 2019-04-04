/**
 * Scope a function inside another one. Prevent from binding.
 */
export function scope( fn: Function, context: any = null ) {
  return function $scope(...args: any[]) {
    return fn.apply(context, args)
  }
}

/**
 * Bind a list methods to the context
 */
export function bind(context: any, ...methods: string[]) {
  methods.forEach(function(str: string) {
    context[str] = context[str].bind(context)
  })
}