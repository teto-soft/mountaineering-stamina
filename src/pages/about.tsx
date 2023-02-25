import * as React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

const AboutPage = () => (
  <main>
    <Layout pageTitle='About Me'>
      <p>{"Hi there! I'm the proud creator of this site, which I built with Gatsby."}</p>
    </Layout>
  </main>
)

export const Head = () => <Seo title='About Me' />

export default AboutPage
