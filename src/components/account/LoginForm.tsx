import React, {FC, useContext, useState} from "react";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";


const LoginForm: FC = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const {store} = useContext(Context);
    return (
        <>
            <input
                type="text"
                placeholder="Email"
                onChange={e => setLogin(e.target.value)}
                value={login}
            />
            <input
                type="password"
                placeholder="Пароль"
                onChange={e => setPassword(e.target.value)}
                value={password}
            />
            <button onClick={() => store.login(login, password)}>Войти</button>
        </>
    );
};


export default observer(LoginForm);