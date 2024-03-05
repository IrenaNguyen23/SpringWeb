import React from "react";
import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  EditButton,
  TextInput,
  Create,
  NumberInput,
  SelectInput,
  DeleteButton,
} from "react-admin";


export const listCategory = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="parent_id" />
      <TextField source="isHome" />
      <EditButton />
      <DeleteButton/>
    </Datagrid>
  </List>
);

export const editCategory = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <NumberInput source="parent_id" />
      <SelectInput source="isHome"
        choices={[
          { id: 1, name: 'Hiện thị ở trang chủ', value: 1 },
          { id: 0, name: 'Ẩn khỏi trang chủ', value: 0 }
        ]} defaultValue={0}
      />
    </SimpleForm>
  </Edit>
);

export const createCategory = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <NumberInput source="parent_id" />
      <SelectInput source="isHome"
        choices={[
          { id: 1, name: 'Hiện thị ở trang chủ', value: 1 },
          { id: 0, name: 'Ẩn khỏi trang chủ', value: 0 }
        ]} defaultValue={0}
      />
    </SimpleForm>
  </Create>
);
