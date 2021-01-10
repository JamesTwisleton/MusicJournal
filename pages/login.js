import React from 'react'
import Layout from '../components/Layout'
import Login from '../components/Login'

const LoginPage = () => (
  <Layout>
    <Login />
  </Layout>
)

LoginPage.isAuthorized = (__session) => true

export default LoginPage
