import React from 'react'
import styled,{css} from 'styled-components/macro'
import { Link } from 'react-router-dom'
import {menuData} from '../data/MenuData'
import {Button} from '../components/button'
import {FaBars} from 'react-icons/fa'


const Nav = styled.nav`
    height 60px;

    display: flex;
    justify-content: space-between;
    z-index: 100;
    position: fixed;
    width: 100%;
`;

const NavLink = css`
color: #000;
display:flex;
align-items:center;
padding: 0 1rem;
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
    color: black;
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
const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -48px;

@media screen and (max-width: 768px){
display:none;
}

`;

const NavMenuLinks = styled(Link)`
${NavLink}
`;
const NavBtn = styled.div`
display: flex;
align-items: center;
margin-right: 24px;
@media screen and (max-width: 768px){
    display:none;
    }
`;

const Navbar = ({toggle}) => {
    console.log('toggle', toggle)
    return (
        <Nav>
            <Logo to= "/"><img src ="https://d2nf8713jxpkg2.cloudfront.net/cache/img/9dcc5daa17cba6a72e0080b30a098f3224eb1233-9dcc5d-400-90-landscape.png?q=1611313278" width= "190px" height= "50px" alt ="logo hotel des deux iles"/> </Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>
                {menuData.map((item,index) => (
                    <NavMenuLinks to ={item.link} key={index}>
                        {item.title}

                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to ='/SignUp' primary='true' >Connexion</Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar
