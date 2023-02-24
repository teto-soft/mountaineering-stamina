import { Link } from 'gatsby'
import * as React from 'react'

const IndexPage = () => (
  <main>
    <h1>Welcome to my Gatsby site!</h1>
    <Link to='/about'>About</Link>
    <p>I'm making this by following the Gatsby Tutorial.</p>
  </main>
)

export const Head = () => <title>Home Page</title>

export default IndexPage
