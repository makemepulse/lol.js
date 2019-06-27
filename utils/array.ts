import { clone } from "./object";

/**
 * Shuffle an array
 */
export function shuffle<T>(arr: T[]) {
  let length = arr.length
  let tmp: T, rand: number

  while (length != 0)
  {
    rand = Math.floor(Math.random() * length)
    length--
    tmp         = arr[length]
    arr[length] = arr[rand]
    arr[rand]   = tmp
  }

  return arr
}

/**
 * Sort an array
 */
export function sort(arr: any[]) {
  let currIndex = -1
  let tmp: any[] = []
  let tm: any

  for (let i = 0, ilen = arr.length; i < ilen; i++) {

    currIndex = tmp.length
    tmp[currIndex] = arr[i]

    for (let j = 0, jlen = tmp.length; j < jlen; j++) {
      if (tmp[currIndex] < tmp[j]) {
        tm             = tmp[j]
        tmp[j]         = tmp[currIndex]
        tmp[currIndex] = tm
      }
    }

  }

  return tmp
}

/**
 * Sort array relative to object key
 */
export function sortByKey(arr: any[], key: string) {
  let currIndex = -1
  let tmp: any[]  = []
  let tm: any

  for (let i = 0, ilen = arr.length; i < ilen; i++) {

    currIndex = tmp.length
    tmp[currIndex] = arr[i]

    for (let j = 0, jlen = tmp.length; j < jlen; j++) {
      if (tmp[currIndex][key] < tmp[j][key]) {
        tm             = tmp[j]
        tmp[j]         = tmp[currIndex]
        tmp[currIndex] = tm
      }
    }

  }

  return tmp
}

/**
 * Inverse array
 */
export function inverse<T>(arr: T[]) {
  let tmp: T[] = []

  for(let ilen = arr.length-1, i = ilen; i >= 0; i--) {
    tmp.push(arr[i])
  }

  return tmp
}

/**
 * Remove duplicates
 */
export function unique<T>(arr: T[]) {
  let tmp: T[] = []

  for (let i = 0, ilen = arr.length; i < ilen; i++) {
    if (tmp.indexOf(arr[i]) === -1) {
      tmp.push(arr[i])
    }
  }

  return tmp
}

/**
 * Split array into chunks
 */
export function chunk<T>(array: T[], count: number) {
  const arr: T[][] = []

  for (var i = 0, ilen = array.length; i < ilen; i += count) {
    arr.push( array.slice(i, i+count) )
  }

  return arr
}

/**
 * Generate an array
 */
export function generate<T>(callback: (index: number, stop_running: () => void, previous: T) => T) {
  const arr:T[] = []

  let i = 0
  let running = true
  let previous: unknown

  function stop_running() { running = false }

  while (running) {
    previous = callback(i, stop_running, previous as T)
    arr.push( previous as T )
    i++
  }

  return arr
}

/**
 * Generate enumeration
 */
export function generateEnumeration(count: number = 10) {
  return generate<number>((index, stop_running, previous) => {
    if (index+1 == count) stop_running()
    return index
  })
}

/**
 * Generate random enumeration
 */
export function generateRandomEnumeration(count: number = 10) {
  return generate((index, stop_running, previous) => {
    if (index+1 == count) stop_running()
    return Math.random()
  })
}

/**
 * Find similar elements between two arrays
 */
export function similarity<T>(arr0: T[], arr1: T[]) {
  const arr: T[] = []

  for (let i = 0; i < arr0.length; i++) {
    const el0 = arr0[i];
    for (let j = 0; j < arr1.length; j++) {
      const el1 = arr1[j];
      if (el0 == el1) arr.push(el0)
    }
  }

  return arr
}

/**
 * Find different elements between two arrays
 */
export function difference<T>(arr0: T[], arr1: T[]) {
  const arr: T[] = []

  for (let i = 0; i < arr0.length; i++) {
    const el0 = arr0[i];
    if (arr1.indexOf(el0) == -1) arr.push( el0 )
  }

  return arr
}