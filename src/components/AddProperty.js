import React, { useState } from "react";
import styled from "styled-components";
import postProperty from "../requests/postProperty";
import Alert from "./Alert";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  font-weight: 600;

  & label {
    display: flex;
    flex-direction: column;
  }

  & .double-field {
    display: flex;
    justify-content: space-between;

    & > * {
      width: 49%;
    }
  }

  & input,
  select {
    height: 35px;
    border-radius: 7px;
    border: none;
    padding: 0px 10px;
    margin: 3px 0px 10px 0px;
  }
`;

export const Button = styled.button`
  border: 1px #774871 solid;
  background-color: #c7b3c4;
  height: 35px;
  border-radius: 7px;
  padding: 0px 10px;
  margin: 3px 0px 10px 0px;
  width: 100%;

  &:hover {
    background-color: #774871;
    color: #fff;
    cursor: pointer;
  }
`;

function AddProperty() {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "Flat",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event, alertFunction) => {
    event.preventDefault();
    setAlert(initialState.alert);
    postProperty(fields, alertFunction);
  };

  const handleFieldChange = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="add-property">
      <h2>Add a Property</h2>
      <p>
        To add a property to our listings page please fill out the form below.
      </p>
      <Form onSubmit={(e) => handleAddProperty(e, setAlert)}>
        {alert.message && alert.isSuccess && (
          <Alert message={alert.message} success />
        )}
        {alert.message && !alert.isSuccess && <Alert message={alert.message} />}
        <label htmlFor="title">
          Title
          <input
            id="title"
            name="title"
            value={fields.title}
            onChange={(e) => handleFieldChange(e)}
          />
        </label>
        <div className="double-field">
          <label htmlFor="type">
            Type
            <select
              id="type"
              name="type"
              value={fields.type}
              onChange={(e) => handleFieldChange(e)}
            >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terrace">Terrace</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
          <label htmlFor="city">
            City
            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={(e) => handleFieldChange(e)}
            >
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </label>
        </div>
        <div className="double-field">
          <label htmlFor="bedrooms">
            Bedrooms
            <input
              id="bedrooms"
              name="bedrooms"
              value={fields.bedrooms}
              onChange={(e) => handleFieldChange(e)}
              type="number"
              min="1"
              max="9"
            />
          </label>
          <label htmlFor="bathrooms">
            Bathrooms
            <input
              id="bathrooms"
              name="bathrooms"
              value={fields.bathrooms}
              onChange={(e) => handleFieldChange(e)}
              type="number"
              min="1"
              max="9"
            />
          </label>
        </div>
        <label htmlFor="price">
          Price
          <input
            id="price"
            name="price"
            value={fields.price}
            onChange={(e) => handleFieldChange(e)}
            type="number"
            min="100000"
            max="999999"
            step="2500"
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            id="email"
            name="email"
            value={fields.email}
            onChange={(e) => handleFieldChange(e)}
            type="email"
          />
        </label>
        <Button type="submit">Add</Button>
      </Form>
    </div>
  );
}

export default AddProperty;
