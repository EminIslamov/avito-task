import React from 'react'
import { Link } from 'react-router-dom'

function Photo (props) {
  return (
    <Link to={`/${props.photo.id}`}>
      <div className="picture">
        {<img src={props.photo.url} alt=""/>}
      </div>
    </Link>
  )
}

export default Photo;