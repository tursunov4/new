
import "./style.css"
import {useNavigate } from "react-router-dom"
const LoginPage = () => {
    const token = sessionStorage.getItem("token")
    const navigate = useNavigate()
     const handleLogut =()=>{
        sessionStorage.removeItem("token")
        navigate("/")
     }
  return (
    <div>
        {
             !token ? 
                <>
                <div className="loginPage__wrapp">
                <h4>Please log in</h4>             
                <a href="https://admin.mytestproject.click/accounts/okta/login/">Login </a>
                </div>
              </>
            :
                <>
                <div className="loginPage__wrapp">
                <h4>You are logged in!</h4>
                <a onClick={handleLogut}>Logout</a>
                </div>
              </>  
            
        }
    </div>
  )
}

export default LoginPage