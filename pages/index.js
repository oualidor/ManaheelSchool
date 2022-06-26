import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useEffect} from "react";

export async function getStaticProps({locale}){

    return{
        props : {
            ...(await serverSideTranslations(locale, ['Home', 'NavBar']))
        }
    }
}
export default function Home(props) {

    const {i18n } = useTranslation()
    useEffect(()=>{
        document.body.dir = i18n.dir()
    })

  return (
      <>

      </>
  )
}
