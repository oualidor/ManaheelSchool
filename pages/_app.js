import '../styles/globals.css'
import {Fragment, useEffect} from 'react';
import {appWithTranslation} from "next-i18next";
import _Entry from "./_Entry";


function CustomApp({ Component, pageProps }) {


  useEffect(()=>{

  })

  return (<Fragment>
      <_Entry Component={Component} pageProps={pageProps}></_Entry>
  </Fragment>);
}
export default appWithTranslation(CustomApp)
