import React, {useState} from 'react'
import { ReactDOM } from 'react-dom';
import './thumbnail.css'
import ShowImg from './ShowImg';

function Thumbnail({props}) {

    const [showImgage, setShowImgage] = useState(false);

    const showImgHandler = function() {
        setShowImgage(true);
    }
    // console.log(props);


    const ImgFocusHandler = function() {
        setShowImgage(false);
    }
  return (
    <div>
        {showImgage && <ShowImg props={props} onConfirm={ImgFocusHandler}/>}
        <img src={props} alt="thumbnail" className="thumbnail" onClick={showImgHandler}/>
    </div>
    
  )
}

export default Thumbnail