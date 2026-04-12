import React from 'react'
import FunctionCom from './AboutsubComponent/FunctionComp'
import ClassComp from './AboutsubComponent/ClassComp'

const About = () => {
  return (
    <div>AboutUs
    <FunctionCom name={"Ishan"} Contact={"Ishaitis@hmail.com "}/>
    <ClassComp name={"Ishan"} Contact={"Ishaitis@hmail.com "}/>
    </div>
  )
}

export default About