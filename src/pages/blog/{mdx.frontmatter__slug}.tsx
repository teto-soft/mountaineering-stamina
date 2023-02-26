import { graphql, PageProps } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'

const BlogPost = ({ data, children }: PageProps<Queries.BlogPostQuery>) => (
  <Layout pageTitle={data.mdx?.frontmatter?.title || ''}>
    <p>{data.mdx?.frontmatter?.date}</p>
    {children}
  </Layout>
)
console.log(BlogPost)

export const Head = ({ data }: PageProps<Queries.BlogPostQuery>) => <Seo title={data.mdx?.frontmatter?.title || ''} />

export default BlogPost

export const query = graphql`
  query BlogPost($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`
