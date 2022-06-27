import React from 'react'
import './Order.css'
import ProductData from '../../Products/ProductData'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/addToCart'
import { Link } from 'react-router-dom'
import { productInfoDisplay } from '../../features/productInfo'

const Order = () => {
  const dispatch = useDispatch();
  return (
    <div className='order-wrapper ssw smh'>
      <div className='scw order-content-wrapper spta'>
        <h1>PRODUCTS</h1>
        <div className='products-wrapper'>
          {ProductData.map((products)=>{
            return(
              <div className='order-card' key={products.id}>
                <div className='card-item-order' style={{ backgroundImage: `url('${products.image}')` }}>
                </div>
                <div className='card-description-order'>
                  <h5>{products.description}</h5>
                  <h5>₱{products.price}</h5>
                  <Link onClick={()=>{dispatch(productInfoDisplay([products,]))}} to="/product-info"><h5>See More</h5></Link>
                </div>
                <button className='universal-btn' onClick={()=>{dispatch(addToCart(products))}}>Add to Cart!</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Order