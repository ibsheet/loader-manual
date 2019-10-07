/**
 * Lifecycle APIs
 * https://v2.docusaurus.io/docs/lifecycle-apis/
 */

const { resolve } = require('path')

const DEFAULT_OPTIONS = {
  path: 'config',
  include: [
    '*.js'
  ]
}

// A JavaScript function that returns an object.
// `context` is provided by Docusaurus. Example: siteConfig can be accessed from context.
// `opts` is the user-defined options.
module.exports = function (context, opts) {
  // Merge defaults with user-defined options.
  const options = {
    ...DEFAULT_OPTIONS,
    ...opts
  }
  const contentPath = resolve(context.siteDir, options.path)
  return {
    // A compulsory field used as the namespace for directories to cache
    // the intermediate data for each plugin.
    // If you're writing your own local plugin, you will want it to
    // be unique in order not to potentially conflict with imported plugins.
    // A good way will be to add your own project name within.
    name: 'docusaurus-custom-watch-plugin',
    getPathsToWatch () {
      const { include = [] } = options
      const globPattern = include.map(pattern => `${contentPath}/${pattern}`)
      return [...globPattern]
    }
    // configureWebpack (config, isServer) {
    //   // Modify internal webpack config. If returned value is an Object, it
    //   // will be merged into the final config using webpack-merge;
    //   // If the returned value is a function, it will receive the config as the 1st argument and an isServer flag as the 2nd argument.
    //   // console.log(config.module.rules)
    //   console.log(isServer)
    // }
  }
}
