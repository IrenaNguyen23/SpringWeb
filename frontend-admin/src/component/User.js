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
    DeleteButton,
} from "react-admin";

export const listUser = (props) => (
    <List {...props}>
        <Datagrid style={{ overflowX: "auto" }}>
            <TextField source="id" />
            <TextField source="fullname" />
            <TextField source="email"  />
            <TextField source="password" />
            <TextField source="phone_number" />
            <TextField source="role.name" />
            <TextField source="address" />
            <TextField source="created_at" />
            <TextField source="deleted" />
            <TextField source="updated_at" />
            <EditButton />
            <DeleteButton/>
        </Datagrid>
    </List>
);

export const editUser = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="fullname" />
            <TextInput source="email" />
            <TextInput source="password" />
            <TextInput source="phone_number" />
            <TextInput source="address" multiline fullWidth />
            <DateInput source="created_at" />
            <DateInput source="updated_at" />
            <NumberInput source="deleted" />
            <ReferenceInput
                label="Role"
                source="role.id"
                reference="roles"
            >
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const createUser = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="fullname" />
            <TextInput source="email" />
            <TextInput source="password" />
            <TextInput source="phone_number" />
            <TextInput source="address" multiline fullWidth />
            <DateInput source="created_at" />
            <DateInput source="updated_at" />
            <NumberInput source="deleted" />
            <ReferenceInput
                label="Role"
                source="role.id"
                reference="roles"
            >
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
