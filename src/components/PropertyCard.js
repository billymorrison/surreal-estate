import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Button } from "./AddProperty";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;
  border: #424242 1px solid;
  border-radius: 5px;
  background-color: #fff;
  padding: 5px;
  margin: 20px;
`;

const CardHeader = styled.div`
  width: 100%;
  height: 90px;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const CardTitle = styled.h4`
  font-weight: bold;
  margin: 0;
  font-size: 1.2rem;
  padding: 5px 10px;
`;

const Info = styled.p`
  font-size: 1.1rem;
  padding: 5px 10px;
  margin: 0;

  ${({ italic }) => italic && `font-style: italic;`}
`;

function PropertyCard(props) {
  const { property } = props;
  return (
    <Card>
      <CardHeader>
        <i className="fas fa-home" />
      </CardHeader>
      <CardTitle>{property.title || "Property for Sale"}</CardTitle>
      <Info italic>{`${property.type} - ${property.city}`}</Info>
      <Info>
        <i className="fas fa-bath" />
        {` ${property.bathrooms}`}
      </Info>
      <Info>
        <i className="fas fa-bed" />
        {` ${property.bedrooms}`}
      </Info>
      <Info>
        <i className="fas fa-pound-sign" />
        {property.price}
      </Info>
      <form action={`mailto:${property.email}`}>
        <Button>Email</Button>
      </form>
    </Card>
  );
}

export default PropertyCard;

PropertyCard.propTypes = {
  property: PropTypes.shape({
    title: PropTypes.string,
    type: PropTypes.string,
    city: PropTypes.string,
    bathrooms: PropTypes.number,
    bedrooms: PropTypes.number,
    price: PropTypes.number,
    email: PropTypes.string,
  }).isRequired,
};
