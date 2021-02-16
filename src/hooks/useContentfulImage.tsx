import { graphql, useStaticQuery } from "gatsby"
import { FluidObject } from "gatsby-image"

type ContentfulImage = {
  assets: {
    edges: {
      node: {
        contentful_id: string
        fluid: FluidObject
      }
    }[]
  }
}
export const useContentfulImage = (assetUrl: string) => {
  const { assets }: ContentfulImage = useStaticQuery(
    graphql`
      query CONTENTFUL_IMAGE_QUERY {
        assets: allContentfulAsset {
          edges {
            node {
              contentful_id
              fluid(maxWidth: 1050, quality: 100) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    `
  )
  const asset = assets.edges.find(({ node }) => node.contentful_id === assetUrl)
  return asset
}
