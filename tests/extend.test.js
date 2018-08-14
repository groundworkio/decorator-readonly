/* eslint-env jest */
import readonly from '../src'

class TestClass {
  @readonly field = 10
  @readonly static staticField = 10
  @readonly method () {}
  @readonly async asyncMethod () {}
  @readonly generatorMethod = (function * () {})
  @readonly asyncGeneratorMethod = (async function * () {})
  @readonly static staticMethod () {}
  @readonly static async staticAsyncMethod () {}
  @readonly static staticGeneratorMethod = (function * () {})
  @readonly static staticAsyncGeneratorMethod = (async function * () {})
}
class ExtendedTestClass extends TestClass {}

/** @test {readonly} */
describe('Decorated class fields & methods on `extend`', () => {
  it('`ExtendedTestClass field` should not be writeable', () => {
    const testClass = new ExtendedTestClass()
    try {
      testClass.field = 15
      throw new Error('Field should not be writeable')
    } catch (error) {
      expect(error instanceof TypeError).toBe(true)
      expect(testClass.field).toBe(10)
    }
  })
  it('`ExtendedTestClass staticField` should not be writeable', () => {
    try {
      ExtendedTestClass.staticField = 20
      throw new Error('Field should not be writeable')
    } catch (error) {
      expect(error instanceof TypeError).toBe(true)
      expect(ExtendedTestClass.staticField).toBe(10)
    }
  })
  it('`ExtendedTestClass method` should not be writeable', () => {
    const testClass = new ExtendedTestClass()
    try {
      testClass.method = 10
      throw new Error('Method should not be writeable')
    } catch (error) {
      expect(error instanceof TypeError).toBe(true)
      expect(typeof testClass.method).toBe('function')
    }
  })
  it('`ExtendedTestClass asyncMethod` should not be writeable', () => {
    const testClass = new ExtendedTestClass()
    try {
      testClass.asyncMethod = 10
      throw new Error('Method should not be writeable')
    } catch (error) {
      expect(error instanceof TypeError).toBe(true)
      expect(typeof testClass.asyncMethod).toBe('function')
    }
  })
  it('`ExtendedTestClass generatorMethod` should not be writeable', () => {
    const testClass = new ExtendedTestClass()
    try {
      testClass.generatorMethod = 10
      throw new Error('Method should not be writeable')
    } catch (error) {
      expect(error instanceof TypeError).toBe(true)
      expect(typeof testClass.generatorMethod).toBe('function')
    }
  })
  it('`ExtendedTestClass asyncGeneratorMethod` should not be writeable', () => {
    const testClass = new ExtendedTestClass()
    try {
      testClass.asyncGeneratorMethod = 10
      throw new Error('Method should not be writeable')
    } catch (error) {
      expect(error instanceof TypeError).toBe(true)
      expect(typeof testClass.asyncGeneratorMethod).toBe('function')
    }
  })
  it('`ExtendedTestClass staticMethod` should not be writeable', () => {
    try {
      ExtendedTestClass.staticMethod = 20
      throw new Error('Field should not be writeable')
    } catch (error) {
      expect(error instanceof TypeError).toBe(true)
      expect(typeof ExtendedTestClass.staticMethod).toBe('function')
    }
  })
  it('`ExtendedTestClass staticAsyncMethod` should not be writeable', () => {
    try {
      ExtendedTestClass.staticAsyncMethod = 20
      throw new Error('Field should not be writeable')
    } catch (error) {
      expect(error instanceof TypeError).toBe(true)
      expect(typeof ExtendedTestClass.staticAsyncMethod).toBe('function')
    }
  })
  it('`ExtendedTestClass staticGeneratorMethod` should not be writeable', () => {
    try {
      ExtendedTestClass.staticGeneratorMethod = 20
      throw new Error('Field should not be writeable')
    } catch (error) {
      expect(error instanceof TypeError).toBe(true)
      expect(typeof ExtendedTestClass.staticGeneratorMethod).toBe('function')
    }
  })
  it('`ExtendedTestClass staticAsyncGeneratorMethod` should not be writeable', () => {
    try {
      ExtendedTestClass.staticAsyncGeneratorMethod = 20
      throw new Error('Field should not be writeable')
    } catch (error) {
      expect(error instanceof TypeError).toBe(true)
      expect(typeof ExtendedTestClass.staticAsyncGeneratorMethod).toBe('function')
    }
  })
})
