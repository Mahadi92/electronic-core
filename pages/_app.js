import '../styles/global/globals.css';
import '/styles/global/global.scss';
import "/styles/modules/navbar.scss";

import Navbar from "../components/global/Navbar"



function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Navbar /> */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
