import Axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";

const PropertiesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

function Properties() {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    Axios.get("http://localhost:4000/api/v1/propertylisting")
      .then((result) => setProperties(result.data))
      .catch(() =>
        setAlert({
          message:
            "There was an error getting properties data, please try again later.",
        })
      );
  }, []);

  return (
    <PropertiesGrid>
      {alert.message ? (
        <Alert message={alert.message} />
      ) : (
        properties.map((property) => {
          return <PropertyCard property={property} key={property._id} />;
        })
      )}
    </PropertiesGrid>
  );
}

export default Properties;
