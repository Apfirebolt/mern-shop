import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomePage} exact />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
