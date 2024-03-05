import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PagePayment = () => {
    const navigate = useNavigate();

    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [fullname, setFullName] = useState("");
    const [note, setNote] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [total_money, setTotalMoney] = useState("");
    const [user_id, setUserId] = useState("");


    useEffect(() => {
        // Lấy thông tin người dùng từ localStorage
        const user = JSON.parse(localStorage.getItem('user'));

        // Kiểm tra xem có thông tin người dùng không
        if (user) {
            // Gán tên người dùng để hiển thị
            setUserId(user.id); // Thay 'name' bằng trường tương ứng trong đối tượng người dùng\
            setFullName(user.fullname);
            setEmail(user.email);
            setPhoneNumber(user.phone_number);
            setAddress(user.address);

        }
    }, []);

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems'));

        if (cartItems) {
            const total = cartItems.reduce((total, item) => total + (parseInt(item.price) * item.quantity), 0);

            // Gán tổng giá trị vào state
            setTotalMoney(total);
        }
    }, []);

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
    };
    const handleNoteChange = (event) => {
        setNote(event.target.value);
    };
    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleConfirmPayment = async () => {
        try {
            const orderData = {
                address,
                email,
                fullname,
                note,
                order_date: new Date().toISOString(),
                phone_number,
                total_money,
                user_id,
            };

            // Tạo đơn hàng chính
            const Response = await fetch('http://localhost:8090/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });

            if (Response.ok) {
                localStorage.removeItem('cartItems'); // Xóa giỏ hàng từ Local Storage sau khi đặt hàng thành công
                navigate("/checkout")
                window.location.reload();
            } else {
                console.error('Error placing order:', Response.statusText);
            }
        } catch (error) {
            console.error('Error placing order:', error);
        }
    };
    return (
        <section className="section-content padding-y">
            <div className="container" style={{ Height: "780px" }}>

                <div className="card mb-4">
                    <div className="card-body">
                        <h4 className="card-title mb-3">Delivery info</h4>

                        {/* <div className="form-row">
                            <div className="form-group col-sm-6">
                                <label className="js-check box active">
                                    <input type="radio" name="dostavka" value="option1" checked />
                                    <h6 className="title">Standart delivery</h6>
                                    <p className="text-muted">Free by airline within 20 days</p>
                                </label>
                            </div>
                            <div className="form-group col-sm-6">
                                <label className="js-check box">
                                    <input type="radio" name="dostavka" value="option1" />
                                    <h6 className="title">Fast delivery</h6>
                                    <p className="text-muted">Extra 20$ will be charged </p>
                                </label>
                            </div>
                        </div> */}

                        <div className="form-row">
                            <div className="col form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder="" value={email}
                                    onChange={handleEmailChange} />
                            </div>
                            <div className="col form-group">
                                <label>Full Name</label>
                                <input type="text" className="form-control" placeholder="" value={fullname} onChange={handleFullNameChange} />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col form-group">
                                <label>Address</label>
                                <input type="text" className="form-control" placeholder="" value={address} onChange={handleAddressChange} />
                            </div>
                            <div className="col form-group">
                                <label>Phone</label>
                                <input type="text" className="form-control" placeholder="" value={phone_number} onChange={handlePhoneNumberChange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Note</label>
                            <textarea className="form-control" rows="2" value={note} onChange={handleNoteChange}></textarea>
                        </div>

                    </div>
                </div>


                <div className="card mb-4">
                    <div className="card-body">
                        <h4 className="card-title mb-4">Payment</h4>
                        <form style={{ Width: "320px" }}>
                            {/* <div className="form-group">
                                <label for="username">Name on card</label>
                                <input type="text" className="form-control" name="username" placeholder="Ex. John Smith" required="" />
                            </div>

                            <div className="form-group">
                                <label for="cardNumber">Card number</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" name="cardNumber" placeholder="" />
                                    <div className="input-group-append">
                                        <span className="input-group-text">
                                            <i className="fab fa-cc-visa"></i> &nbsp; <i className="fab fa-cc-amex"></i> &nbsp;
                                            <i className="fab fa-cc-mastercard"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md flex-grow-0">
                                    <div className="form-group">
                                        <label className="hidden-xs">Expiration</label>
                                        <div className="form-inline" style={{ Width: "220px" }}>
                                            <select className="form-control" style={{ Width: "100px" }}>
                                                <option>MM</option>
                                                <option>01 - Janiary</option>
                                                <option>02 - February</option>
                                                <option>03 - February</option>
                                            </select>
                                            <span style={{ width: "20px", textAlign: "center" }}> / </span>
                                            <select className="form-control" style={{ Width: "100px" }}>
                                                <option>YY</option>
                                                <option>2018</option>
                                                <option>2019</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label data-toggle="tooltip" title="3 digits code on back side of the card">CVV <i className="fa fa-question-circle"></i></label>
                                        <input className="form-control" required="" type="text" />
                                    </div>
                                </div>
                            </div> */}
                            <button
                                className="subscribe btn btn-primary btn-block"
                                type="button"
                                onClick={handleConfirmPayment}
                            >
                                Confirm
                            </button>
                        </form>
                    </div>
                </div>
                <br />
            </div>
        </section>
    )
};

export default PagePayment;