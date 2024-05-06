import React from 'react'
import "./Header.css";
import { useState } from 'react';

const Header = () => {
  return (
    <div>
        <>
        {/* const [Active, setActive] = useState(false);
        function onclickmenu (){
            setActive(!Active)
        } */}
        <div className="nav">
        <div className="navigation">
            <div className="menu">
                <div id="bar1" className="bar"></div>
                <div id="bar2" className="bar"></div>
                <div id="bar3" className="bar"></div>
            </div>
            <ul id="items">
                <li><a href="#">Sports</a></li>
                <li><a href="#">Business</a></li>
                <li><a href="#">National</a></li>
                <li><a href="#">Finance</a></li>
                <li><a href="#">World</a></li>
            </ul>
        </div>
        <div className="logo">
        <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="no image" />
        </div>
        </div>
        </>
      
    </div>
  )
}

export default Header
            // document.getElementById("menu").classList.toggle("icon");
            // document.getElementById("items").classList.toggle("change");
            //{'menu ${Active ? "icon" : " "} '} onClick={ onclickmenu()}>