import React, { useContext } from 'react'
import './ProductDisplay.css'
import dim from '../Assets/dimentions.jpg'
import star from '../Assets/star_icon.png'
import star_dull from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt=''></img>
          <img src={product.image} alt=''></img>
          <img src={product.image} alt=''></img>

        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt=''></img>
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star} alt=''></img>
          <img src={star} alt=''></img>
          <img src={star} alt=''></img>
          <img src={star} alt=''></img>
          <img src={star_dull} alt=''></img>
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className='productdisplay-right-prices-old'>${product.old_price}</div>
          <div className='productdisplay-right-prices-new'>${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          Once you hold this instrument, created for a lifetime of music, you’ll know it’s something greater than wood and strings—it’s a reflection of thought, inspiration, and imagination, shaped into sound with unshakable confidence. It’s an undeniable realization radiating the raw beauty of nature while embodying uncompromising precision and artisanship.

          <img src={dim} alt=''></img>

        </div>
        <button onClick={() => { addToCart(product.id) }}>ADD TO CART </button>
      </div>
    </div>
  )
}

export default ProductDisplay