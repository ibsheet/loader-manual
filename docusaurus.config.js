const { resolve } = require('path')
const { baseUrl } = require('./config/site')

const navbar = {
  title: 'IBSheetLoader',
  logo: {
    alt: 'ibsheet-loader',
    src: 'img/logo/ibsheet-loader.jpg'
  },
  links: [
    {
      label: 'Getting Started',
      to: 'docs/basic/getting-started',
      position: 'right'
    },
    {
      label: 'IBSheet8-Manual',
      href: 'https://docs.ibleaders.com/ibsheet/v8/manual/#docs/intro/featured',
      position: 'right'
    },
    { to: 'blog', label: 'Blog', position: 'right' },
    {
      href: 'https://www.github.com/ibsheet/loader',
      // label: 'GitHub',
      target: '_blank',
      position: 'right'
    }
  ]
}

const algolia = {
  apiKey: 'a562b61bd0bec14591d25a37aca77723',
  indexName: 'ibsheetloader',
  algoliaOptions: {}
}

const footer = {
  style: 'dark',
  links: [
    {
      title: 'Docs',
      items: [
        {
          label: 'Getting Started',
          to: 'docs/basic/getting-started'
        },
        {
          label: 'Create Sheet',
          to: 'docs/ibsheet/create-sheet'
        },
        {
          label: 'API Reference',
          to: 'https://ibsheet.github.io/loader/',
          target: '_blank'
        }
      ]
    },
    {
      title: 'Community',
      items: [
        {
          label: 'GitHub Issues',
          href: 'https://github.com/ibsheet/loader/issues',
          target: '_blank'
        },
        {
          label: 'Discord',
          href: 'https://discord.gg/2XN7AQk'
        }
      ]
    },
    {
      title: 'Social',
      items: [
        {
          label: 'GitHub @ibsheet/loader',
          to: 'https://github.com/ibsheet/loader',
          target: '_blank'
        },
        {
          label: 'Blog',
          to: 'blog'
        }
      ]
    },
    {
      title: 'Links',
      items: [
        {
          label: 'npm @ibsheet/loader',
          to: 'https://www.npmjs.com/package/@ibsheet/loader',
          target: '_blank'
        }
      ]
    }
  ],
  logo: {
    alt: 'IB Leaders',
    // src: 'img/logo/ibleaders-245x58-2.png'
    src: 'img/logo/ibleaders-ci.svg'
  },
  copyright: `© ${new Date().getFullYear()} IBSheet Team`
}

const presets = [
  [
    '@docusaurus/preset-classic',
    {
      docs: {
        sidebarPath: require.resolve('./sidebars.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true
      },
      blog: {
        psotsPerPage: 3
      },
      theme: {
        customCss: require.resolve('./src/css/custom.css')
      }
    }
  ]
]

module.exports = {
  title: 'IBSheetLoader',
  tagline: 'Dynamically load support module for IBSheet.',
  url: 'https://ibsheet.github.io/loader-manual',
  baseUrl,
  favicon: 'img/favicon.ico',
  organizationName: 'ibsheet', // Usually your GitHub org/user name.
  projectName: 'loader-manual', // Usually your repo name.
  themeConfig: {
    navbar,
    algolia,
    footer
  },
  presets,
  plugins: [
    resolve('./plugins/custom-watch-plugin')
  ]
}
