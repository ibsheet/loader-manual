const { resolve } = require('path')
const { baseUrl } = require('./config/site')

const navbar = {
  title: 'IBSheetLoader',
  logo: {
    alt: 'ibsheet-loader',
    src: 'img/logo/ibsheet-loader-x32.png'
  },
  links: [
    { to: 'docs/doc1', label: 'Docs', position: 'left' },
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
          to: 'docs/doc1'
        }
      ]
    },
    {
      title: 'Community',
      items: [
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
          label: 'Blog',
          to: 'blog'
        }
      ]
    }
  ],
  logo: {
    alt: 'IB Leaders',
    src: 'img/logo/ibleaders-245x58-2.png'
  },
  copyright: `Copyright © ${new Date().getFullYear()} IB Leaders`
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

/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
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
