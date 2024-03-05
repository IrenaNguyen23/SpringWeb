import React from "react";
import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  EditButton,
  TextInput,
  NumberInput,
  DateInput,
  Create,
  ReferenceInput,
  SelectInput,
} from "react-admin";

export const listOrder = (props) =>(
    <List {...props}>
    <Datagrid style={{ overflowX: "auto" }}>
      <TextField source="id" />
      <TextField source="address" />
      <TextField source="email" />
      <TextField source="fullname" />
      <TextField source="note" />
      <TextField source="order_date" />
      <TextField source="phone_number" />
      <TextField source="status" />
      <TextField source="total_money" />
      <TextField source="user.fullname" />
      <EditButton />
    </Datagrid>
  </List>
);

export const editOrder = (props) =>(
    <Edit {...props}>
    <SimpleForm>
      <TextInput source="address" />
      <TextInput source="email" />
      <TextInput source="fullname" />
      <TextInput source="note" />
      <DateInput source="order_date" />
      <TextInput source="phone_number" />
      <NumberInput source="status" />
      <NumberInput source="total_money" />
      <ReferenceInput
        label="User"
        source="user.id"
        reference="users"
      >
        <SelectInput optionText="fullname" />
      </ReferenceInput>
      <EditButton />
    </SimpleForm>
  </Edit>
);

export const createOrder = (props) =>(
    <Create {...props}>
    <SimpleForm>
      <TextInput source="address" />
      <TextInput source="email" />
      <TextInput source="fullname" />
      <TextInput source="note" />
      <DateInput source="order_date" />
      <TextInput source="phone_number" />
      <NumberInput source="status" />
      <NumberInput source="total_money" />
      <ReferenceInput
        label="User"
        source="user.id"
        reference="users"
      >
        <SelectInput optionText="fullname" />
      </ReferenceInput>
      <EditButton />
    </SimpleForm>
  </Create>
);