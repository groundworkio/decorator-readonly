# Usage

```javascript
import readonly from 'ubrick/decorator-readonly'

class Example {
  @readonly field = 10
  @readonly static staticField = 10

  @readonly generatorMethod = (function * () {})
  @readonly asyncGeneratorMethod = (async function * () {})
  @readonly static staticGeneratorMethod = (function * () {})
  @readonly static staticAsyncGeneratorMethod = (async function * () {})

  @readonly method () {}
  @readonly async asyncMethod () {}
  @readonly static staticMethod () {}
  @readonly static async staticAsyncMethod () {}
}
```
