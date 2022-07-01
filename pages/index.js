
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useEffect} from "react";
import Landing from "../Sections/Home/Landing/Landing";
import OurTeachers from "../Sections/OurTeachers/OurTeachers";

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
          <Landing></Landing>
          {/*<OurTeachers></OurTeachers>*/}
      </>
  )
}
