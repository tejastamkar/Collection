import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";
import '../Styles/Nav.css'
import { Switcher } from "./switcher";


export function swtichcase(theme) {
    switch (theme) {
        case "black":
            document.getElementById("main").style.background = "black";
            document.getElementById("root").className = "black";
            break;
        case "white":
            document.getElementById("main").style.background = "white";
            document.getElementById("root").className = "white";
            break;
        default:
            break;
    }
    return (theme)
}
export default function Navbar() {
    const mtheme = Switcher(),
        Setmtheme = mtheme.sets;
    swtichcase(mtheme.colorTheme);
    return (
        <>

            <h3 className='HeaderName'>Rexis Collection </h3>
            <Nav defaultActiveKey="/" className='Nav'>


                <Nav.Item>
                    <Nav.Link href="/" id="mynav-items" className='mynav-items'>
                        Home
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#GamingWallpapers" eventKey="link-1" id="mynav-items" className='mynav-items'>
                        Gaming Wallpapers
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#Setups" eventKey="link-2" id="mynav-items" className='mynav-items'>
                        Setps
                    </Nav.Link>

                </Nav.Item>
                <Setmtheme theme={"DarkBtn"} />
            </Nav>
        </>
    )
}