import React from 'react'
import './showimg.css'

function ShowImg({props, onConfirm}) {
    // console.log(props);
  return (
    <div>
        <div className='backdrop' onClick={onConfirm}/>
        <div className='modal'>
        <img src={props} alt="" className="thumbnailimg"/>
        </div>
    </div>
  )
}

export default ShowImg