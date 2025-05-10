import React from 'react'
import "./about.css"

import Hole from "../../ui/Hole"
import { skills } from '../../data'
import CardUi from "../../assets/CardUi"

const About = () => {
  return (
    <section id='about'>
      <div className="card section__wrapper">
        <Hole/>
        <div className="column left-column">
          <h3 className="skill__title">My Skills</h3>
          <div className="skills__container">
            {skills.map((skill, index) => (
              <div className="flex skill__group" key={index}>
                {skill.data.map((list, key) => (
                  <div className="blur__overlay flex__center skill" key={key}>
                    <div className="skill__logo">
                      <img src={list.logo} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            ))}

          </div>
            <CardUi className="card__ui-item" color={"var(--color-primary)"} />
          </div>
          <div className="column right-column">
            <h2 className="shine">About Me</h2>
            <h1 className="title">
              I am <span className="color__primary">Tanmay Singh</span>
            </h1>
            <p className="text__muted description">
            Currently pursuing B.Tech in CS and AI at Newton School of Technology, Rishihood University.
            Passionate front-end developer with hands-on experience in building responsive and user-friendly web interfaces. 
            Skilled in HTML, CSS, JavaScript, and React, with a strong focus on clean design and performance. Adept at turning UI/UX designs into functional web applications 
            and continuously learning to stay updated with the latest front-end trends.
            </p>
          </div>
        </div>
    
    </section>
  )
}

export default About