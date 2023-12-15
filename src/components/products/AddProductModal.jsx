import {LoginForm} from "../../styles/Login.jsx";
import Modal from "../Modal.jsx";
import {useState} from "react";
import ProductPhoto from "../../assets/products/mac.png";
import {useForm} from "react-hook-form";
import ProductServices from "../../../services/ProductServices.jsx";


export default function AddProductModal() {

    const [modalActive, setModalActive] = useState(false);
    const [img, setImg] = useState(ProductPhoto);
    const [imgUrl, setImgUrl] = useState('');

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
            title: event.target.title.value,
            description: event.target.description.value,
            price: event.target.price.value,
            discount: event.target.discount.value,
            photo: img,
        }
        await ProductServices.updateProduct(updatedProduct);
        setModalActive(false)
    };

    const clickHandler = (event) => {
        event.preventDefault()
        setModalActive(true)
    }

    return (<>
        <button onClick={(event) => clickHandler(event)}>
            Добавить
        </button>
        <Modal active={modalActive} setActive={setModalActive}>
            <div>
                <h3>
                    <span></span>
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

                    />
                </div>
                <div>
                    <label>Описание</label>
                    <textarea
                        {...register("description", {required: "Password is require!"})}

                    />
                </div>
                <div>
                    <label>Цена</label>
                    <input
                        {...register("price", {required: "Name is require!"})}
                        type="number"

                    />
                </div>
                <div>
                    <label>Скидка</label>
                    <input
                        {...register("discount", {required: "Name is require!"})}
                        type="number"

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
    </>)
}