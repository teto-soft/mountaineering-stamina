import { GatsbyNode } from 'gatsby'
import path from 'path'

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql<Queries.CreatePagesQuery>(`
    query CreatePages {
      allMicrocmsBlogs(sort: { publishedAt: ASC }) {
        edges {
          node {
            blogsId
          }
          next {
            blogsId
            title
          }
          previous {
            blogsId
            title
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const { allMicrocmsBlogs } = result.data!

  allMicrocmsBlogs.edges.forEach((edge) => {
    createPage({
      // 生成したいページのpathを記載します。
      path: `/blog/${edge.node.blogsId}/`,
      // ページの土台となるコンポーネントのパスを記述します。
      component: path.resolve('src/templates/blog.tsx'),
      // コンポーネントの`pageContext`という引数情報に渡すデータを格納します。
      // pageContextに渡した値は、templateのGraphQL内で変数として利用できます。
      context: {
        id: edge.node.blogsId,
        next: edge.next,
        previous: edge.previous,
      },
    })
  })
}
