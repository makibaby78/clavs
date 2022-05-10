import React from 'react'
import './Philosophy.css'
import BGP from '../../../../images/pexels-lucie-liz-3256807.jpg'

const Philosophy = () => {
  return (
    <div className='philosophy-wrapper bt ssw' style={{ backgroundImage: `url('${BGP}')` }}>
        <div className='philosophy-content-wrapper sw'>
            <div className='text-wrapper'>
                <h2>Our Philosophy</h2>
                <p>Clav's Pastries makes hand-made, old-world European rustic bread and pastries seven days a week. The unique flavors, textures, and crust give our breads a worderful versatility and a result of  meticulous preparation using age-old artisan bread making techniques, premium ingredients, and the finest stone-hearth over imported from Europe.</p>
                <span>Read More About Our Story</span>
            </div>
        </div>
    </div>
  )
}

export default Philosophy