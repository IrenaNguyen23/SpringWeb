import React from "react";
import { List, Datagrid, TextField, Edit, SimpleForm, EditButton, ReferenceInput, TextInput, Create, DateInput, SelectInput, DeleteButton }
    from "react-admin";
export const listToken = (props) =>
(
    <List {...props} style={{ overflowX: "auto" }}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="created_at" />
            <TextField source="token" />
            <TextField source="user.fullname" />
            <EditButton />
            <DeleteButton/>
        </Datagrid>
    </List>
);
export const editToken = (props) =>
(
    <Edit {...props} style={{ overflowX: "auto" }}>
        <SimpleForm>
            <DateInput source="created_at" />
            <TextInput source="token" />
            <ReferenceInput label="User"
                source="user.id"
                reference="users">
                <SelectInput optionText="fullname" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);
export const createToken = (props) =>
(
    <Create {...props} style={{ overflowX: "auto" }}>
        <SimpleForm>
            <DateInput source="created_at" />
            <TextInput source="token" />
            <ReferenceInput label="User"
                source="user.id"
                reference="users">
                <SelectInput optionText="fullname" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);