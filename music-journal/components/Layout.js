import NavigationBar from './NavigationBar';
import { Container } from 'react-bootstrap/';

const Layout = ({ children }) => {
  return (
    <>
      {/*<NavigationBar />*/}
      <Container fluid id="main">

        {children}
        <style global jsx>{`
            #main {
              background: linear-gradient(to bottom, #FFFFFF, #000000) no-repeat center center fixed;
              background-size: cover;
              margin: 0;
              padding:0;
              min-height: 100vh;
            }
          `}
        </style>
      </Container>
    </>
  );
}

export default Layout;
