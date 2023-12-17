import {useNavigate} from "react-router-dom"
const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h1 style={{ fontSize: '72px', color: '#e74c3c' }}>404</h1>
    <h2 style={{ color: '#e74c3c' }}>Page Not Found</h2>
    <p style={{ fontSize: '18px', color: '#fff' , margin:"10px 0" }}>
      Sorry, the page you are looking for might be in another castle.
    </p>
        <button onClick={()=>navigate("/")}  className='notfoundbtn'>Back to homepage</button>
  </div>
  )
}

export default NotFound