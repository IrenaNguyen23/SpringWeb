import React from "react";
import { Admin, Resource } from "react-admin";
import AdminPanel from "./component/AdminPanel";

import { listCategory, editCategory, createCategory } from "./component/Category";
import { listProduct, editProduct, createProduct } from "./component/Products";
import { listRole, editRole, createRole } from "./component/Role";
import { listUser, editUser, createUser } from "./component/User";
import { createFeedback, editFeedback, listFeedback } from "./component/Feedback";

import { createGallery, editGallery, listGallery } from "./component/Gallery";
import { createOrder, editOrder, listOrder } from "./component/Order";
import { createOrderDetail, editOrderDetail, listOrderDetail } from "./component/OrderDetail";
import { createToken, editToken, listToken } from "./component/Token";

import dataProvider from "./component/customDataProvider";
const App = () => (
  <Admin
    dashboard={AdminPanel}
    dataProvider={dataProvider}
  >
    <Resource
      name="categories"
      list={listCategory}
      edit={editCategory}
      create={createCategory}
    />
    <Resource
      name="products"
      list={listProduct}
      edit={editProduct}
      create={createProduct}
    />
    <Resource
      name="galleries"
      list={listGallery}
      edit={editGallery}
      create={createGallery}
    />
    <Resource
      name="roles"
      list={listRole}
      edit={editRole}
      create={createRole}
    />
    <Resource
      name="users"
      list={listUser}
      edit={editUser}
      create={createUser}
    />
    <Resource
      name="orders"
      list={listOrder}
      edit={editOrder}
      create={createOrder}
    />
    <Resource
      name="orderdetails"
      list={listOrderDetail}
      edit={editOrderDetail}
      create={createOrderDetail}
    />
    <Resource
      name="tokens"
      list={listToken}
      edit={editToken}
      create={createToken}
    />
    <Resource
      name="feedbacks"
      list={listFeedback}
      edit={editFeedback}
      create={createFeedback}
    />
  </Admin>
);

export default App;
