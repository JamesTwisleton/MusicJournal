import React from 'react';
import Layout from '../components/Layout'
import withAuth from '../src/withAuth';
class Dashboard extends React.Component {

 render() {
   return (
     <Layout>
<<<<<<< HEAD:music-journal/pages/dashboard.js
     <div>
          <h1>Dashboard  Page</h1>
           <p>You can't go into this page if you are not authenticated.</p>
=======
     <div>          
        <h1>Dashboard  Page</h1>
        <p>Hi {this.props.user.displayName}</p>
>>>>>>> cookies:music-journal/pages/index.js
      </div>
      </Layout>
     )
   }
}
export default withAuth(Dashboard);