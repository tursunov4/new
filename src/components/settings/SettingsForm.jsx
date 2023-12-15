import {LoginForm} from "../../styles/Login.jsx";
import {useForm} from "react-hook-form";
import {useQuery} from "react-query";
import UserServices from "../../../services/UserServices.jsx";
import SettingsServices from "../../../services/SettingsServices.jsx";

export default function SettingsForm() {
    const {data, isLoading, isError} =
        useQuery("settings", () =>
            SettingsServices.getSettings()
        );


    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({});
    const onSubmit = async (data) => {
        console.log(data);
        await SettingsServices.updateSettings(data);
    };

    return (
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Скидка на все товары</label>
                <input
                    {...register("globalDiscount", {required: "GlobalDiscount is require!"})}
                    type="number"
                    defaultValue={data && data.data.global_discount}
                />
                {errors.username && (
                    <p style={{color: "red"}}>This field is required</p>
                )}
            </div>
            <div>
                <label>Дата пополнения</label>
                <input
                    {...register("dateAddLimit", {required: "Date is required!"})}
                    type="date"
                    defaultValue={data && data.data.date_add_limit}

                />
                {errors.password && (
                    <p style={{color: "red"}}>This field is required</p>
                )}
            </div>
            <div>
                <input type="submit" value="Сохранить"/>
            </div>
        </LoginForm>
    )

}