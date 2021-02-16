import React, { useState, KeyboardEvent } from "react"
import Img, { FluidObject } from "gatsby-image"

type ImageGalleryProps = {
  images: {
    id: string
    fluid: FluidObject
  }[]
}

export const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentImage, setCurrentImage] = useState(images[0].fluid)

  const handleNext = () => {
    if (images.length) {
      const nextIndex = (currentIndex + 1 + images.length) % images.length
      setCurrentIndex(nextIndex)
      const nextImage = images[nextIndex].fluid
      setCurrentImage(nextImage)
    }
  }

  const handlePrev = () => {
    if (images.length) {
      const prevIndex = (currentIndex - 1 + images.length) % images.length
      setCurrentIndex(prevIndex)
      const nextImage = images[prevIndex].fluid
      setCurrentImage(nextImage)
    }
  }

  const handleNextKeyPress = (event: KeyboardEvent<HTMLSpanElement>) => {
    if (event.key === "Enter") {
      handleNext()
    }
  }

  const handlePrevKeyPress = (event: KeyboardEvent<HTMLSpanElement>) => {
    if (event.key === "Enter") {
      handlePrev()
    }
  }

  return (
    <>
      <div className="image-wrapper">
        <span
          tabIndex={0}
          aria-label="Previous image"
          onClick={handlePrev}
          onKeyPress={handlePrevKeyPress}
          className="arrow arrow-prev"
        >
          {"<"}
        </span>

        <Img fluid={currentImage} loading="lazy" />

        <span
          tabIndex={0}
          aria-label="Next image"
          onClick={handleNext}
          onKeyPress={handleNextKeyPress}
          className="arrow arrow-next"
        >
          {">"}
        </span>
      </div>
      <div className="images">
        {images.map((image, index) => {
          const isCurrent = index === currentIndex
          return (
            <Img
              fluid={image.fluid}
              loading="lazy"
              key={image.id}
              style={{
                width: "75px",
                flex: 1,
                filter: isCurrent ? "brightness(0.4)" : "brightness(1)",
              }}
            />
          )
        })}
      </div>
    </>
  )
}
