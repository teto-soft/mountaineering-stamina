import * as React from 'react'
import Layout from '../components/Layout'

const IndexPage = () => (
  <main>
    <Layout pageTitle='Home Page'>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  </main>
)

export const Head = () => <title>Home Page</title>

export default IndexPage
