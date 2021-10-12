import React, { useEffect, useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import ConfirmDeleteModal from '../components/modals/ConfirmDeleteUser'
import Message from '../components/Message'
import Loader from '../components/common/Loader'
import { listUsers, deleteUser } from '../actions/userActions'

const AdminListUser = ({ history }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const showDeleteModal = () => {
    setShowModal(true)
  }
  const hideDeleteModal = () => {
    setShowModal(false)
  }
  const deleteHelper = (userId) => {
    setSelectedUserId(userId)
    showDeleteModal()
  }
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const dispatch = useDispatch()

  const userList = useSelector((state) => state.userList)
  const { loading, error, users } = userList

  const userDelete = useSelector((state) => state.userDelete)
  const { success: successDelete } = userDelete

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers())
    } else {
      history.push('/')
    }
  }, [dispatch, history, successDelete, userInfo])
  
  const deleteHandler = (id) => {
    dispatch(deleteUser(id))
    hideDeleteModal()
  }

  return (
    <>
      <h1>Users</h1>
      <ConfirmDeleteModal 
        showModalFunction={showDeleteModal}
        hideModalFunction={hideDeleteModal}
        showModal={showModal}
        deleteUser={deleteHandler}
        userId={selectedUserId}
      />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th className='text-center'>ID</th>
              <th className='text-center'>NAME</th>
              <th className='text-center'>EMAIL</th>
              <th className='text-center'>ADMIN</th>
              <th className="text-center">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td className='text-center'>{user._id}</td>
                <td className='text-center'>{user.name}</td>
                <td className='text-center'>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td className='text-center'>
                  {user.isAdmin ? (
                    <i className='fas fa-check' style={{ color: 'green' }}>
                      Admin
                    </i>
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td className="text-center">
                  <LinkContainer to={`/admin/user/${user._id}/edit`}>
                    <Button variant='light' className='btn-sm m-1'>
                      Edit
                      <i className='fas fa-edit'></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant='danger'
                    className='btn-sm m-1'
                    onClick={() => deleteHelper(user._id)}
                  >
                    Delete
                    <i className='fas fa-trash'></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  )
};

export default AdminListUser;
