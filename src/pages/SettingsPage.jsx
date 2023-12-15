import {HeadTitle} from "../styles/global.jsx";
import {SettingsWrapper} from "../styles/Settings.jsx";
import Diagram from "../components/settings/Diagram.jsx";
import {useForm} from "react-hook-form";
import {LoginForm} from "../styles/Login.jsx";
import {useRef} from "react";
import UsersTable from "../components/settings/UsersTable.jsx";
import SettingsForm from "../components/settings/SettingsForm.jsx";

export default function SettingsPage() {
    return (
        <>
            <HeadTitle>Settings</HeadTitle>
            <SettingsWrapper>
                <div>
                    <Diagram/>
                </div>
                <div>
                    <SettingsForm/>
                </div>
            </SettingsWrapper>
            <UsersTable/>
        </>
    );
}
