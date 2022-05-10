import React from 'react'
import { CardData } from './CardData'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = () => {

  return (
    <div className='card-content-wrapper bt ssw'>
        <div className='card-wrapper sw'>
        {CardData.map((objectImage, index)=>{
                        return(
                                <div className="card-item" key={index} style={{ backgroundImage: `url('${objectImage.image}')` }}>
                                    <div className='card-description'>
                                        <Link to={objectImage.link}><h2>{objectImage.description}</h2></Link>
                                    </div>
                                </div>
                        )
          })}
        </div>
    </div>
  )
}

export default Card