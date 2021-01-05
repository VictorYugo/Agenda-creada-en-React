import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Menu = styled.ul`
    display:flex;
    justify-content:space-between;
    background-color: #333;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    list-style: none;
`

const MenuItem = styled.li`
    padding: 1rem;
`

const Menulink = styled(Link)`
    text-decoration: none;
    text-transform: uppercase;
    color: #fff;
`
const Navigation = () => (
    <nav>
        <Menu>
            {/*<MenuItem>
                <Menulink href='/'>Home</Menulink>
            </MenuItem>
            <MenuItem>
                <Menulink href='/user'>User</Menulink>
            </MenuItem>
            <MenuItem>
                <Menulink href='/contact'>Contact</Menulink>
            </MenuItem>*/}
            <MenuItem>
                <Menulink to='/'>Home</Menulink>
            </MenuItem>
            <MenuItem>
                <Menulink to='/user'>User</Menulink>
            </MenuItem>
            <MenuItem>
                <Menulink to='/contact'>Contact</Menulink>
            </MenuItem>
        </Menu>
    </nav>
)

export default Navigation;