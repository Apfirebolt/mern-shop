import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import TestPage from './pages/Test'
import SamplePage from './pages/Sample'
import ProfilePage from './pages/Profile'
import UserListPage from './pages/AdminListUser'
import UserCreatePage from './pages/AdminAddUser'
import UserEditPage from './pages/AdminUpdateUser'
import ProductListPage from './pages/AdminListProduct'
import ProductCreatePage from './pages/AdminAddProduct'
import ProductEditPage from './pages/AdminUpdateProduct'
import ProductDetailPage from './pages/ProductDetail'
import AddUserAddressPage from './pages/AddUserAddress'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomePage} exact />
          <Route path='/sample' component={SamplePage} />
          <Route path='/profile' component={ProfilePage} />
          <Route path='/search/:keyword' component={HomePage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/admin/users' component={UserListPage} />
          <Route path='/admin/users/add' component={UserCreatePage} />
          <Route path='/admin/user/:id/edit' component={UserEditPage} />
          <Route path='/admin/products' component={ProductListPage} />
          <Route path='/admin/products/add' component={ProductCreatePage} />
          <Route path='/admin/products/:id/edit' component={ProductEditPage} />
          <Route path='/products/:id' component={ProductDetailPage} />
          <Route path='/profile' component={ProfilePage} />
          <Route path='/profile/address/add' component={AddUserAddressPage} />
          <Route path='/search/:keyword' component={HomePage} exact />
          <Route path='/test' component={TestPage} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
