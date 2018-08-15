// This is a nasty hack to allow private members
class StripPrivatePlugin {
  onHandleCode (ev) {
    // modify code
    ev.data.code = ev.data.code.replace(new RegExp(' #', 'g'), '')
    ev.data.code = ev.data.code.replace(/\.#/g, '.')
  }
}

// exports plugin
module.exports = new StripPrivatePlugin()
