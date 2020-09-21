import React from 'react';
import Layout from '../components/Layout'
import withAuth from '../src/helpers/withAuth';

class Dashboard extends React.Component {
 render() {
   return (
     <Layout>
     <div>
          <h1>Dashboard  Page</h1>
           <p>You can't go into this page if you are not authenticated.</p>
      </div>
      </Layout>
     )
   }
}
export default withAuth(Dashboard);