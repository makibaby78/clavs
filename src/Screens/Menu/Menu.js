import React from 'react'
import './Menu.css'
import Cake from '../../images/Brown Cake.jpg'
import Cupcake from '../../images/Pink Muffins.jpg'
import Bread from '../../images/Bread.png'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='menu-wrapper ssw smh'>
      <div className='menu-content-wrapper scw spta'>
        <h1>MENU</h1>
        <div className='menu-box-wrapper'>
          <Link className='mbw-sizing' to="/cupcakes">
            <div className='mbw-item'>
              <div style={{ backgroundImage: `url('${Cupcake}')` }} className='mbw-img-wrapper'>
                <h3>CUPCAKES</h3>
              </div>
              <div className='spacer'></div>
            </div>
          </Link>
          <Link className='mbw-sizing' to="/cakes">
            <div className='mbw-item'>
              <div style={{ backgroundImage: `url('${Cake}')` }} className='mbw-img-wrapper'>
                <h3>CAKES</h3>
              </div>
              <div className='spacer'></div>
            </div>
          </Link>
          <Link className='mbw-sizing'  to="/bread">
            <div className='mbw-item'>
              <div style={{ backgroundImage: `url('${Bread}')` }} className='mbw-img-wrapper'>
                <h3>BREAD</h3>
              </div>
              <div className='spacer'></div>
            </div>
          </Link>  
        </div>
      </div>
    </div>
  )
}

export default Menu