import "../styles/globals.css";
import "../styles/animate.css";
import 'react-multi-carousel/lib/styles.css';
import {Fragment, useEffect} from 'react';
import _Entry from "../components/_Entry";


function CustomApp({ Component, pageProps }) {


  useEffect(()=>{

  })

  return (<Fragment>
      <_Entry Component={Component} pageProps={pageProps}></_Entry>
  </Fragment>);
}
export default CustomApp
