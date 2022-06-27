import React from 'react'
import ProductData from '../../Products/ProductData'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { productInfoDisplay } from '../../features/productInfo'
import { addToCart } from '../../features/addToCart'

const Bread = () => {
    const dispatch = useDispatch();
  return (
    <div className='bread-wrapper scw smh'>
        <div className='bread-content-wrapper ssw spta'>
            <h1>BREAD</h1>
            <div className='pit-options'>
                <Link to="/menu"><h2>MENU</h2></Link>
                <Link to="/order"><h2>Shop</h2></Link>
            </div>
            <div className='products-wrapper'>
            {ProductData.filter(product => product.type==='bread').map((products)=>{
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

export default Bread