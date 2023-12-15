import  { useState } from 'react'
import "./filter.css"
const Filter = () => {
    const [filtername , setFiltername] = useState(1)
    const handleFilter =(id)=>{
        setFiltername(id)
    }
  return (
    <ul className='filter-list'>
      <li onClick={()=>handleFilter(1)} className={filtername==1 ? "filter-list__item filter-active" : "filter-list__item"}>Filter1</li>
      <li onClick={()=>handleFilter(2)}  className={filtername==2? "filter-list__item filter-active" : "filter-list__item"}>Filter1</li>
      <li onClick={()=>handleFilter(3)}  className={filtername==3 ? "filter-list__item filter-active" : "filter-list__item"}>Filter1</li>
      <li onClick={()=>handleFilter(4)}  className={filtername==4 ? "filter-list__item filter-active" : "filter-list__item"}>Filter1</li>
      <li onClick={()=>handleFilter(5)}  className={filtername==5 ? "filter-list__item filter-active" : "filter-list__item"}>Filter1</li>
      <li onClick={()=>handleFilter(6)}  className={filtername==6 ? "filter-list__item filter-active" : "filter-list__item"}>Filter1</li>
      <li onClick={()=>handleFilter(7)}  className={filtername==7 ? "filter-list__item filter-active" : "filter-list__item"}>Filter1</li>   
    </ul>
  )
}

export default Filter