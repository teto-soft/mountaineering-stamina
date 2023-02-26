import { graphql, Link, PageProps } from 'gatsby'
import React from 'react'
import Seo from '../components/Seo'

export default function IndexPage({ data }: PageProps<Queries.IndexPageQuery>) {
  const { allMicrocmsBlogs } = data
  return (
    <main>
      <h1>TOPページ</h1>
      <h2>最新記事</h2>
      <ul>
        {allMicrocmsBlogs.nodes.map((node) => (
          <li key={node.blogsId}>
            <Link to={`/blogs/${node.blogsId}/`}>{node.title}</Link>
          </li>
        ))}
      </ul>
      <Link to='/blogs/'>もっとみる</Link>
    </main>
  )
}

export const query = graphql`
  query IndexPage {
    allMicrocmsBlogs(limit: 3, sort: { publishedAt: DESC }) {
      nodes {
        blogsId
        title
        publishedAt
        revisedAt
      }
    }
  }
`

export const Head = () => <Seo title='Home Page' />
