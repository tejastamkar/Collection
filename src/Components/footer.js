import React from 'react';
import { Switcher } from './switcher'
import '../App.css'
import insta from "../assets/instagram.png"
import twitter from "../assets/twitter.png"
function Footer() {
    const DarKmodeRef = Switcher()
    const DarkBtn = DarKmodeRef.sets
    return (

        <div className='Footer'>
            <DarkBtn theme={"DarkBtn1"} />
            <h4 >Follow Us</h4>
            <h4 >All rights reserved</h4>
            <a href="https://www.instagram.com/_rexis_/ ">
                <img className="mediaIcon" src={insta} alt="instagram " />
            </a>
            <a href="https://twitter.com/ArtConnection16 ">
                <img className="mediaIcon" src={twitter} alt="Twitter " />
            </a>
        </div>
    );
}

export default Footer;
