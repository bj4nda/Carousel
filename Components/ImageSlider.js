import React, {useState, useEffect} from "react"
import {SliderData} from "./Data"
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"
import "../App.css"

const ImageSlider = ({slides}) => {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const length = slides.length

  useEffect(() => {
    autoPlay &&
      setTimeout(() => {
        nextSlide()
      }, 2500)
  })

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <section
      className="slider"
      on
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="travel" className="image" />
            )}
          </div>
        )
      })}
      <div className="carousel_pagination">
        {SliderData.map((_, index) => {
          return (
            <div
              className={
                index === current
                  ? "pagination_dot pagination_dot-active"
                  : "pagination_dot"
              }
              key={index}
              onClick={() => setCurrent(index)}
            ></div>
          )
        })}
      </div>
      ;
    </section>
  )
}

export default ImageSlider
