import React from 'react'
import "./skill.css"
import JavaImg from "../Images/java.png" 
import reactImg from "../Images/react.png" 
import hcjImg from "../Images/hcj.png" 
import git from "../Images/git.png" 
import angularImg from "../Images/angular.png" 
import btstp from "../Images/btstp.png" 

function skill() {
  return (
    <div id='skill'>
      <div id='skill-heading'>
      <hr />
      <p id='skill-name'>SKILLS</p>
      <hr />
      </div>
      <div id='design-div'>
        <div id='bars'>
        <div id='progress-bar' style={{backgroundColor:"blue"}}>
          <div id='progress' style={{color:"white"}}>React</div>
          <div id='progress-1' style={{backgroundColor:"cyan"}}></div>
        </div>
        <div id='progress-bar' style={{background:"#DD4B25"}}>
          <div id='progress' style={{color:"white"}}>Html / Css / Js</div>
          <div id='progress-2' style={{backgroundColor:"#ff7c44"}}></div>
        </div>
        <div id='progress-bar' style={{backgroundColor:"black"}}>
          <div id='progress' style={{color:"white"}}>GitHub</div>
          <div id='progress-3' style={{backgroundColor:"gray"}}></div>
        </div>
        <div id='progress-bar' style={{backgroundColor:"#A1130C"}}>
          <div id='progress' style={{color:"white"}}>Angular</div>
          <div id='progress-4' style={{backgroundColor:"#D71A15"}}></div>
        </div>
        <div id='progress-bar' style={{backgroundColor:"#7610F1"}}>
          <div id='progress' style={{color:"white"}}>Bootstrap</div>
          <div id='progress-5' style={{backgroundColor:"#451C84"}}></div>
        </div>
        <div id='progress-bar' style={{backgroundColor:"#507E9C"}}>
          <div id='progress' style={{color:"white"}}>Java</div>
          <div id='progress-6' style={{backgroundColor:"#F1931B"}}></div>
        </div>
        </div>
        <div id="design">
            <div id="design-1"><img id='design-logo' src={git} alt="" /></div>
            <div id="design-2"><img id='design-logo' src={btstp} alt="" /></div>
            <div id="design-3"><img id='design-logo' src={hcjImg} alt="" /></div>
            <div id="design-4"><img id='design-logo' src={reactImg} alt="" /></div>
            <div id="design-5"><img id='design-logo' src={angularImg} alt="" /></div>
            <div id="design-6"><img id='design-logo' src={JavaImg} alt="" /></div>
        </div>
        </div>
 </div>
  )
}


export default skill