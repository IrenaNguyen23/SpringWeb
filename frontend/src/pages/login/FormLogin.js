import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from '../../context/LoginContext';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import FacebookLogin from 'react-facebook-login';

const FormLogin = () => {
    const navigate = useNavigate();

    const { handleChange, handleSubmit, loading, error, formData } = useContext(LoginContext);
    const handleLoginSuccess = (credentialResponse) => {
        const decode = jwtDecode(credentialResponse.credential);

        // Lưu thông tin vào sessionStorage
        sessionStorage.setItem('gmailCredential', JSON.stringify(decode));

        console.log(decode);
        navigate("/")
        window.location.reload();

    };

    const handleLoginError = () => {
        console.log('Login Failed');
    };

    const responseFacebook = (response) => {
        console.log("Login result", response);
    }
    const componentClicked = (data) => {
        console.warn(data);
    }

    return (
        <section className="section-content padding-y">
            <div className="card mx-auto" style={{ maxWidth: "520px", marginTop: "40px;" }}>
                <article className="card-body">
                    <header className="mb-4"><h4 className="card-title">Login</h4></header>

                    <form onSubmit={handleSubmit}>
                        {/* Email input */}
                        <div className="form-outline mb-4 ">
                            <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleChange} />
                            <label className="form-label" htmlFor="form2Example1">
                                Email address
                            </label>
                        </div>
                        {/* Password input */}
                        <div className="form-outline mb-4">
                            <input type="password" id="password" name="password" className="form-control" value={formData.password} onChange={handleChange} />
                            <label className="form-label" htmlFor="form2Example2">
                                Password
                            </label>
                        </div>
                        {/* 2 column grid layout for inline styling */}
                        <div className="row mb-4">
                            <div className="col d-flex justify-content-center">
                                {/* Checkbox */}
                                <label className="custom-control custom-checkbox"> <input type="checkbox" className="custom-control-input" /> <div className="custom-control-label"> Remember Password </div> </label>

                            </div>
                            <div className="col">
                                {/* Simple link */}
                                <a href="#!">Forgot password?</a>
                            </div>
                        </div>
                        {/* Submit button */}
                        <button type="submit" className="btn btn-success btn-block mb-4" disabled={loading}>
                            {loading ? 'Đang đăng nhập...' : 'Sign in'}
                        </button>
                        {/* Register buttons */}
                        <div className="text-center">
                            <p>
                                Not a member? <a href="/register">Register</a>
                            </p>
                            <p>or sign up with:</p>
                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <GoogleOAuthProvider clientId="988031595318-mhvbe5vbu285hpoovdqi9b8evg4uqi8v.apps.googleusercontent.com">
                                    <GoogleLogin
                                        onSuccess={handleLoginSuccess}
                                        onError={handleLoginError}
                                    />
                                </GoogleOAuthProvider>
                                {/* <i className="fab fa-google" /> */}
                            </button>
                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <FacebookLogin
                                    appId="361006963310786"
                                    autoLoad={false}
                                    fields="name,email,picture"
                                    onClick={componentClicked}
                                    callback={responseFacebook} />
                                {/* <i className="fab fa-facebook-f" /> */}
                            </button>
                            {/* <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-twitter" />
                            </button>
                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-github" />
                            </button> */}
                        </div>
                    </form>
                    {error && <div className="alert alert-danger mt-3">{error}</div>}
                </article>
            </div>
            <p className="text-center mt-4">Don't have an account? <Link to="/register">Sign Up</Link></p>
            <br />
        </section>

    )
};
export default FormLogin;
