import React from "react";
import FormLogin from "../pages/login/FormLogin";
import { LoginProvider } from "../context/LoginContext";
function Login(props) {
    return (
        <>
            <div className="container">
                <LoginProvider>
                    <FormLogin />
                </LoginProvider>
            </div>
        </>
    )
}
export default Login;