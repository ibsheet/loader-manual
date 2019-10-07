const siteConfig = require('../../config/site')

const { baseUrl } = siteConfig

function withBaseUrl (url) {
  return [baseUrl, url].join('/')
}

export {
  withBaseUrl
}
