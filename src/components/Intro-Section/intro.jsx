import React from 'react'
import './intro.css'
import bcgrnd from "../Images/bcgrnd-vd.gif"
import bcgrnd2 from "../Images/coding.gif"
import { useMediaQuery } from 'react-responsive'


function Intro() {
  const forMobile = useMediaQuery({query:'(max-width:600px)'})
  const forLaptop = useMediaQuery({query:'(min-width:600px)'})
  return (
    <>
    <div id='intro'>
      {forMobile?<img src={bcgrnd} alt="" id='myvideo'/>: null}
        {forLaptop?<img src={bcgrnd2} alt="" id='myvideo'/>: null }
        <div id='intro-name'>
            <p id='intro-main'><p> Hello &nbsp;</p>! I'm &nbsp;<strong> Ayush Satvara</strong></p>
            <p id='intro-2'>A Software Developer ..</p>
            <p id='intro-para'>A portfolio website made with react , practising UI / UX . Very passionate about the coding and javascript libraries... Making Applications , websites and web apps , worked as an intern in a company .</p>
        </div>
    </div>
       
        </>
  )
}

export default Intro