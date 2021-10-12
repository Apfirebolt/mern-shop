import React, { useEffect, useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import ConfirmModal from '../components/modals/ConfirmModal'
import Loader from '../components/common/Loader'
import { listProducts, deleteProduct } from '../actions/productActions'

const AdminListUser = ({ history }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const showDeleteModal = () => {
    setShowModal(true)
  }
  const hideDeleteModal = () => {
    setShowModal(false)
  }
  const deleteHelper = (productId) => {
    setSelectedProductId(productId)
    showDeleteModal()
  }
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  const productDelete = useSelector((state) => state.productDelete)
  const { success: successDelete } = productDelete

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts())
    } else {
      history.push('/')
    }
  }, [dispatch, history, successDelete, userInfo])
  
  const deleteHandler = (id) => {
    dispatch(deleteProduct(id))
    hideDeleteModal()
  }

  return (
    <>
      <h1>Products</h1>
      <ConfirmModal 
        showModalFunction={showDeleteModal}
        hideModalFunction={hideDeleteModal}
        showModal={showModal}
        deleteProduct={deleteHandler}
        productId={selectedProductId}
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
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td className='text-center'>{product._id}</td>
                <td className='text-center'>{product.name}</td>
                <td className="text-center">
                  <LinkContainer to={`/admin/products/${product._id}/edit`}>
                    <Button variant='light' className='btn-sm m-1'>
                      Edit
                      <i className='fas fa-edit'></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant='danger'
                    className='btn-sm m-1'
                    onClick={() => deleteHelper(product._id)}
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
