const { resolve } = require('path')
const { baseUrl } = require('./config/site')

const navbar = {
  title: 'IBSheetLoader',
  logo: {
    alt: 'ibsheet-loader',
    src: 'img/logo/ibsheet-loader.jpg'
  },
  links: [
    { to: 'docs/basic/getting-started', label: 'Docs', position: 'left' },
    { to: 'blog', label: 'Blog', position: 'left' },
    {
      href: 'https://www.github.com/ibsheet/loader-manual',
      label: 'GitHub',
      position: 'right'
    }
  ]
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
          href: 'https://discordapp.com/invite/H2wyHXb'
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
  copyright: `©${new Date().getFullYear()} IBSheet Team`
}

const presets = [
  [
    '@docusaurus/preset-classic',
    {
      docs: {
        sidebarPath: require.resolve('./sidebars.js')
      },
      theme: {
        customCss: require.resolve('./src/css/custom.css')
      }
    }
  ]
]

module.exports = {
  title: 'IBSheetLoader',
  tagline: 'Dynamically load support module for IBSheet',
  url: 'https://ibsheet.github.io/loader-manual',
  baseUrl,
  favicon: 'img/favicon.ico',
  organizationName: 'ibsheet', // Usually your GitHub org/user name.
  projectName: 'loader-manual', // Usually your repo name.
  themeConfig: {
    navbar,
    footer
  },
  presets,
  plugins: [
    resolve('./plugins/custom-watch-plugin')
  ]
}
