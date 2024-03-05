import React from "react";
import LuuNiem from '../../assets/images/items/hopqua.jpg'
import MoHinh from '../../assets/images/items/mohinh.jpg'
import Electric from '../../assets/images/items/electric.jpg'
import Clothing from '../../assets/images/items/clothing.jpg'
import {IoIosAdd,IoIosRemove} from "react-icons/io";

const SlidebarCategory = () => (
    <div className="sidebar-category">

      <div className="sidebar-top">
        <h2 className="sidebar-title">Category</h2>

        <button className="sidebar-close-btn" data-mobile-menu-close-btn>
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </div>

      <ul className="sidebar-menu-category-list">

        <li className="sidebar-menu-category">

          <button className="sidebar-accordion-menu" data-accordion-btn>

            <div className="menu-title-flex">
              <img src={LuuNiem} alt="clothes" width="20" height="20"
                className="menu-title-img"/>

              <p className="menu-title">Clothes</p>
            </div>

            <div>
              <IoIosAdd className="add-icon"/>
              <IoIosRemove className="remove-icon"/>
            </div>

          </button>

          <ul className="sidebar-submenu-category-list" data-accordion>

            <li className="sidebar-submenu-category">
              <a href="#" className="sidebar-submenu-title">
                <p className="product-name">Shirt</p>
                <data value="300" className="stock" title="Available Stock">300</data>
              </a>
            </li>

            <li className="sidebar-submenu-category">
              <a href="#" className="sidebar-submenu-title">
                <p className="product-name">shorts & jeans</p>
                <data value="60" className="stock" title="Available Stock">60</data>
              </a>
            </li>

            <li className="sidebar-submenu-category">
              <a href="#" className="sidebar-submenu-title">
                <p className="product-name">jacket</p>
                <data value="50" className="stock" title="Available Stock">50</data>
              </a>
            </li>

            <li className="sidebar-submenu-category">
              <a href="#" className="sidebar-submenu-title">
                <p className="product-name">dress & frock</p>
                <data value="87" className="stock" title="Available Stock">87</data>
              </a>
            </li>

          </ul>

        </li>

        <li className="sidebar-menu-category">

          <button className="sidebar-accordion-menu" data-accordion-btn>

            <div className="menu-title-flex">
              <img src={MoHinh} alt="clothes" className="menu-title-img" width="20"
                height="20"/>

              <p className="menu-title">Jewelry</p>
            </div>

            <div>
            <IoIosAdd className="add-icon"/>
            <IoIosRemove className="remove-icon"/>
            </div>

          </button>

          <ul className="sidebar-submenu-category-list" data-accordion>

            <li className="sidebar-submenu-category">
              <a href="#" className="sidebar-submenu-title">
                <p className="product-name">Earrings</p>
                <data value="46" className="stock" title="Available Stock">46</data>
              </a>
            </li>

            <li className="sidebar-submenu-category">
              <a href="#" className="sidebar-submenu-title">
                <p className="product-name">Couple Rings</p>
                <data value="73" className="stock" title="Available Stock">73</data>
              </a>
            </li>

            <li className="sidebar-submenu-category">
              <a href="#" className="sidebar-submenu-title">
                <p className="product-name">Necklace</p>
                <data value="61" className="stock" title="Available Stock">61</data>
              </a>
            </li>

          </ul>

        </li>

        <li className="sidebar-menu-category">

          <button className="sidebar-accordion-menu" data-accordion-btn>

            <div className="menu-title-flex">
              <img src={Electric} alt="perfume" className="menu-title-img" width="20"
                height="20"/>

              <p className="menu-title">Perfume</p>
            </div>

            <div>
            <IoIosAdd className="add-icon"/>
            <IoIosRemove className="remove-icon"/>
            </div>

          </button>

          <ul className="sidebar-submenu-category-list" data-accordion>

            <li className="sidebar-submenu-category">
              <a href="#" className="sidebar-submenu-title">
                <p className="product-name">Clothes Perfume</p>
                <data value="12" className="stock" title="Available Stock">12 pcs</data>
              </a>
            </li>

            <li className="sidebar-submenu-category">
              <a href="#" className="sidebar-submenu-title">
                <p className="product-name">Deodorant</p>
                <data value="60" className="stock" title="Available Stock">60 pcs</data>
              </a>
            </li>

            <li className="sidebar-submenu-category">
              <a href="#" className="sidebar-submenu-title">
                <p className="product-name">jacket</p>
                <data value="50" className="stock" title="Available Stock">50 pcs</data>
              </a>
            </li>

            <li className="sidebar-submenu-category">
              <a href="#" className="sidebar-submenu-title">
                <p className="product-name">dress & frock</p>
                <data value="87" className="stock" title="Available Stock">87 pcs</data>
              </a>
            </li>

          </ul>

        </li>

        <li className="sidebar-menu-category">

          <button className="sidebar-accordion-menu" data-accordion-btn>

            <div className="menu-title-flex">
              <img src={Clothing} alt="cosmetics" className="menu-title-img" width="20"
                height="20"/>

              <p className="menu-title">Cosmetics</p>
            </div>

            <div>
            <IoIosAdd className="add-icon"/>
            <IoIosRemove className="remove-icon"/>
            </div>

          </button>

          <ul className="sidebar-submenu-category-list" data-accordion>

            <li className="sidebar-submenu-category">
              <a href="#" className="sidebar-submenu-title">
                <p className="product-name">Shampoo</p>
                <data value="68" className="stock" title="Available Stock">68</data>
              </a>
            </li>

            <li className="sidebar-submenu-category">
              <a href="#" className="sidebar-submenu-title">
                <p className="product-name">Sunscreen</p>
                <data value="46" className="stock" title="Available Stock">46</data>
              </a>
            </li>

            <li className="sidebar-submenu-category">
              <a href="#" className="sidebar-submenu-title">
                <p className="product-name">Body Wash</p>
                <data value="79" className="stock" title="Available Stock">79</data>
              </a>
            </li>

            <li className="sidebar-submenu-category">
              <a href="#" className="sidebar-submenu-title">
                <p className="product-name">Makeup Kit</p>
                <data value="23" className="stock" title="Available Stock">23</data>
              </a>
            </li>

          </ul>

        </li>

     

      </ul>

    </div>
);
 
export default SlidebarCategory;