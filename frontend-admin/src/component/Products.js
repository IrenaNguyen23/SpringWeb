import React from "react";
import { List, Datagrid, TextField, Edit, SimpleForm, EditButton, ReferenceInput, TextInput, Create, NumberInput, DateInput, SelectInput, FileInput, FileField, DeleteButton }
  from "react-admin";

export const listProduct = (props) =>
(
  <List {...props} style={{ overflowX: "auto" }}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="price" />
      <TextField source="discount" />
      <TextField source="thumbnail" />
      <TextField source="sale" />
      <TextField source="brand" />
      <TextField source="description" />
      <TextField source="created_at" />
      <TextField source="updated_at" />
      <TextField source="category.name" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
export const editProduct = (props) =>
(
  <Edit {...props} style={{ overflowX: "auto" }}>
    <SimpleForm>

      <TextInput source="title" />
      <NumberInput source="price" />
      <TextInput source="thumbnail" />
      <TextInput source="brand" />
      <SelectInput source="sale"
        choices={[
          { id: 1, name: 'Có sale', value: 1 },
          { id: 0, name: 'Không sale', value: 0 }
        ]} defaultValue={0}
      />
      <NumberInput source="discount" />
      <TextInput source="description" multiline fullWidth />
      <DateInput source="created_at" />
      <DateInput source="updated_at" />
      <NumberInput source="deleted" />
      <ReferenceInput label="Category"
        source="category.id"
        reference="categories">

        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
export const createProduct = (props) =>
(
  <Create {...props} style={{ overflowX: "auto" }}>
    <SimpleForm>

      <TextInput source="title" />
      <NumberInput source="price" />
      <TextInput source="brand" />
        <FileInput source="thumbnailFile" label="Thumbnail Image" accept="image/*">
      <FileField source="src" title="title"/>
      </FileInput>
      <TextInput source="description" multiline fullWidth />
      <SelectInput source="sale"
        choices={[
          { id: 1, name: 'Có sale', value: 1 },
          { id: 0, name: 'Không sale', value: 0 }
        ]} defaultValue={0}
      />
      <NumberInput source="discount" />
      <DateInput source="created_at" />
      <DateInput source="updated_at" />
      <NumberInput source="deleted" />
      <ReferenceInput label="Category"
        source="category.id"
        reference="categories">

        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);