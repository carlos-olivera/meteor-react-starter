import React from 'react'
import { Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Dashboard from './pages/Dashboard'
import ListPage from './pages/List'
import AddPage from './pages/Add'
import Header from './components/Header'


export const App = () => (
  <Container fluid>
    <div>
      <Route path='/' render={() => (
        <Header />
      )} />
      <Route exact path='/' render={() => (
        <Dashboard />
      )} />
      <Route exact path='/list' render={() => (
        <ListPage />
      )} />
      <Route exact path='/add' render={() => (
        <AddPage />
      )} />
    </div>
  </Container>
)
