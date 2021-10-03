import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getProfile } from '../actions/userActions'

const ProfilePage = () => {
  const userProfile = useSelector((state) => state.userProfile)
  const { loading, profile, error } = userProfile

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProfile())
  }, [dispatch])

  return (
    <>
      <h1>Profile</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            <p>Profile page text { profile._id }</p>
          </Row>
        </>
      )}
    </>
  )
}

export default ProfilePage
