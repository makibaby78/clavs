import './Header.css';
import Logo from '../../images/Sample Logo 1.png'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import OI from '../../images/open white.png'
import CI from '../../images/close white.png'

const Header = () => {
  const [headerVal, setHeaderVal]= useState('')
  const [headerStat, setHeaderStat] = useState('hide')
  
  function showHeader(){
    if(headerVal==='header-res-active'){
      setHeaderVal('')
      setHeaderStat('hide')
    }else{
      setHeaderVal('header-res-active')
      setHeaderStat('')
    }
  }
  function activeHeader(){
    if(headerVal==='header-res-active'){
      setHeaderVal('')
      setHeaderStat('hide')
    }else{
      setHeaderVal('header-res-active')
      setHeaderStat('')
    }
  }
  return (
    <div className='Header'>
      <div className='sw'>
        <div className='header-res-stat'>
          <div className='h-logo-wrapper'>
            <Link to='/clavs'><img width='100%' src={Logo} alt="logo" /></Link>
          </div>
          <div onClick={activeHeader} style={{ backgroundImage: `url('${OI}')`}} className='btn-ho'></div>
        </div>
        <ul className='header-def'>
            <Link to="/clavs" className='ni'><li>Home</li></Link>
            <Link to="/cakes" className='ni'><li>Cakes</li></Link>
            <Link to="/clavs" className='ni'><li><img src={Logo} alt="logo" /></li></Link>
            <Link to="/cupcakes" className='ni'><li>Cupcakes</li></Link>
            <Link to="/contact" className='ni'><li>Contact</li></Link>
        </ul>
        <div className={`header-res ${headerVal}`}>
          <div onClick={showHeader} style={{ backgroundImage: `url('${CI}')` }} className={`btn-hc ${headerStat}`}></div>
            <ul>
                <Link to="/clavs" className="header-res-logo"><li><img src={Logo} alt="logo" /></li></Link>
                <Link to="/clavs"><li>Home</li></Link>
                <Link to="/cakes"><li>Cakes</li></Link>
                <Link to="/cupcakes"><li>Cupcakes</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Header