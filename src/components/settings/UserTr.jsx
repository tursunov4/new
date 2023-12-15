import { useState } from "react";
import Modal from "../Modal";
import { useForm } from "react-hook-form";
import { LoginForm } from "../../styles/Login";
import ProductServices from "../../../services/ProductServices.jsx";
import UserServices from "../../../services/UserServices.jsx";
import SettingsServices from "../../../services/SettingsServices.jsx";
export default function UserTr({user}) {
  const [modalActive, setModalActive] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (event) => {
        event.preventDefault();
        const updatedUser = {
            id: user.id,
            amount_of_deals: event.target.amount_of_deals.value
        }
        await SettingsServices.updateUserLimit(updatedUser);
        setModalActive(false)
    };


  return (
    <>
      <tr onClick={() => setModalActive(true)}>
        <td>{user.id}</td>
        <td>{user.username}</td>
        <td>{user.amount_of_deals}</td>
        {/*<td>0</td>*/}
        {/*<td>875$</td>*/}
      </tr>
      <Modal active={modalActive} setActive={setModalActive}>
        <LoginForm onSubmit={onSubmit}>
          <h2>{user.username}</h2>
          <div>
            <label>Limit</label>
            <input
              {...register("amount_of_deals", { required: "Password is require!" })}
              type="number"
              defaultValue={user.amount_of_deals}
            />
          </div>
          <div>
            <input type="submit" value="Сохранить" />
          </div>
        </LoginForm>
      </Modal>
    </>
  );
}
