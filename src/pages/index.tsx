import React from "react"
import { graphql } from "gatsby"
import { FluidObject } from "gatsby-image"

import { Layout } from "../components/Layout"
import { BlogCard } from "../components/BlogCard"
import { Grid } from "../components/Grid"
import "../styles/styles.scss"

type HomeProps = {
  data: {
    blogs: {
      edges: {
        node: {
          id: string
          title: string
          slug: string
          coverImages: {
            id: string
            fluid: FluidObject
          }[]
        }
      }[]
    }
  }
}

const IndexPage = ({ data: { blogs } }: HomeProps) => {
  return (
    <Layout>
      <h1>Home Page</h1>
      <Grid>
        {blogs.edges.map(({ node }) => (
          <BlogCard key={node.id} blog={node} />
        ))}
      </Grid>
    </Layout>
  )
}

export default IndexPage
export const query = graphql`
  query {
    blogs: allContentfulBlogs {
      edges {
        node {
          id
          title
          slug
          coverImages {
            id
            fluid(quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
