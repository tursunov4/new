import React, { useState } from 'react'
import Slider from "react-slider"
import './style.css'
const RangeSlider = () => {
    const [rangenums , setRangeNums] = useState({
        min_price:0,
        max_price:100
    })
    const [pricemin ,setPricemin] = useState(0)
    const [pricemax , setPricemax] = useState(100)
    const handleChange = (newValues) =>{
        setPricemin(newValues[0])
        setPricemax(newValues[1])
       } 
  return (
    <>
     <Slider
              step={1}
           className="slider"
            value={[pricemin, pricemax] }
        onChange={handleChange}
        min={rangenums.min_price}
        max={rangenums.max_price}
      />
        <div className="price__change-wrap">
       <p>{pricemin}₽</p>
        <p>{pricemax}₽</p>
        </div>

    </>
  )
}       

export default RangeSlider