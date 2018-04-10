// React native fixture workaround for rm vector icon package
// https://github.com/facebook/react-native/issues/17610
// https://github.com/facebook/react-native/pull/17672

const blacklist = require('metro/src/blacklist')
module.exports = {
  getBlacklistRE () {
    return blacklist([/react-native\/local-cli\/core\/__fixtures__.*/])
  }
}
