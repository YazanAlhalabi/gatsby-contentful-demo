import * as React from "react"
import { graphql } from "gatsby"
import { FluidObject } from "gatsby-image"
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text"

import { BlogHeader } from "../../components/BlogHeader"
import { BlogBody } from "../../components/BlogBody"
import "../../styles/styles.scss"

type TemplateProps = {
  data: {
    blog: {
      id: string
      title: string
      slug: string
      date: string
      body: RenderRichTextData<ContentfulRichTextGatsbyReference>
      coverImages: {
        fluid: FluidObject
      }[]
    }
  }
}

const BlogTemplate = ({ data: { blog } }: TemplateProps) => {
  return (
    <div>
      <BlogHeader
        fluidImage={blog.coverImages[0].fluid}
        title={blog.title}
        date={blog.date}
      />
      <BlogBody content={blog.body} />
    </div>
  )
}

export default BlogTemplate

export const query = graphql`
  query($slug: String!) {
    blog: contentfulBlogs(slug: { eq: $slug }) {
      id
      title
      date(formatString: "MMM D YYYY")
      coverImages {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
      body {
        raw
      }
    }
  }
`
