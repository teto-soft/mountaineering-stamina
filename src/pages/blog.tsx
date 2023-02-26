import { graphql, PageProps } from 'gatsby'
import * as React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

const BlogPage = ({ data }: PageProps<Queries.BlogPageQuery>) => (
  <Layout pageTitle='My Blog Posts'>
    {data.allMdx.nodes.map((node) => (
      <article key={node.id}>
        <h2>{node.frontmatter?.title}</h2>
        <p>Posted: {node.frontmatter?.date}</p>
        <p>{node.excerpt}</p>
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
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title='My Blog Posts' />

export default BlogPage
