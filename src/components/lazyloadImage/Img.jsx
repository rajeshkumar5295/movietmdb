import React from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Img = ({src,className}) => {
    console.log(  'checking linki of img in Imag' ,src)
  return (
    <LazyLoadImage
    className={className || ""}
    // alt={image.alt}
    alt=''
    effect="blur"
    // src={image.src} 
    src={src}
    />
  )
}

export default Img
