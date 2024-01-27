import { useState } from "react"
import  "./select.css"
import { IoIosArrowDown } from "react-icons/io";

const Costumselect2 = ({selected , setSelected , options ,plecholders}) => {
    const [isActive , setIsActive ] = useState(false)
    setTimeout(() => {
      window.onclick = function(event) {
        if(event.target.id !== "select" && isActive === true){
           setIsActive(false)
        }
     }
    }, 30);
  return (
    <div id="select"  className="dropdown">
        <div  className="dropdown-btn" onClick={()=>setIsActive(!isActive)}>
            {selected === "" ? `${plecholders}` : options[options?.findIndex(function(obj) { return obj.id === selected; })]?.name}
            <span className={isActive ? "dropdown__arrow" :" "}><IoIosArrowDown/></span>
        </div>
        {
            isActive && (
                <div   className="dropdown-content">
                    <div id={""}  onClick={(e)=>{setSelected(""); setIsActive(false)}} className="dropdown-item">
                            All
                        </div>
                    {
                      options?.map((option, index) =>(
                        <div id={option?.id}  key={index} onClick={()=>{setSelected(option.id); setIsActive(false)  }} className="dropdown-item">
                            {option?.name}
                        </div>
                      ))
                    }
                  
                </div>
            )
        }
    </div>
  )
}

export default Costumselect2