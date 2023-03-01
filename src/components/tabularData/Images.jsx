import React from 'react'
import './images.css'
import Thumbnail from './Thumbnail';

function Images({images}) {
    console.log(images);
  return (
    <div className='allImg'>
        {images.map((img) => (
            <Thumbnail props={img}/>
        ))}
    </div>
  )
}

export default Images