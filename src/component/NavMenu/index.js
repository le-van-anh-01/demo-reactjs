import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Wrapper, LogoText, Menu } from './styles';

const NavMenu = () => {
    return (
        <Wrapper>
            <LogoText>
                <h1>Reactjs Morien</h1>
            </LogoText>
            <Menu>
                <NavLink to='/Router/Dashboard'>
                    Dashboard
                </NavLink>
                <NavLink to='/Router/About'>
                    About
                </NavLink>
            </Menu>
        </Wrapper>
    )
}

export default NavMenu;
