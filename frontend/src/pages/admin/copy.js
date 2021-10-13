import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Message from "../../components/Message";
import Loader from "../../components/common/Loader";
import FormContainer from "../../components/FormContainer";
import { adminUserAdd } from "../../actions/userActions";

const AdminAddUser = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const { register, handleSubmit, getValues, formState: { errors } } = useForm();
  const onSubmit = data => dispatch(adminUserAdd(data));

  const dispatch = useDispatch();
  
  const adminAddUser = useSelector((state) => state.adminAddUser)
  const { loading, error, success } = adminAddUser
  useEffect(() => {
    if(userInfo && !userInfo.isAdmin) {
      history.push('/')
    }
    if (success) {
      history.push('/admin/users')
    }
  }, [dispatch, history, success, userInfo])

  return (
    <>
      <h2>Add User</h2>
      <FormContainer>
        
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              {...register("name", { required: true })}
            ></Form.Control>
          </Form.Group>
          {errors.name && <p className="bg-danger text-white p-2">Name field is not valid</p>}
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("email", { required: true })}
            ></Form.Control>
          </Form.Group>
          {errors.email && <p className="bg-danger text-white p-2">Email field is not valid</p>}
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              {...register("password", { required: true })}
            ></Form.Control>
          </Form.Group>
          {errors.password && <p className="bg-danger text-white p-2">Password field is not valid</p>}
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              {...register("confirmPassword", { required: true, validate: () => getValues("password") === getValues("confirmPassword") })}
            ></Form.Control>
          </Form.Group>
          {errors.confirmPassword && <p className="bg-danger text-white p-2">Confirm Password field is not valid</p>}
          <div className="d-flex justify-content-center my-2">
            <Button type="submit" variant="primary">
              Add User
            </Button>
          </div>
        </Form>
      </FormContainer>
    </>
  );
};

export default AdminAddUser;
