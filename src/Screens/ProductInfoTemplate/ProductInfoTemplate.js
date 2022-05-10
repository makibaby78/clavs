import React from 'react'
import { useSelector } from 'react-redux'
import './ProductInfoTemplate.css'
import Star from '../../images/star.png'
import EStar from '../../images/empty-star.png'
import { Link } from 'react-router-dom'

const ProductInfoTemplate = () => {
  const productToDisplay = useSelector((state)=>state.productInfoReducers.value)
  return (
    <div  className='pit-wrapper ssw smh'>
      <div className='sw'>
          <div className='pit-options'>
            <Link to="/order"><h2>Shop Now!</h2></Link>
            <Link to="/shoppingcart"><h2>Shopping Cart</h2></Link>
          </div>
          {productToDisplay.map((anyNameYouWant, index)=>{
            return(
              <div key={index}  className='pit-content-wrapper'>
                <h1>{anyNameYouWant.description}</h1>
                <div className='pit-info-l'>
                  <div className='pit-info-l-item'>
                    <img width='100%' src={anyNameYouWant.link} alt={anyNameYouWant.name} />
                  </div>
                  <div className='pit-info-l-item'>
                    <div className='pit-price'><span>₱</span><h2>{anyNameYouWant.price}</h2></div>
                    <p>{anyNameYouWant.para}</p>
                    <div className='pit-stars-wrappers'>
                      {Array(parseInt(anyNameYouWant.ratings)).fill(Star).map((fillValue, index)=>{
                        return(
                          <img key={index} src={fillValue} width='100%' alt='star-rating' />
                        )
                      })
                      }
                      {Array(parseInt(5-anyNameYouWant.ratings)).fill(EStar).map((fillValue, index)=>{
                        return(
                          <img key={index} src={fillValue} width='100%' alt='star-rating' />
                        )
                      })
                      }
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default ProductInfoTemplate