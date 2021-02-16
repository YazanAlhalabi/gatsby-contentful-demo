import React from "react"
import { FluidObject } from "gatsby-image"

import { ImageGallery } from "./ImageGallery"

type BlogCardProps = {
  blog: {
    id: string
    title: string
    slug: string
    coverImages: {
      id: string
      fluid: FluidObject
    }[]
  }
}

export const BlogCard = ({
  blog: { coverImages, title, slug },
}: BlogCardProps) => {
  return (
    <article className="blog-card">
      <ImageGallery images={coverImages} />
      <a href={`/blogs/${slug}`}>
        <h2>{title} &rarr;</h2>
      </a>
    </article>
  )
}
