import {Discount, DiscountWrapper, ProductCard} from "../../styles/Shop.jsx";
import Modal from "../Modal.jsx";
import {ModalButtonsWrapper} from "../../styles/Modal.jsx";
import {useState} from "react";
import ProductPhoto from "../../assets/products/mac.png";
import {LoginForm} from "../../styles/Login.jsx";
import {useForm} from "react-hook-form";
import SettingsServices from "../../../services/SettingsServices.jsx";
import ProductServices from "../../../services/ProductServices.jsx";

export default function ProductTr({product}) {
    const [modalActive, setModalActive] = useState(false);
    const [img, setImg] = useState(ProductPhoto);
    const [imgUrl, setImgUrl] = useState(ProductPhoto);

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const changeHandler = (e) => {
        const objectUrl = URL.createObjectURL(e.target.files[0]);
        setImgUrl(objectUrl);
        setImg(e.target.files[0])
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        const updatedProduct = {
            id: product.id,
            title: event.target.title.value,
            description: event.target.description.value,
            price: event.target.price.value,
            discount: event.target.discount.value,
            photo: img,
        }
        await ProductServices.updateProduct(updatedProduct);
        setModalActive(false)
    };

    return (
        <>
            <tr onClick={() => setModalActive(true)}>
                <td>#{product && product.id}</td>
                <td>
                    <img width="200px" src={product && product.photo} alt=""/>
                </td>
                <td>{product && product.title}</td>
                <td>{product && product.price}$</td>
                <td>{product && product.discount}%</td>
                <td>12.10.2023</td>
                <td>{/* <OrdersSelect /> */}{product && product.product_status_title}</td>
            </tr>
            <Modal active={modalActive} setActive={setModalActive}>
                <div>
                    <h3>
                        <span>{product && product.product_status_title}</span>
                    </h3>
                    <div className="img-wrapper">
                        <img src={imgUrl} alt=""/>
                    </div>
                </div>
                <LoginForm onSubmit={onSubmit} style={{height: "300px", overflow: "auto"}}>
                    <div>
                        <label>Название</label>
                        <input
                            {...register("title", {required: "Name is require!"})}
                            type="text"
                            defaultValue={product && product.title}
                        />
                    </div>
                    <div>
                        <label>Описание</label>
                        <textarea
                            {...register("description", {required: "Password is require!"})}
                            defaultValue={product && product.description}
                        />
                    </div>
                    <div>
                        <label>Цена</label>
                        <input
                            {...register("price", {required: "Name is require!"})}
                            type="number"
                            defaultValue={product && product.price}
                        />
                    </div>
                    <div>
                        <label>Скидка</label>
                        <input
                            {...register("discount", {required: "Name is require!"})}
                            type="number"
                            defaultValue={product && product.discount}
                        />
                    </div>
                    <div>
                        <label>Картинка</label>
                        <input
                            name='photo'
                            type="file"
                            onChange={(e) => changeHandler(e)}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Сохранить"/>
                    </div>
                </LoginForm>
            </Modal>
        </>
    );
}