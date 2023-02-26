import * as React from 'react'
import { container, navLinks, navLinkItem, navLinkText, heading, siteTitle } from './layout.module.css'
import { graphql, Link, useStaticQuery } from 'gatsby'

interface LayoutProps {
  pageTitle: string
  children: React.ReactNode
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
  const query = graphql`
    query Layout {
      site {
        siteMetadata {
          title
        }
      }
    }
  `
  const data = useStaticQuery<Queries.LayoutQuery>(query)

  return (
    <div className={container}>
      <header className={siteTitle}>{data.site?.siteMetadata?.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to='/' className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to='/about' className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to='/blog' className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1> {children}
      </main>
    </div>
  )
}

export default Layout
