import React from "react";
import { Link } from "react-router-dom";
import "./navbarStyle.js";
import{ NavbarDiv, Logo,LogoText,UlList,ListItem,ListItemA} from './navbarStyle'

const Navbar  = () =>{
    return(
        <div>
            <NavbarDiv>
                <div className ="container">
                    <Logo>
                        <LogoText>Ultra Profile</LogoText>
                    </Logo>
                    <UlList>
                        <ListItem><ListItemA>Home</ListItemA></ListItem>
                        <ListItem><ListItemA>Work</ListItemA></ListItem>
                        <ListItem><ListItemA>Portfolio</ListItemA></ListItem>
                        <ListItem><ListItemA>Resume</ListItemA></ListItem>
                        <ListItem><ListItemA>About</ListItemA></ListItem>
                        <ListItem><ListItemA>Contact</ListItemA></ListItem>
                    </UlList>
            </div>
        </NavbarDiv>
        </div>
    )
}
export default Navbar ;