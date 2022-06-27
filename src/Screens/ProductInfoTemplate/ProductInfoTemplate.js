import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './ProductInfoTemplate.css'
import Star from '../../images/star.png'
import EStar from '../../images/empty-star.png'
import { Link } from 'react-router-dom'

const ProductInfoTemplate = () => {
  const productToDisplay = useSelector((state)=>state.productInfoReducers.value)
  const [click, setClick] = useState(false);
  return (
    <div  className='pit-wrapper ssw smh'>
      <div className='scw'>
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
                    <img width='100%' src={anyNameYouWant.link[0]} alt={anyNameYouWant.name}  onClick={()=>setClick(true)}/>
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
                {click && 
                <div className='pit-zoom-image'>
                  <div className='pz-arrow-holder'>
                      <div className='pz-ah-close' onClick={()=>setClick(false)}>
                        <img src='data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik01Mi4wMyw0Mi4yNDc1bC05Ljc4MjUsOS43ODI1bDM0LjE4NSwzMy45N2wtMzQuMTg1LDMzLjk3bDkuNzgyNSw5Ljc4MjVsMzQuMTg1LC0zMy45N2wzNC4xODUsMzMuOTdsOS42NzUsLTkuNzgyNWwtMzQuMDc3NSwtMzMuOTdsMzQuMDc3NSwtMzMuOTdsLTkuNjc1LC05Ljc4MjVsLTM0LjE4NSwzMy45N3oiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==' width='100%' />
                      </div>
                      <div className='pz-ah-wrapper'>
                        <img src='https://cdn-icons-png.flaticon.com/512/130/130882.png' width='100%' />
                      </div>
                      <div className='pz-img-holder'>
                          <img width='100%' src={anyNameYouWant.link[0]} alt={anyNameYouWant.name} />
                      </div>
                      <div className='pz-ah-wrapper'>
                        <img src='https://cdn-icons-png.flaticon.com/512/130/130884.png' width='100%' />
                      </div>
                  </div>
                </div>
                }
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default ProductInfoTemplate