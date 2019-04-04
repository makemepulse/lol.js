export function $enumerable(obj: any, property: string, value: boolean) {
  return Object.defineProperty(obj, property, {
    enumerable: value
  })
}

export function $configurable(obj: any, property: string, value: boolean) {
  return Object.defineProperty(obj, property, {
    configurable: value
  })
}

export function $writable(obj: any, property: string, value: boolean) {
  return Object.defineProperty(obj, property, {
    writable: value
  })
}

export function $setter(obj: any, property: string, setter: (v: any) => void) {
  return Object.defineProperty(obj, property, {
    set: setter
  })
}

export function $getter(obj: any, property: string, getter: () => any) {
  return Object.defineProperty(obj, property, {
    get: getter
  })
}

export function $define(obj: any, property: string, descriptor: PropertyDescriptor & ThisType<any>) {
  return Object.defineProperty(obj, property, descriptor)
}

export function $readOnly(obj: any, property: string) {
  return Object.defineProperty(obj, property, {
    writable: false,
    configurable: false
  })
}

export function $private(obj: any, property: string) {
  var descriptor = Object.getOwnPropertyDescriptor(obj, property)

  if (!descriptor && obj.hasOwnProperty(property)) {
    descriptor = {
      get: function() {
        return obj[property]
      },
      set: function(newValue) {
        obj[property] = newValue
      }
    }
  }

  if (!descriptor) return

  var getter = descriptor.get
  var setter = descriptor.set

  var value = obj[property]//descriptor.default

  if (getter) descriptor.get = function $get() {
    if (assertCalledBy(getter, $get)) {
      return value
    }
  }

  if (setter) descriptor.set = function $set(newValue) {
    if (assertCalledBy(setter, $set)) {
      value = newValue
    }
  }

  function assertCalledBy(caller: any, f: any) {
    if (f.caller === caller) return true;
    throw new Error('Unauthorized access to the private \'' + property + '\' property');
  }

  return Object.defineProperty(obj, property, descriptor)
}
