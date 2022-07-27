import {useEffect} from "react";
import Landing from "../Sections/Home/Landing/Landing";
import OurTeachers from "../Sections/OurTeachers/OurTeachers";
import Feature from "../Sections/Feutures/Feature";
import Testimonial from "../Sections/Testimonial/Testimonial";
import {useDispatch} from "react-redux";
import {MountBackDrop} from "../src/Apis/Redux/Actions/Types";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import _Student from "../src/Models/_Student";

export default function Home(props) {
    let dispatch =  useDispatch()

    const data = {
        phone : '0550750576'
    }
    useEffect(()=>{
        // document.body.dir = "rtl"
        // dispatch({type: MountBackDrop, Component: <RegisterForm/>})
    })

  return (
      <>
          <Landing></Landing>
          <br/><br/>
          <Feature></Feature>
          <br/><br/>
          <Testimonial></Testimonial>
          <br/>
          <OurTeachers></OurTeachers>
      </>
  )
}
