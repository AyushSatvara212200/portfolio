import React, { useState } from 'react'
import './navbar.css'
import Logo from '../Images/AS_logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import MenuIcon from '../Images/icons8-menu-26.png'
import { useMediaQuery } from 'react-responsive'


export function Navbar(){

  const mobileScreen = useMediaQuery({query:'(max-width:600px)'})
  const laptopScreen = useMediaQuery({query:'(min-width:600px)'})
  const [display,setDisplay] = useState(false);

  return (
      <div id='navbar'>
        <div id="logo">
            <AnchorLink href="#intro"><img id='logo-img' src={Logo} alt="" /></AnchorLink>
        </div>

        {display && mobileScreen?<div id="disp-title">
            <AnchorLink id='disp-title-home anchor' href="#intro" onClick={()=>setDisplay(!display)}>Home</AnchorLink>
            <hr/>
            <AnchorLink id='disp-title-skills anchor' href="#skill" onClick={()=>setDisplay(!display)}>Skills</AnchorLink>
            <hr/>
            <AnchorLink id='disp-title-about anchor' href="#about" onClick={()=>setDisplay(!display)}>About</AnchorLink>
            <hr/>
            <AnchorLink id='disp-title-contact anchor' href="" onClick={()=>setDisplay(!display)}>Contact</AnchorLink>
        </div>:null}
        
        {mobileScreen ? <div id='Menu-div'>
          <img src={MenuIcon} onClick={()=>setDisplay(!display)} alt=""/>
        </div>:null}

        {laptopScreen? <div id="disp-title">
            <AnchorLink id='disp-title-home anchor' href="#intro" >Home</AnchorLink>
            <AnchorLink id='disp-title-skills anchor' href="#skill">Skills</AnchorLink>
            <AnchorLink id='disp-title-about anchor' href="#about">About</AnchorLink>
            <AnchorLink id='disp-title-contact anchor' href="">Contact</AnchorLink>
        </div>:null}
        </div>
  
  )

}

  

export default Navbar