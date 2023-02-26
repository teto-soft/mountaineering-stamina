import { graphql, PageProps } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'

const BlogPost = ({ data, children }: PageProps<Queries.BlogPostQuery>) => {
  const frontmatter = data.mdx?.frontmatter
  const image = frontmatter?.hero_image?.childImageSharp?.gatsbyImageData
  const imageCreditLink = frontmatter?.hero_image_credit_link

  return (
    <Layout pageTitle={data.mdx?.frontmatter?.title || ''}>
      <p>{data.mdx?.frontmatter?.date}</p>
      {image && <GatsbyImage image={image} alt={frontmatter?.hero_image_alt || ''} />}
      {imageCreditLink && (
        <p>
          Photo Credit: <a href={imageCreditLink || ''}>{frontmatter?.hero_image_credit_text}</a>
        </p>
      )}
      {children}
    </Layout>
  )
}

export const query = graphql`
  query BlogPost($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const Head = ({ data }: PageProps<Queries.BlogPostQuery>) => <Seo title={data.mdx?.frontmatter?.title || ''} />

export default BlogPost
