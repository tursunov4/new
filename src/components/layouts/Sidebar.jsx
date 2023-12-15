import {Outlet} from "react-router"  
import { HiOutlineMenu } from "react-icons/hi";
import SideBarLinks from "./SidebarLinks.jsx";
import { SideBarProfile } from "./SideBarProfile.jsx";
import { useState } from "react";
import {
  SideBarBody,
  SideBarHeader,
  SidebarStyled,
} from "../../styles/SidebarStyled.jsx";

import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const userContext = useContext(AuthContext);
  const style = {
    display: "flex",
    alignItems: "start",
    flexWrap: "wrap",
    width: "100%",
  };
  const token = sessionStorage.getItem("token")

  return (
    <div style={style}>
      <SidebarStyled open={open}>
        <SideBarBody open={open}>
          <SideBarHeader open={open}>
            <h3>Market</h3>
            <button onClick={() => setOpen(!open)}>
              <HiOutlineMenu />
            </button>
          </SideBarHeader>
          {
            token &&
             <SideBarProfile setOpen={setOpen} open={open} />
          }

          <SideBarLinks open={open} />
        </SideBarBody>
      </SidebarStyled>
      <div style={{ padding: "20px", flex: "10%", overflow: "auto" }}>
        <Outlet />
      </div>
    </div>
  );
}
