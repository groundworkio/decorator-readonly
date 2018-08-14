/* eslint-env jest */
import readonly from '../src'

class TestClass {
  @readonly method () {}
  @readonly async asyncMethod () {}
  @readonly generatorMethod = (function * () {})
  @readonly asyncGeneratorMethod = (async function * () {})
  @readonly static staticMethod () {}
  @readonly static async staticAsyncMethod () {}
  @readonly static staticGeneratorMethod = (function * () {})
  @readonly static staticAsyncGeneratorMethod = (async function * () {})
}

/** @test {readonly} */
/** @test {readonly} */
describe('Decorate class methods', () => {
  it('`TestClass method` should not be writeable', () => {
    const testClass = new TestClass()
    try {
      testClass.method = 10
      throw new Error('Method should not be writeable')
    } catch (error) {
      expect(error instanceof TypeError).toBe(true)
      expect(typeof testClass.method).toBe('function')
    }
  })
  it('`TestClass asyncMethod` should not be writeable', () => {
    const testClass = new TestClass()
    try {
      testClass.asyncMethod = 10
      throw new Error('Method should not be writeable')
    } catch (error) {
      expect(error instanceof TypeError).toBe(true)
      expect(typeof testClass.asyncMethod).toBe('function')
    }
  })
  it('`TestClass generatorMethod` should not be writeable', () => {
    const testClass = new TestClass()
    try {
      testClass.generatorMethod = 10
      throw new Error('Method should not be writeable')
    } catch (error) {
      expect(error instanceof TypeError).toBe(true)
      expect(typeof testClass.generatorMethod).toBe('function')
    }
  })
  it('`TestClass asyncGeneratorMethod` should not be writeable', () => {
    const testClass = new TestClass()
    try {
      testClass.asyncGeneratorMethod = 10
      throw new Error('Method should not be writeable')
    } catch (error) {
      expect(error instanceof TypeError).toBe(true)
      expect(typeof testClass.asyncGeneratorMethod).toBe('function')
    }
  })
  it('`TestClass staticMethod` should not be writeable', () => {
    try {
      TestClass.staticMethod = 20
      throw new Error('Field should not be writeable')
    } catch (error) {
      expect(error instanceof TypeError).toBe(true)
      expect(typeof TestClass.staticMethod).toBe('function')
    }
  })
  it('`TestClass staticAsyncMethod` should not be writeable', () => {
    try {
      TestClass.staticAsyncMethod = 20
      throw new Error('Field should not be writeable')
    } catch (error) {
      expect(error instanceof TypeError).toBe(true)
      expect(typeof TestClass.staticAsyncMethod).toBe('function')
    }
  })
  it('`TestClass staticGeneratorMethod` should not be writeable', () => {
    try {
      TestClass.staticGeneratorMethod = 20
      throw new Error('Field should not be writeable')
    } catch (error) {
      expect(error instanceof TypeError).toBe(true)
      expect(typeof TestClass.staticGeneratorMethod).toBe('function')
    }
  })
  it('`TestClass staticAsyncGeneratorMethod` should not be writeable', () => {
    try {
      TestClass.staticAsyncGeneratorMethod = 20
      throw new Error('Field should not be writeable')
    } catch (error) {
      expect(error instanceof TypeError).toBe(true)
      expect(typeof TestClass.staticAsyncGeneratorMethod).toBe('function')
    }
  })
})
