function _merge(obj0: any, obj1: any) {
  for (var key in obj1) {

    // Duplicate array and concat
    if (Array.isArray(obj1[key])) {
      obj0[key] = Array.isArray(obj0[key]) ? obj0[key] : []
      obj0[key] = (obj0[key] as any[]).concat(obj1[key].slice(0))
    }

    // Merge object
    else if (typeof obj1[key] === 'object' && obj1[key] !== null) {
      if (typeof obj0[key] === 'object' && obj0[key] !== null) {
        obj0[key] = merge(obj0[key], obj1[key])
      } else {
        obj0[key] = obj1[key]
      }
    }

    // Number / String / Boolean
    else {
      obj0[key] = obj1[key]
    }

  }

  return obj0
}

/**
 * Merge objects
 */
export function merge(obj: any, ...objs: any[]) {
  var i   = 0
  var len = objs.length

  for (i = 0; i < len; i++) {
    obj = _merge(obj, objs[i])
  }

  return obj
}

/**
 * Create an object with only property keys
 */
export function expose(obj: any, ...keys: string[]) {
  var xprt: any = {}

  for (var i = 0, ilen = keys.length; i < ilen; i++) {
    if (keys[i] && obj.hasOwnProperty(keys[i])) {
      xprt[keys[i]] = obj[keys[i]]
    }
  }

  return xprt
}

/**
 * Create a new object without listed property keys
 */
export function omit(obj: any, ...keys: string[]) {
  var xprt: any = {}

  for (var key in obj) {
    if (keys.indexOf(key) == -1) {
      xprt[key] = obj[key]
    }
  }

  return xprt

}

/**
 * Flatten object to one level
 */
export function flat(obj: any) {
  var xprt: any = {}

  for (var key in obj) {
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      var children = flat(obj[key])
      for (var k in children) {
        xprt[key + '.' + k] = children[k]
      }
    } else {
      xprt[key] = obj[key]
    }
  }

  return xprt
}

/**
 * Transform a flatten object to a deflatten object
 */
export function deflat(obj: any) {
  var xprt: any = {}

  var i: number,
   ilen: number,
   keys: string[]

  for (var key in obj) {
    keys = key.split('.')

    for (i = 0, ilen = keys.length; i < ilen; i++) {
      xprt[keys[i]] = xprt[keys[i]] || {}
    }

    xprt[keys[ilen-1]] = obj[key]
  }

  return xprt
}

/**
 * Freeze object
 */
export function immutable(obj: any) {
  var propNames = Object.getOwnPropertyNames(obj)

  propNames.forEach(function(name) {
    var prop = obj[name]

    if (typeof prop == 'object' && prop !== null) {
      immutable(prop)
    }
  })

  return Object.isFrozen(obj) ? obj : Object.freeze(obj)
}

export function clone(obj: any) {
 var cloneObj: any = {}

 for (var key in obj) {

   // Clone ray
   if (Array.isArray(obj[key])) {
     cloneObj[key] = obj[key].slice(0)
   }

   // Clone object
   else if (typeof obj[key] === 'object' && obj[key] !== null) {
     cloneObj[key] = clone(obj[key])
   }

   // Copy Number / String / Boolean
   else {
     cloneObj[key] = obj[key]
   }

 }

 return cloneObj
}