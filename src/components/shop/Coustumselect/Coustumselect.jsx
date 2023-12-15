import { useState } from "react"
import  "./select.css"
import { IoIosArrowDown } from "react-icons/io";
const Costumselect = ({selected , setSelected , options ,plecholders}) => {
    const [isActive , setIsActive ] = useState(false)
  return (
    <div  className="dropdown">
        <div  className="dropdown-btn" onClick={()=>setIsActive(!isActive)}>
            {selected == "" ? `${plecholders}` : options[options?.findIndex(function(obj) { return obj.id === selected; })]?.title}
            <span className={isActive ? "dropdown__arrow" :" "}><IoIosArrowDown/></span>
        </div>
        {
            isActive &&(
                <div   className="dropdown-content">
                    {
                      options?.map((option, index) =>(
                        <div id={option?.id}  key={index} onClick={()=>{setSelected(option.id); setIsActive(false)}} className="dropdown-item">
                            {option?.title}
                        </div>
                      ))
                    }
                </div>
            )
        }
    </div>
  )
}

export default Costumselect