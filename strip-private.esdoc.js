// This is a nasty hack to allow private members
class StripPrivatePlugin {
  onHandleCode (ev) {
    // modify code
    ev.data.code = ev.data.code.replace(new RegExp('#', 'g'), '')
  }
}

// exports plugin
module.exports = new StripPrivatePlugin()
