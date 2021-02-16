import React from "react"
import { FluidObject } from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

type BlogHeaderProps = {
  fluidImage: FluidObject
  title: string
  date: string
}

export const BlogHeader = ({ fluidImage, title, date }: BlogHeaderProps) => {
  const headerImage = [
    `linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.6) 50%,
          rgba(0, 0, 0, 0.6) 50%
        )`,
    fluidImage,
  ]

  return (
    <BackgroundImage
      Tag="header"
      className="header"
      fluid={headerImage}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="title-wraper">
        <h1>{title}</h1>
        <span>{date}</span>
      </div>
    </BackgroundImage>
  )
}
