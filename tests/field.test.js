/* eslint-env jest */
import readonly from '../src'

class TestClass {
  @readonly field = 10
  @readonly static staticField = 10
}

/** @test {readonly} */
describe('Decorate class fields', () => {
  it('`TestClass#field` should not be writeable', () => {
    const testClass = new TestClass()
    try {
      testClass.field = 15
      throw new Error('Field should not be writeable')
    } catch (error) {
      expect(error instanceof TypeError).toBe(true)
      expect(testClass.field).toBe(10)
    }
  })
  it('`TestClass.staticField` should not be writeable', () => {
    try {
      TestClass.staticField = 20
      throw new Error('Field should not be writeable')
    } catch (error) {
      expect(error instanceof TypeError).toBe(true)
      expect(TestClass.staticField).toBe(10)
    }
  })
})
