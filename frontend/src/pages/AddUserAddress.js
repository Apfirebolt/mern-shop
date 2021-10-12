import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/common/Loader";
import FormContainer from "../components/FormContainer";
import { addAddress } from "../actions/userActions";

const AddUserAddressPage = ({ history }) => {
  const [address_line_one, setAddressLineOne] = useState("");
  const [address_line_two, setAddressLineTwo] = useState("");
  const [landmark, setLandmark] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const dispatch = useDispatch();

  const userAddAddress = useSelector((state) => state.addUserAddress);
  const { loading, error, success } = userAddAddress;

  useEffect(() => {
    if (success) {
      history.push("/profile");
    }
  }, [dispatch, history, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addAddress({
        address_line_one,
        address_line_two,
        landmark,
        area,
        city,
        postalCode,
        country
    }))
  };

  return (
    <FormContainer>
      <h1 className="text-center my-3">Add Address</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Row className="my-2">
          <Col md={6}>
            <Form.Group controlId="address_line_one">
              <Form.Label>Address Line One</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address (House Number)"
                value={address_line_one}
                onChange={(e) => setAddressLineOne(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="address_line_two">
              <Form.Label>Address Line Two</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address (Colony Name)"
                value={address_line_two}
                onChange={(e) => setAddressLineTwo(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row className="my-2">
          <Col md={6}>
            <Form.Group controlId="landmark">
              <Form.Label>Add Landmark</Form.Label>
              <Form.Control
                type="text"
                placeholder="Landmark (Optional)"
                value={landmark}
                onChange={(e) => setLandmark(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="area">
              <Form.Label>Area</Form.Label>
              <Form.Control
                type="text"
                placeholder="Area Name"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="City Name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="postalCode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="number"
            placeholder="Area Postal Code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <div className="d-flex justify-content-center my-2">
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </div>
      </Form>
    </FormContainer>
  );
};

export default AddUserAddressPage;
