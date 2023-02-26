import type { GatsbyConfig } from 'gatsby'
import * as path from 'path'
import * as dotenv from 'dotenv'
dotenv.config()

const gatsbyRequiredRules = path.join(process.cwd(), 'node_modules', 'gatsby', 'dist', 'utils', 'eslint-rules')

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Mountaineering Stamina`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-mdx',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.MICROCMS_API_KEY,
        serviceId: process.env.MICROCMS_SERVICE_ID,
        apis: [
          {
            endpoint: 'blogs',
          },
          {
            endpoint: 'categories',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        rulePaths: [gatsbyRequiredRules],
        exclude: ['node_modules', '.cache', 'public'],
        stages: ['develop'],
        emitWarning: true,
        failOnError: false,
      },
    },
  ],
}

export default config
