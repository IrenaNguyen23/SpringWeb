import React, { useState } from "react";
const Register = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        password: '',
        email: '',
        address:'',
        phone:''
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
            } else {
                setMessage("Registration failed.");
            }
        } catch (error) {
            setMessage("An error occurred: " + error.message);
        }
    };
    return (

        <div className="card-body p-md-5">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                    <form onSubmit={handleRegister}>
                        <div>
                            <label>Username:</label>
                            <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Address:</label>
                            <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Phone:</label>
                            <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                        </div>
                        
                        <button type="submit" className="btn btn-success">Register</button>
                    </form>
                    {message && <p>{message}</p>}
                </div>
            </div>
        </div>

    );
};
export default Register;