import React, { useEffect, Fragment } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button, Alert } from "react-bootstrap";
import CheckoutSteps from "../components/CheckoutSteps";
import Message from "../components/Message";
import Loader from "../components/common/Loader";
import { getProfileDetails } from "../actions/userActions";

const ShippingAddressPage = ({ history }) => {
  const dispatch = useDispatch();

  const userProfile = useSelector((state) => state.userProfile);
  const { loading, error, profile } = userProfile;

  useEffect(() => {
    dispatch(getProfileDetails());
  }, [dispatch, history]);

  return (
    <>
      <h1>Shipping Address</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Fragment>
          <CheckoutSteps />
          <div className="my-3 d-flex justify-content-between">
            <h3 className="text-center">Shipping Addresses</h3>
            <LinkContainer to="/profile/address/add">
              <Button className="m-1">
                Add Address
              </Button>
            </LinkContainer>
          </div>
          {profile.addresses && profile.addresses.length === 0 ? (
            <Alert variant="info">
            <Alert.Heading>No Addresses Found</Alert.Heading>
            <p>
              Start by adding a new shipping to your profile 
            </p>
            <hr />
          </Alert>
          ) : 
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th className="text-center">Address One</th>
                <th className="text-center">Address Two</th>
                <th className="text-center">Landmark</th>
                <th className="text-center">Area</th>
                <th className="text-center">City</th>
                <th className="text-center">Country</th>
              </tr>
            </thead>
            <tbody>
              {profile.addresses &&
                profile.addresses.map((address) => (
                  <tr key={address._id}>
                    <td className="text-center">{address.address_line_one}</td>
                    <td className="text-center">{address.address_line_two}</td>
                    <td className="text-center">{address.landmark}</td>
                    <td className="text-center">{address.area}</td>
                    <td className="text-center">{address.city}</td>
                    <td className="text-center">{address.country}</td>
                  </tr>
                ))}
            </tbody>
          </Table>}
        </Fragment>
      )}
    </>
  );
};

export default ShippingAddressPage;
