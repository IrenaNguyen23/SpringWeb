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
  DeleteButton,
} from "react-admin";

export const listFeedback =(props)=>(
    <List {...props}>
    <Datagrid style={{ overflowX: "auto" }}>
      <TextField source="id" />
      <TextField source="firstname" />
      <TextField source="lastname" />
      <TextField source="phone_number" />
      <TextField source="status" />
      <TextField source="subject_name" />
      <TextField source="note" />
      <TextField source="email" />
      <TextField source="created_at" />
      <TextField source="updated_at" />
      <EditButton />
      <DeleteButton/>
    </Datagrid>
  </List>
);

export const editFeedback = (props) => (
    <Edit {...props}>
      <SimpleForm>
      <TextInput source="firstname" />
      <TextInput source="lastname" />
      <TextInput source="phone_number" />
      <NumberInput source="status" />
      <TextInput source="subject_name" />
      <TextInput source="note" />
      <TextInput source="email" />
      <DateInput source="created_at" />
      <DateInput source="updated_at" />
      </SimpleForm>
    </Edit>
);

export const createFeedback = (props) => (
    <Create {...props}>
      <SimpleForm>
      <TextInput source="firstname" />
      <TextInput source="lastname" />
      <TextInput source="phone_number" />
      <NumberInput source="status" />
      <TextInput source="subject_name" />
      <TextInput source="note" />
      <TextInput source="email" />
      <DateInput source="created_at" />
      <DateInput source="updated_at" />
      </SimpleForm>
    </Create>
  );
