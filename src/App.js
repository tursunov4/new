
import {  Routes , Route } from "react-router-dom";
import Sidebar from "./components/layouts/Sidebar"
import Shopage from "./pages/ShopPage"
import LoginPage from './pages/LoginPage';
import Loading from './pages/Loading';
import UserProfile from './pages/Profile';
import OrdersPage from './pages/OrdersPage';
import NotFound from './pages/NotFound';
import Orderhistory from "./pages/Orderhistory";
import Pus from "./pages/Pus";
function App() {
  const token = sessionStorage.getItem("token")
  return (
   
      <Routes>
         <Route path='*' element={<NotFound/>} />
         <Route path='/' element={<Sidebar/>}>
         <Route index element={<Shopage/>}/>
          {
            token &&  <Route path='/profil' element={<UserProfile/>}/>
          }
         {
          token && <Route path='/orders' element={<OrdersPage/>} />
         }
         {
          token && <Route path="/my-history" element={<Orderhistory/>} />
         }
         <Route path='/login' element={<LoginPage/>} />
        </Route>
         <Route path="/pus" element={<Pus/>}/>
        <Route path='/accounts/callback' element={<Loading/> } />
      </Routes>  
 
  )
}

export default App
