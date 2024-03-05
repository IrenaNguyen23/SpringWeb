import React, { useEffect, useState } from "react";
import avata1 from '../../assets/images/avatars/avatar1.jpg'
import { Link } from "react-router-dom";
const ProfileSetting = () => {

    const [fullname, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('')



    useEffect(() => {
        // Lấy thông tin người dùng từ localStorage
        const user = JSON.parse(localStorage.getItem('user'));

        // Kiểm tra xem có thông tin người dùng không
        if (user) {
            // Gán tên người dùng để hiển thị
            setUserName(user.fullname); // Thay 'name' bằng trường tương ứng trong đối tượng người dùng
            setEmail(user.email);
            setAddress(user.address);
            setPhoneNumber(user.phone_number);
            setUserId(user.id)
            setPassword(user.password)
        }
    }, []);

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleFullNameChange = (event) => {
        setUserName(event.target.value);
    };
    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleChange = async (e) => {
        e.preventDefault();

        const updatedUser = {
            fullname,
            email,
            address,
            phone_number,
            password
        };

        try {
            const response = await fetch(`http://localhost:8090/api/users/${userId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedUser)
            });

            if (response.status === 200) {
                setMessage("Update successful!");
                alert("Update successful!");
                window.location.reload()                
            } else {
                setMessage("Update Error.");
            }
        } catch (error) {
            setMessage("An error occurred: " + error.message);
        }
        
    };
    return (
        <>
            <section className="section-content padding-y">
                <div className="container">

                    <div className="row">
                        <aside className="col-md-3">
                            <nav className="list-group">
                                <Link className="list-group-item" to="/profile-main"> Account overview  </Link>
                                <Link className="list-group-item" to="/profile-address"> My Address </Link>
                                <Link className="list-group-item" to="/profile-order"> My Orders </Link>
                                <Link className="list-group-item" to="/profile-wishlist"> My wishlist </Link>
                                <Link className="list-group-item" to="/profile-seller"> My Selling Items </Link>
                                <Link className="list-group-item active" to="/profile-setting"> Settings </Link>
                                <Link className="list-group-item" to="/" > Log out </Link>
                            </nav>
                        </aside>
                        <main className="col-md-9">

                            <div className="card">
                                <div className="card-body">
                                    <form className="row" onSubmit={handleChange}>
                                        <div className="col-md-9">
                                            <div className="form-row">
                                                <div className="col form-group">
                                                    <label>Name</label>
                                                    <input type="text" className="form-control" value={fullname} onChange={handleFullNameChange} />
                                                </div>
                                                <div className="col form-group">
                                                    <label>Email</label>
                                                    <input type="email" className="form-control" value={email} onChange={handleEmailChange} />
                                                </div>
                                            </div>

                                            <div className="form-row">
                                            <div className="form-group col-md-6">
                                                    <label>Address</label>
                                                    <input type="text" value={address} className="form-control" onChange={handleAddressChange}/>
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label>Phone</label>
                                                    <input type="text" value={phone_number} className="form-control" onChange={handlePhoneNumberChange}/>
                                                </div>
                                            </div>

                                            <button className="btn btn-primary" type="submit">Save</button>
                                            <button className="btn btn-light">Change password</button>

                                            <br /><br /><br /><br /><br /><br />

                                        </div>
                                        <div className="col-md">
                                            <img src={avata1} className="img-md rounded-circle border" />
                                        </div>
                                    </form>
                                </div>
                            </div>



                        </main>
                    </div>

                </div>
            </section>
        </>
    );
}
export default ProfileSetting;