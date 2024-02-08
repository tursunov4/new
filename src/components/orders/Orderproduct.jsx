import { Discount, DiscountWrapper, ProductCard } from "../../styles/Shop.jsx";
import Modal from "../Modal.jsx";
import { ModalButtonsWrapper } from "../../styles/Modal.jsx";
import { useContext, useState } from "react";
import OrderServices from "../../services/OrderServices.jsx";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import http from "../../axios.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../contexts/AuthContext.jsx";

export default function OrderProduct({ product, id, refresh, setRefresh }) {
  const [modalActive, setModalActive] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const { refresh2, setRefresh2 } = useContext(AuthContext);
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  const handleClick = () => {
    setDisabled(true);

    http
      .delete(`/api/v1/order/delete/${id}/`)
      .then((res) => {
        setDisabled(false);
        toast.warn("Your order has been cancelled!!!", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setTimeout(() => {
          setRefresh(!refresh);
          setRefresh2(!refresh2);
          setModalActive(false);
        }, 1000);
      })
      .catch((err) => {
        setDisabled(false);
        console.log(err);
      });
  };
  return (
    <div
      className="product__wrapper"
      onClick={() => setModalActive(!modalActive)}
    >
      <ToastContainer />
      {product?.discount_price - 0 > 0 && (
        <DiscountWrapper>
          <Discount>{product?.discount_price}%</Discount>
        </DiscountWrapper>
      )}
      <img className="porduct__img" src={product.images?.at(0)?.image} alt="" />
      <h2 className="product__title">{product.title}</h2>
      <h4 className="product__price">
        {product.price} {product?.currency_title}
      </h4>
      <p className="product__description">{product.description}</p>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className="product__modalwrap">
          <Swiper
            style={{
              "--swiper-navigation-color": "#1F2A40",
              "--swiper-pagination-color": "#1F2A40",
            }}
            // loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="modalslide1"
          >
            {product?.video && (
              <SwiperSlide>
                <video
                  className="modal_img"
                  width="100%"
                  height={"100%"}
                  controls
                  src={product?.video}
                  alt=""
                />
              </SwiperSlide>
            )}
            {product.images?.map((item, index) => (
              <SwiperSlide key={index}>
                <img className="modal_img" src={item?.image} alt="" />
              </SwiperSlide>
            ))}
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
            {product?.video && (
              <SwiperSlide>
                <video
                  width="100%"
                  height={"100%"}
                  preload="none"
                  className="modalslide2__img"
                  src={product?.video}
                  alt=""
                />
              </SwiperSlide>
            )}

            {product?.images?.map((item, index) => (
              <SwiperSlide key={index}>
                <img className="modalslide2__img" src={item?.image} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
          <table className="product__table">
            <thead>
              <tr>
                <th className="procut__thead">Name</th>
                <th className="procut__thead">Price</th>
                <th className="procut__thead">Discount price</th>
                {product?.info?.map((item, index) => (
                  <th key={index} className="procut__thead">
                    {item?.key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="procut__td">{product?.title}</td>
                <td className="procut__td">
                  {product?.price} {product?.currency_title}
                </td>
                <td className="procut__td">
                  {product?.discount_price ? product?.discount_price : 0}%
                </td>

                {product?.info?.map((item, index) => (
                  <td key={index} className="procut__td">
                    {item?.value}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
          <ul className="product__mobiletable">
            <li className="product__mobiletable-inner">
              <h5 className="product__mobile__name">Name</h5>
              <h5 className="product__mobile__name">{product?.title}</h5>
            </li>
            <li className="product__mobiletable-inner">
              <h5 className="product__mobile__name">Price</h5>
              <h5 className="product__mobile__name">
                {product?.price} {product?.currency_title}
              </h5>
            </li>
            <li className="product__mobiletable-inner">
              <h5 className="product__mobile__name">Discount price</h5>
              <h5 className="product__mobile__name">
                {product?.discount_price ? product?.discount_price : 0}%
              </h5>
            </li>
            {product?.info?.map((item, index) => (
              <li key={index} className="product__mobiletable-inner">
                <h5 className="product__mobile__name">{item?.key}</h5>
                <h5 className="product__mobile__name">{item?.value}</h5>
              </li>
            ))}
          </ul>
          <div dangerouslySetInnerHTML={{ __html: product?.description }}></div>
        </div>
        <ModalButtonsWrapper active={buttonActive}>
          {product?.status !== "Purchased" ||
            (product?.status !== "Cancelled" && (
              <button
                disabled={disabled}
                onClick={() => handleClick(product?.id)}
                onMouseOver={() => setButtonActive(true)}
              >
                Remove
              </button>
            ))}
        </ModalButtonsWrapper>
      </Modal>
    </div>
  );
}
