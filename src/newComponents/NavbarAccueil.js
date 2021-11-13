import React from 'react'
import styled,{css} from 'styled-components/macro'
import { Link } from 'react-router-dom'
import {menuData} from '../data/MenuData'
import {Button} from '../components/button'
import {FaBars} from 'react-icons/fa'


const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    z-index: 100;
    position: fixed;
    width: 100%;
`;

const NavLink = css`
color: #fff;
display:flex;
align-items:center;

height: 100%;
cursor: pointer;
text-decoration: none;
`;

const Logo = styled(Link)`
${NavLink}
`;


const MenuBars = styled(FaBars)`
display: none;
@media screen and (max-width: 768px){
    display:block;
    background-image: url($Bars);
    color: white;
    background-size: contain;
    height: 40px;
    width: 30px;
    position: absolute;
    cursor: pointer;
    top:0;
    right: 0;
    transform: translate(-50%,25%);
    }
`;


const NavMenuLinks = styled(Link)`
${NavLink}
`;
const NavBtn = styled.div`
display: flex;
align-items: center;
margin-right: 24px;

`;

const NavbarAccueil = () => {
    return (
        <Nav>
            <Logo to= "/"><img src ="https://d2nf8713jxpkg2.cloudfront.net/cache/img/hotel-des-deux-iles-c58d9e-400-90-landscape.png?q=1611313278" width= "190px" height= "50px" alt ="logo hotel des deux iles"/> </Logo>
            
         
            <NavBtn>
                <Button to ='SignUp' primary='true' >Se connecter</Button>
            </NavBtn>
        </Nav>
    )
}

export default NavbarAccueil
