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
    ReferenceInput,
    SelectInput,
    DeleteButton,
} from "react-admin";
export const listGallery = (props) => (
    <List {...props}>
        <Datagrid style={{ overflowX: "auto" }}>
            <TextField source="id" />
            <TextField source="thumbnail" />
            <TextField source="product.title"/>
            <EditButton />
            <DeleteButton/>
        </Datagrid>
    </List>
);
export const editGallery = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="thumbnail" />
            <ReferenceInput
                label="Product"
                source="product.id"
                reference="products"
            >
                <SelectInput optionText="title" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);
export const createGallery = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="thumbnail" />
            <ReferenceInput
                label="Product"
                source="product.id"
                reference="products"
            >
                <SelectInput optionText="title" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
