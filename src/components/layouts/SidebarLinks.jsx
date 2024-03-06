// import { SidebarRoutes } from "./SidebarRoutes.jsx";
import {
  SideBarHeader5,
  SideBarLink,
  SideBarLinka,
} from "../../styles/SidebarStyled.jsx";
import { AiOutlineHistory, AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SlLogin } from "react-icons/sl";
import { TbMessage2Exclamation } from "react-icons/tb";
import { ImExit } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { NavLink, useNavigate } from "react-router-dom";
import { TiDocumentText } from "react-icons/ti";

export default function SideBarLinks({ open, setOpen, handleClose }) {
  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");
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

      <SideBarLink onClick={() => setOpen(false)} open={open} to={"/"}>
        <h5>Market</h5>
        <span>
          <AiOutlineShoppingCart />
        </span>
      </SideBarLink>
      <SideBarLink onClick={() => setOpen(false)} open={open} to={"/rule"}>
        <h5>Rules</h5>
        <span>
          <TiDocumentText />
        </span>
      </SideBarLink>
      {token && (
        <>
          <SideBarLink
            onClick={() => setOpen(false)}
            open={open}
            to={"/my-history"}
          >
            <h5>Orders</h5>
            <span>
              <TbMessage2Exclamation />
            </span>
          </SideBarLink>

          <SideBarLink
            onClick={() => setOpen(false)}
            open={open}
            to={"/orders"}
          >
            <h5>History Order</h5>
            <span>
              <AiOutlineHistory />
            </span>
          </SideBarLink>

          <SideBarLink
            onClick={() => setOpen(false)}
            open={open}
            to={"/profil"}
          >
            <h5>Profile</h5>
            <span>
              <CgProfile />
            </span>
          </SideBarLink>
        </>
      )}

      {token ? (
        <>
          <SideBarLink onClick={() => setOpen(false)} open={open} to={"/login"}>
            <h5>Logout</h5>
            <span>
              <ImExit />
            </span>
          </SideBarLink>
        </>
      ) : (
        <>
          <SideBarLink onClick={() => setOpen(false)} open={open} to={"/login"}>
            <h5>Login</h5>
            <span>
              <SlLogin />
            </span>
          </SideBarLink>
        </>
      )}
    </div>
  );
}
