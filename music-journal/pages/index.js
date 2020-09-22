  
import React from 'react';
import Layout from '../components/Layout'
import withAuth from '../src/withAuth';
class Dashboard extends React.Component {

 render() {
   return (
     <Layout>
     <div>          
        <h1>Dashboard  Page</h1>
        <p>Hi {this.props.user.displayName}</p>
      </div>
      </Layout>
     )
   }
}
export default withAuth(Dashboard);