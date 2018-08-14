/**
 * @license MIT
 * @copyright 2018 µBricks
 * @flow
 */

/**
 * @todo Create full type definition
 */
type ElementDescriptor = {
  writable: boolean
}

/**
 * Readonly decorator
 * @param {Object} target
 * @param {string} property
 * @param {ElementDescriptor} descriptor
 * @returns {ElementDescriptor}
 */
export default function readonly (target: Object, property: string, descriptor: ElementDescriptor) {
  descriptor.writable = false
  return descriptor
}
