import { graphql, Link, PageProps } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'

const BlogPage = ({ data }: PageProps<Queries.BlogPageQuery>) => (
  <Layout pageTitle='My Blog Posts'>
    {data.allMdx.nodes.map((node) => (
      <article key={node.id}>
        <h2>
          <Link to={`/blog/${node.frontmatter?.slug || ''}`}>{node.frontmatter?.title}</Link>
        </h2>
        <p>Posted: {node.frontmatter?.date}</p>
      </article>
    ))}
  </Layout>
)

export const query = graphql`
  query BlogPage {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
      }
    }
  }
`

export const Head = () => <Seo title='My Blog Posts' />

export default BlogPage
