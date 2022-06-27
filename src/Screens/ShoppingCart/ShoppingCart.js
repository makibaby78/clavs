import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeToCart } from '../../features/addToCart'
import { productInfoDisplay } from '../../features/productInfo'
import './ShoppingCart.css'
import cart from '../../images/cart-icon.png'
import { Link } from 'react-router-dom'

const ShoppingCart = () => {
  const cartToDisplay = useSelector((state)=>state.addToCartReducers.value)
  const dispatch = useDispatch();
  const result = cartToDisplay.reduce((total, currentValue) => total = total + parseInt(currentValue.price),0);
  return (
    <div className='shoppingcart-wrapper ssw  smh'>
      <div className='scw spta'>
        <div className='shoppingcart-content-wrapper'>
          <h1>SHOPPING CART</h1>
          {cartToDisplay.length<=0 ? '' : 
          <div className='pit-options'>
            <Link to="/menu"><h2>MENU</h2></Link>
            <Link to="/order"><h2>Shop</h2></Link>
          </div>
          }
          <div className='shopping-cart'>
            {cartToDisplay.length<=0 ? '' :
            <div className='shopping-cart-total'>
              <div className='sct-info'>
                <h3>Shopping Cart Summary</h3>
                <div className='sct-info-l'>
                  <h4>TOTAL ({cartToDisplay.length} item): <span>₱{result}</span></h4>
                  <button>Proceed to Checkout</button>
                </div>
              </div>
            </div>
              }
            {cartToDisplay.length<=0 ? 
            <div className='shoppingcart-miw'>
              <div className='cart-item-empty'>
                  <div className='cart-ei'>
                    <img src={cart} width='100%' alt="cart"/>
                  </div>
                  <div className='cart-empty-info'>
                    <h3>Your Cart is Empty</h3>
                    <Link to="/order"><button className='universal-btn'>Shop Now!</button></Link>
                  </div>
              </div>
            </div>
            :
            <div className='shoppingcart-miw'>
            {cartToDisplay.map((anyNameYouWant, index)=>{
              return(
                <div className='cart-item-wrapper' key={index}>
                  <div className='cart-img'>
                    <img src={anyNameYouWant.link} width='100%' alt={anyNameYouWant.description}/>
                  </div>
                  <div className='cart-info'>
                    <div className='cart-info-l'>
                      <h5>{anyNameYouWant.description}</h5>
                      <h5>Price: <span className='cart-price'>₱{anyNameYouWant.price}</span></h5>
                      <p className='cart-stock-stat'>In Stock</p>
                      <button className='cart-close' onClick={()=>{dispatch(removeToCart({id:anyNameYouWant.id}))}}>X</button>
                    </div>
                    <div className='cart-options'>
                      <Link  onClick={()=>{dispatch(productInfoDisplay([anyNameYouWant,]))}} to="/product-info"><span>More Info</span></Link><b>|</b>
                      <span>Save for later</span><b>|</b>
                      <span>Quantity</span><b>|</b>
                      <span onClick={()=>{dispatch(removeToCart({id:anyNameYouWant.id}))}}>Remove</span>
                    </div>
                  </div>
                </div>
              )
            })}
            </div>
            }
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default ShoppingCart