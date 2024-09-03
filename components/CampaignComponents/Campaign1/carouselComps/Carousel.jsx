import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import Carousel1 from '../../../../public/Assets/carousel1.png'
import Carousel2 from '../../../../public/Assets/carousel2.png'
import Carousel3 from '../../../../public/Assets/carousel3.png'

import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButtons'
import emblaCarouselAutoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
const IMAGES = [Carousel1, Carousel2, Carousel3];

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options,  [ Fade(),
    emblaCarouselAutoplay({ playOnInit: true, delay: 3000 })
  ])
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className="embla">
  <div className="embla__viewport" ref={emblaRef}>
      <div className="embla__container">
        {IMAGES.map((image, index) => (
          <div className="embla__slide" key={index}>
            <Image
              className="embla__slide__img"
              src={image}
              alt={`Carousel Image ${index + 1}`}
              width={1000}
              height={1000}
            />
          </div>
        ))}
      </div>
    </div>

      {/* <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div> */}
    </div>
  )
}

export default EmblaCarousel
