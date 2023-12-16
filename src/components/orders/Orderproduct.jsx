import {ProductCard} from "../../styles/Shop.jsx";
import Modal from "../Modal.jsx";
import {ModalButtonsWrapper} from "../../styles/Modal.jsx";
import {useState} from "react";
import OrderServices from "../../services/OrderServices.jsx";
import {useNavigate} from "react-router-dom"


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import http from "../../axios.js";

export default function OrderProduct({product ,id, refresh , setRefresh}) {
    const [modalActive, setModalActive] = useState(false);
    const [buttonActive, setButtonActive] = useState(false);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const token = sessionStorage.getItem("token")
    const navigate = useNavigate();
    const handleClick =() =>{
           http.delete(`/api/v1/order/delete/${id}/`).then((res)=>{
            setRefresh(!refresh)
            setModalActive(false)
           }).catch((err)=>{
            console.log(err)
           })
    }
    return (<div className="product__wrapper" onClick={() => setModalActive(!modalActive)}>
         <img className="porduct__img" src={product.images?.at(0)?.image} alt=""/>         
        <h2 className="product__title">{product.title}</h2>
        <h4 className="product__price">{product.price} {product?.currency_title}</h4>
        <p className="product__description">{product.description}</p>
        <Modal active={modalActive} setActive={setModalActive}>
            <div className="product__modalwrap">
            <Swiper
        style={{
          '--swiper-navigation-color': '#1F2A40',
          '--swiper-pagination-color': '#1F2A40',
        }}
        // loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="modalslide1"
      >
        {
          product?.video &&
          <SwiperSlide >
            <video className="modal_img" width="100%"  height={"100%"} controls src={product?.video} alt=""/>
          </SwiperSlide>
        }
        {
          product.images?.map((item , index) =>(
            <SwiperSlide key={index}>
            <img className="modal_img" src={item?.image} alt=""/>
          </SwiperSlide>
          ))
        }
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        // loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="modalslide2"
      >
        {
          product?.video &&
         <SwiperSlide >
        <video  width="100%" height={"100%"}  preload="none" autoPlay   muted  loop className="modalslide2__img" src={product?.video} alt=""/>
        </SwiperSlide>
        }
        {
          product?.images?.map((item , index)=>(
        <SwiperSlide key={index}>
        <img className="modalslide2__img" src={item?.image} alt=""/>
        </SwiperSlide>
          ))
        }
      </Swiper>             
                <h2>{product?.title}</h2>
                <h4 className="product__price">{product?.price} {product?.currency_title}</h4>
                <p>{product?.description}</p>
            </div>
            <ModalButtonsWrapper active={buttonActive}>
                <button onClick={() => handleClick(product?.id)} onMouseOver={() => setButtonActive(true)}>
                  Cancel
                </button>
              
            </ModalButtonsWrapper>
        </Modal>
    </div>)
}