const siteConfig = require('../../config/site')

const { baseUrl } = siteConfig

function withBaseUrl (url) {
  return [baseUrl, url].join('/').replace('//', '/')
}

export {
  withBaseUrl
}
