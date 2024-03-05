import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const FormRegister = () => {
    const navigate = useNavigate();


    const [formData, setFormData] = useState({
        fullname: '',
        password: '',
        email: '',
        address: '',
        phone_number: '',
        created_at: new Date().toISOString(),
        role_id: '2',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8090/api/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.status === 200) {
                setMessage("Registration successful!");
                alert("Registration successful!");
                navigate("/login")
                
            } else {
                setMessage("Email already exists.");
            }
        } catch (error) {
            setMessage("An error occurred: " + error.message);
        }
        
    };
    return (

        <section
            className="vh-100 bg-image"
        >
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: 15 }}>
                                <div className="card-body p-5">
                                    {message && <p className="text-center ">{message}</p>}
                                    <h2 className="text-uppercase text-center mb-5">
                                        Create an account
                                    </h2>
                                    <form onSubmit={handleRegister}>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="text"
                                                id="form3Example1cg"
                                                className="form-control form-control-lg"
                                                name="fullname"
                                                value={formData.fullname}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label className="form-label" htmlFor="form3Example1cg">
                                                Your Name
                                            </label>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="email"
                                                id="form3Example3cg"
                                                className="form-control form-control-lg"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label className="form-label" htmlFor="form3Example3cg">
                                                Your Email
                                            </label>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="password"
                                                id="form3Example4cg"
                                                className="form-control form-control-lg"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label className="form-label" htmlFor="form3Example4cg">
                                                Password
                                            </label>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="text"
                                                id="form3Example1cg"
                                                className="form-control form-control-lg"
                                                name="address"
                                                value={formData.address}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label className="form-label" htmlFor="form3Example1cg">
                                                Your Address
                                            </label>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="tel"
                                                id="form3Example4cdg"
                                                className="form-control form-control-lg"
                                                name="phone_number"
                                                pattern="[0-9]{10}"
                                                value={formData.phone_number}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label className="form-label" htmlFor="form3Example4cdg">
                                                Your Phone
                                            </label>
                                        </div>
                                        <div className="form-check d-flex justify-content-center mb-5">
                                            <label className="custom-control custom-checkbox"> <input type="checkbox" className="custom-control-input" /> <div className="custom-control-label"> I agree all statements in{" "}
                                                <a href="#!" className="text-body">
                                                    <u>Terms of service</u>
                                                </a></div> </label>

                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <button
                                                type="submit"
                                                className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                            >
                                                Register
                                            </button>
                                        </div>
                                        <p className="text-center text-muted mt-5 mb-0">
                                            Have already an account?{" "}
                                            <a href="/login" className="fw-bold text-body">
                                                <u>Login here</u>
                                            </a>
                                        </p>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
};
export default FormRegister;