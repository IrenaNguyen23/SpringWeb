import React, { useEffect, useState } from "react";
import Slider from "../pages/home/Slider"
import Category from "../pages/home/Category"
import Deal from "../pages/home/Deal";
import Blog from "../pages/home/Blog";
import Service from "../pages/home/Serivce";
import NewProduct from "../pages/home/NewProduct";
import SlidebarCategory from "../pages/home/SlidebarCategory";
import BestSeller from "../pages/home/BestSeller";
import NewArrivals from "../pages/home/NewArrival";
import Trending from "../pages/home/Trending";
import TopRate from "../pages/home/TopRate";
import Testimonial from "../pages/home/Testimonial";
import CTA from "../pages/home/CTA";
import { GET_ALL } from "../apiService";
import Section1 from "../pages/home/Section1";
const Home =() => {
  const [categories, setCategoies] = useState([]);

  useEffect(() => {
    GET_ALL(`categories`).then((item) => setCategoies(item.data));
  }, [categories]);
  const filteredCategories = categories.filter(
    (category) => category.isHome === 1
  );
  return (
    <>
      <div className="container">

      </div>
      <Slider />
      <div className="container">
        <Category />
        <div className="product-container">
          <div className="container">
            <div className="sidebar  has-scrollbar" data-mobile-menu>

              <SlidebarCategory />
              <BestSeller />

            </div>
            <div className="product-box">

              <div className="product-minimal">

                <NewArrivals />

                <Trending />

                <TopRate />
              </div>         
              <Deal />
              <NewProduct />
            </div>

          </div>

        </div>
        <div className="container">
          {filteredCategories.length > 0 &&
            filteredCategories.map((row) => (
              <Section1 categoryName={row.name} categoryId={row.id} />
            ))}
        </div>
        <div>

          <div className="container">

            <div className="testimonials-box">

              <Testimonial />

              <CTA />

              <Service />
            </div>

          </div>

        </div>
        <Blog />
      </div>
    </>
  );
}
export default Home;