// import { SidebarRoutes } from "./SidebarRoutes.jsx";
import { SideBarHeader5, SideBarLink  , SideBarLinka} from "../../styles/SidebarStyled.jsx";
import { AiOutlineHistory, AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SlLogin } from "react-icons/sl";
import { TbMessage2Exclamation } from "react-icons/tb";
import { ImExit } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import {NavLink, useNavigate} from "react-router-dom"

export default function SideBarLinks({open , setOpen}) {
  const navigate = useNavigate()
  const token = sessionStorage.getItem("token")
  return (
    <div>
      {/* {Object.values(SidebarRoutes()).map((list, index) => (
        <div key={index}>
          <SideBarHeader5 open={open}>{list.title}</SideBarHeader5>
          {list.links.map((link, index) => (
            <SideBarLink key={index} open={open} to={link.path}>
              <h5>{link.title}</h5>
              <span>{link.icon}</span>
            </SideBarLink>
          ))}
        </div>
      ))} */}
       
            <SideBarLink   open={open} to={"/"}>
              <h5>Market</h5>
              <span><AiOutlineShoppingCart /></span>
            </SideBarLink>
            {
              token &&
              <>            
            <SideBarLink open={open} to={"/orders"}>
              <h5>Orders</h5>
              <span><TbMessage2Exclamation /></span>
            </SideBarLink>

            <SideBarLink open={open} to={"/profil"}>
              <h5>Profile</h5>
              <span><CgProfile /></span>
            </SideBarLink>
            
            <SideBarLink open={open} to={"/my-history"}>
              <h5>History Order</h5>
              <span><AiOutlineHistory /></span>
            </SideBarLink>
              </>
            }
    
       
            {
              token ? <>
            
              <SideBarLink  open={open} to={"/login"}>    
                <h5>Logout</h5>
              <span><ImExit /></span>          
              </SideBarLink>
              </> :<>
            <SideBarLink  open={open} to={"/login"} >    
            <h5>Login</h5>
              <span><SlLogin /></span>          
              </SideBarLink>
              </>
            }
          
          
    </div>
  );
}
