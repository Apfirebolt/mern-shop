import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import TestPage from './pages/Test'
import CartPage from './pages/Cart'
import UserListPage from './pages/admin/AdminListUser'
import UserCreatePage from './pages/admin/AdminAddUser'
import UserEditPage from './pages/admin/AdminUpdateUser'
import ProductListPage from './pages/admin/AdminListProduct'
import ProductCreatePage from './pages/admin/AdminAddProduct'
import ProductEditPage from './pages/admin/AdminUpdateProduct'
import ProductDetailPage from './pages/ProductDetail'
import ProfilePage from './pages/ProfilePage'
import AddUserAddressPage from './pages/AddUserAddress'

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
          <Route path='/cart/:id?' component={CartPage} exact />
          <Route path='/profile/address/add' component={AddUserAddressPage} exact />
          <Route path='/search/:keyword' component={HomePage} exact />
          <Route path='/page/:pageNumber' component={HomePage} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomePage}
            exact
          />
          <Route path='/test' component={TestPage} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
