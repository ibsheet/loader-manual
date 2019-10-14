/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Header from './home/header'
import Features from './home/features'

// import Helmet from '@docusaurus/Head'
// <Helmet>
//   <link rel='stylesheet' type="text/css" href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css' />
// </Helmet>

function Home () {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  const { title, tagline } = siteConfig
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'
    >
      <Header title={title} tagline={tagline} />
      <main>
        <Features />
      </main>
    </Layout>
  )
}

export default Home
