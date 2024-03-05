import React from "react";
import img1 from '../../assets/images/items/mockhoa.jpg'
import img2 from '../../assets/images/items/mockhoa.jpg'
import img3 from '../../assets/images/items/mockhoa.jpg'
import img4 from '../../assets/images/items/mockhoa.jpg'
import img5 from '../../assets/images/items/mockhoa.jpg'
import img6 from '../../assets/images/items/mockhoa.jpg'
const category = () => (
    <><section className="section-content padding-y">
        <div className="container">

            <nav className="row">
                <div className="col-md-3">

                    <div className="card card-category">
                        <div className="img-wrap" style={{ background: "#ffd7d7" }}>
                            <img src={img1} />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title"><a href="#">Summer shirts</a></h4>
                            <ul className="list-menu">
                                <li><a href="">Unisex T shirts</a></li>
                                <li><a href="">Casual shirts</a></li>
                                <li><a href="">Scherf Ice cream</a></li>
                                <li><a href="">Another category</a></li>
                                <li><a href="">Great items name</a></li>
                                <li><a href="">Great items name</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card card-category">
                        <div className="img-wrap" style={{ background: "#FFF68D" }}>
                            <img src={img2} />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title"><a href="#">Winter jackets</a></h4>
                            <ul className="list-menu">
                                <li><a href="">Leather jackets</a></li>
                                <li><a href="">Men's jackets</a></li>
                                <li><a href="">Heating battery clothes</a></li>
                                <li><a href="">Jeans jackets</a></li>
                                <li><a href="">Great items name</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card card-category">
                        <div className="img-wrap" style={{ background: "#bcffb8" }}>
                            <img src={img3} />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title"><a href="#">Shorts</a></h4>
                            <ul className="list-menu">
                                <li><a href="">Jeans shorts</a></li>
                                <li><a href="">Swimming shorts</a></li>
                                <li><a href="">Another some shorts</a></li>
                                <li><a href="">Another category</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card card-category">
                        <div className="img-wrap" style={{ background: "#c9fff3" }}>
                            <img src={img4} />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title"><a href="#">Travel bags </a></h4>
                            <ul className="list-menu">
                                <li><a href="">Leather bags</a></li>
                                <li><a href="">Cook & Hold ovens</a></li>
                                <li><a href="">Scherf Ice cream</a></li>
                                <li><a href="">Another category</a></li>
                                <li><a href="">Great items name</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card card-category">
                        <a href="#" className="img-wrap" style={{ background: "#ddffeb" }}>
                            <img src={img5} />
                        </a>
                        <div className="card-body">
                            <h4 className="card-title"><a href="#">Great items</a></h4>
                            <ul className="list-menu">
                                <li><a href="">Combi steamers</a></li>
                                <li><a href="">Cook & Hold ovens</a></li>
                                <li><a href="">Scherf Ice cream</a></li>
                                <li><a href="">Another category</a></li>
                                <li><a href="">Great items name</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card card-category">
                        <a href="#" className="img-wrap" style={{ background: "#dee4ff" }}>
                            <img src={img6} />
                        </a>
                        <div className="card-body">
                            <h4 className="card-title"><a href="#">Kitchen furniture</a></h4>
                            <ul className="list-menu">
                                <li><a href="">Combi steamers</a></li>
                                <li><a href="">Cook & Hold ovens</a></li>
                                <li><a href="">Scherf Ice cream</a></li>
                                <li><a href="">Another category</a></li>
                                <li><a href="">Great items name</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card card-category">
                        <a href="#" className="img-wrap" style={{ background: "#ddffeb" }}>
                            <img src={img2} />
                        </a>
                        <div className="card-body">
                            <h4 className="card-title"><a href="#">Great items</a></h4>
                            <ul className="list-menu">
                                <li><a href="">Combi steamers</a></li>
                                <li><a href="">Cook & Hold ovens</a></li>
                                <li><a href="">Scherf Ice cream</a></li>
                                <li><a href="">Another category</a></li>
                                <li><a href="">Great items name</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card card-category">
                        <a href="#" className="img-wrap" style={{ background: "#dee4ff" }}>
                            <img src={img1} />
                        </a>
                        <div className="card-body">
                            <h4 className="card-title"><a href="#">Other clothes</a></h4>
                            <ul className="list-menu">
                                <li><a href="">Jeans shorts</a></li>
                                <li><a href="">Cook & Hold ovens</a></li>
                                <li><a href="">Scherf Ice cream</a></li>
                                <li><a href="">Another category</a></li>
                                <li><a href="">Great items name</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>


        </div>
    </section>

    </>
);

export default category;