import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({name,description,type,id}) => {
    const path = `/assets/${type}-${id}.png`
  return (
    <div className='card m-3 col-12 col-md-4  ' style={{width:200}}>
        <img src={path} alt={id} className='card-img-top'/>
        <div className='card-body'>
            <h5 className='card-title'>{name}</h5>
            <p className='card-body'>
                <Link className='card-link' to={`character/${id}`}>
                Ver mas...
                </Link>
            </p>
        </div>
    </div>
  )
}

export default Card