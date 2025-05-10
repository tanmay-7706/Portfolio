import React from 'react'
import "./header.css"

import HeaderTitle from "../../ui/HeaderTitle";
import {profile1} from "../../assets"
import Codeblock from "../../ui/Codeblock";
import language from "react-syntax-highlighter/dist/esm/languages/hljs/1c";
import Facts from "../../ui/Facts";
import SocialHandles from "../../ui/SocialHandles";
import BreathCircle from "../../ui/BreathCircle";

const code =`
const developer = {
firstName: "Tanmay",
lastName: "Singh"
aka: "Tanmay",
hobby: repeat = () =>{
  //eat();
  //sleep();
  //code();
  //repaet();
  }
}
`

const Header = () => {
  return (
    <header id='header'>
      <BreathCircle/>
      <div className='section__wrapper'>
        <div className="grid upper">
          <div className="column">
            <HeaderTitle/>
          </div>
          <div className="column">
            <img src={profile1} className="Profile__photo" alt=""/>
          </div>



        </div>
        <div className="card grid lower">
          <Codeblock 
          language={language}
          code={code}/>
          <div>
            <p className="text__muted description">
            I dissect intricate user experience challenges to engineer
            integrity-focused solutions that resonate with billions of users.
            </p>
            <Facts/>
            <SocialHandles/>
          </div>
          
        </div>
      </div>
      
    </header>
  )
}

export default Header