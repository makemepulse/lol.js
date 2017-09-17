'use strict'

function $enumerable(obj, property, value) {
  return Object.defineProperty(obj, property, {
    enumerable: value
  })
}

function $configurable(obj, property, value) {
  return Object.defineProperty(obj, property, {
    configurable: value
  })
}

function $writable(obj, property, value) {
  return Object.defineProperty(obj, property, {
    writable: value
  })
}

function $setter(obj, property, setter) {
  return Object.defineProperty(obj, property, {
    set: setter
  })
}

function $getter(obj, property, getter) {
  return Object.defineProperty(obj, property, {
    get: getter
  })
}

function $define(obj, property, descriptor) {
  return Object.defineProperty(obj, property, descriptor)
}

function $readOnly(obj, property) {
  return Object.defineProperty(obj, property, {
    writable: false,
    configurable: false
  })
}

function $private(obj, property) {
  let descriptor = Object.getOwnPropertyDescriptor(obj, property)

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

  const getter = descriptor.get
  const setter = descriptor.set

  let value = descriptor.default

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

  function assertCalledBy(caller, f) {
    if (f.caller === caller) return true;
    throw new Error('Unauthorized access to the private \'' + property + '\' property');
  }

  return Object.defineProperty(obj, property, descriptor)
}

module.exports = {
  $readOnly:     $readOnly,
  $private:      $private,

  $define:       $define,

  $enumerable:   $enumerable,
  $configurable: $configurable,
  $writable:     $writable,
  $setter:       $setter,
  $getter:       $getter
}