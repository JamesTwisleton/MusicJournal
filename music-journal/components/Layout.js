import { NavigationBar } from './NavigationBar';
function Layout({ children }) {
    return <>
        {/* <NavigationBar /> */}
        <div>
            {children}
            <style global jsx>{`
      html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div,
      div#__next > div > div {
        height: 100%;    
        background: linear-gradient(to bottom, #FFFFFF, #000000);
        margin: 0;
        padding:0;
      }
    `}</style>
        </div></>
}

export default Layout