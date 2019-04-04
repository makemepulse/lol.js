export const PI2 = Math.PI * 2

export const RAG2DEG = 180 / Math.PI
export const DEG2RAD = Math.PI / 180

/**
 * Clamp a value
 */
export function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(value, max))
}

/**
 * Clamp a value
 */
export function clamp01(value: number, min: number = 0, max: number = 1) {
  return Math.max(min, Math.min(value, max))
}

/**
 * Radian to Degree
 */
export function toDegree(radian: number) {
  return radian / RAG2DEG
}

/**
 * Degree to Radian
 */
export function toRadian(degree: number) {
  return degree / DEG2RAD
}

/**
 * Set float precision
 */
export function precision(value: number, precision: number) {
  return Math.floor(value * Math.pow(10, precision)) / Math.pow(10, precision)
}

/**
 * Map value
 */
export function map(value: number, min0: number, max0: number, min1: number, max1: number) {
  const l0 = max0 - min0
  const l1 = max1 - min1
  return min1 + ((value - min0) / l0) * l1
}