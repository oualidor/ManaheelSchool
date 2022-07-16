import {useEffect} from "react";
import Landing from "../Sections/Home/Landing/Landing";
import OurTeachers from "../Sections/OurTeachers/OurTeachers";
import Feature from "../Sections/Feutures/Feature";
import Testimonial from "../Sections/Testimonial/Testimonial";

export default function Home(props) {

    useEffect(()=>{
        // document.body.dir = "rtl"
    })

  return (
      <>
          <Landing></Landing>

          <br/>
          <Feature></Feature>
          <br/><br/>
          <Testimonial></Testimonial>
          <br/>
          <OurTeachers></OurTeachers>
      </>
  )
}
