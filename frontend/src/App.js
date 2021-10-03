import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import TestPage from './pages/Test'
import UserListPage from './pages/AdminListUser'
import UserCreatePage from './pages/AdminAddUser'
import UserEditPage from './pages/AdminUpdateUser'
import ProductListPage from './pages/AdminListProduct'
import ProductCreatePage from './pages/AdminAddProduct'
import ProductEditPage from './pages/AdminUpdateProduct'
import ProductDetailPage from './pages/ProductDetail'
import ProfilePage from './pages/ProfilePage'
import AddUserAddressPage from './pages/AddUserAddress'
import ListUserAddressPage from './pages/ListUserAddress'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomePage} exact />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/admin/users' component={UserListPage} exact />
          <Route path='/admin/users/add' component={UserCreatePage} exact />
          <Route path='/admin/user/:id/edit' component={UserEditPage} exact />
          <Route path='/admin/products' component={ProductListPage} exact />
          <Route path='/admin/products/add' component={ProductCreatePage} exact />
          <Route path='/admin/products/:id/edit' component={ProductEditPage} exact />
          <Route path='/products/:id' component={ProductDetailPage} exact />
          <Route path='/profile' component={ProfilePage} exact />
          <Route path='/profile/address' component={ListUserAddressPage} exact />
          <Route path='/profile/address/add' component={AddUserAddressPage} exact />
          <Route path='/test' component={TestPage} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
