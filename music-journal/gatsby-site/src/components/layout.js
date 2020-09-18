// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Wrapper } from './styles';
// import { NavigationBar } from './NavigationBar';

// export default function Layout({ children }) {
//     return (
//         <>
//             <NavigationBar />
//             <Wrapper>{children}</Wrapper>
//         </>
//     );
// }
import React from "react"
import PropTypes from "prop-types"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
          <footer>
            <div>
              Built by <a href="https://twitter.com/thorwebdev">Thor</a> with{" "}
              <a href="https://www.gatsbyjs.org">Gatsby</a> | View{" "}
              <a href="https://github.com/gatsbyjs/gatsby/tree/master/examples/ecommerce-tutorial-with-stripe">
                source
              </a>
            </div>
            <div>
              <a href="https://stripe.com">
                <img src={stripeLogo} alt="Payments powered by Stripe" />
              </a>
            </div>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout