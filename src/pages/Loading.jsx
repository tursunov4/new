
import { useOktaAuth } from '@okta/okta-react';
import {useNavigate , useParams} from "react-router-dom"
import { useEffect } from 'react';
import axios from "axios"
import { Preloader, PreloaderWrapper } from '../styles/Preloader';

const Loading = () => {
  const navigate = useNavigate()
  const queryParams = new URLSearchParams(window.location.search);
  const token = queryParams.get('token');

  useEffect(()=>{
    if(token){
      sessionStorage.setItem("token", token)
      navigate("/")
    }else{
      navigate("/")
    }
  })

  return (
    <div>
      <PreloaderWrapper>
       <Preloader/>
      </PreloaderWrapper>
    </div>
  )
}

export default Loading