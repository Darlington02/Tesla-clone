import React, {useState} from 'react';
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {faX} from "@fortawesome/free-solid-svg-icons";

function Header(){
    const [burgerStatus, setBurgerStatus] = useState(false);

    return (
        <Container>
            <a>
                <img src="images/logo.svg" alt="" />
            </a>
            <Menu>
                <p><a href="">Model S</a></p>
                <p><a href="">Model 3</a></p>
                <p><a href="">Model X</a></p>
                <p><a href="">Model Y</a></p>
            </Menu>
            <RightMenu>
                <a href="">SHOP</a>
                <a href="">TESLA ACCOUNT</a>
                <FontAwesomeIcon className="open-menu" icon={faBars} onClick={()=>setBurgerStatus(true)}></FontAwesomeIcon>
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <FontAwesomeIcon className="close-menu" icon={faX} onClick={()=>setBurgerStatus(false)}></FontAwesomeIcon>
                </CloseWrapper>

                <li><p><a href="">Model S</a></p></li>
                <li><p><a href="">Model 3</a></p></li>
                <li><p><a href="">Model X</a></p></li>
                <li><p><a href="">Model Y</a></p></li>
                <li><p><a href="">Solar Roof</a></p></li>
                <li><p><a href="">Existing Inventory</a></p></li>
                <li><p><a href="">Used Inventory</a></p></li>
                <li><p><a href="">Trade-In</a></p></li>
                <li><p><a href="">Test Drive</a></p></li>
                <li><p><a href="">Powerwall</a></p></li>
                <li><p><a href="">Commercial Energy</a></p></li>
                <li><p><a href="">Utilities</a></p></li>
                <li><p><a href="">Charging</a></p></li>
                <li><p><a href="">Find Us</a></p></li>
                <li><p><a href="">Support</a></p></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div `
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
`
const Menu = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
    @media(max-width: 768px){
        display: none;
    }
`
const RightMenu = styled.div `
    display: flex;
    align-items: center;
    a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
        flex-wrap: nowrap;
    }
    @media(max-width: 768px){
        margin-left: auto;
    }
`
const BurgerNav = styled.div `
    position: fixed; 
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 100;
    list-style: none;
    padding: 20px;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.5s ease-in;
    gap: 2rem;
    li{
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);

        a{
            font-weight: 600;
        }
    }
`
const CloseWrapper = styled.div `
    display: flex;
    justify-content: flex-end;
`