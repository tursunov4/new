import { Outlet } from "react-router";
import { HiOutlineMenu } from "react-icons/hi";
import SideBarLinks from "./SidebarLinks.jsx";
import { SideBarProfile } from "./SideBarProfile.jsx";
import { useState } from "react";
import {
  SideBarBody,
  SideBarHeader,
  SidebarStyled,
} from "../../styles/SidebarStyled.jsx";
import logomini from "../../assets/logomini.png";
import logo from "../../assets/logo.png";
import "./layout.css";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const userContext = useContext(AuthContext);
  const navigate = useNavigate();
  const style = {
    display: "flex",
    alignItems: "start",
    flexWrap: "wrap",
    width: "100%",
  };
  const token = sessionStorage.getItem("token");
  const handleClose = () => {
    setOpen(!false);
  };
  return (
    <div style={style}>
      <SidebarStyled open={open}>
        <SideBarBody open={open}>
          {!open && (
            <div>
              <img
                className="sidebar__minilogo"
                width={40}
                src={logomini}
                alt=""
              />
            </div>
          )}
          <SideBarHeader open={open}>
            {open && (
              <div>
                <img
                  width={150}
                  className="sidebar__mainlogo"
                  src={logo}
                  alt=""
                />
              </div>
            )}
            <button onClick={() => setOpen(!open)}>
              <HiOutlineMenu />
            </button>
          </SideBarHeader>
          {token && <SideBarProfile setOpen={setOpen} open={open} />}
          <SideBarLinks open={open} setOpen={setOpen} />
        </SideBarBody>
      </SidebarStyled>
      <div style={{ padding: "20px", flex: "10%", overflow: "auto" }}>
        <Outlet />
      </div>
    </div>
  );
}
