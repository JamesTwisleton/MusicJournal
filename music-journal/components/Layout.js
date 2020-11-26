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
              height: 100vh;    
              background: linear-gradient(to bottom, #FFFFFF, #000000);
              margin: 0;
              padding:0;
            }
          `}
        </style>
      </Container>
    </>
  );
}

export default Layout;
