import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  useEffect(() => {
    if (!keyword.length) {
      history.push('/')
    }
  }, [keyword, history])

  return (
    <Form onSubmit={submitHandler} className="d-flex">
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5 p-2 m-2'
      ></Form.Control>
      <Button type='submit' variant='outline-success' className='p-2 m-2'>
        Search {keyword}
      </Button>
    </Form>
  )
}

export default SearchBox
