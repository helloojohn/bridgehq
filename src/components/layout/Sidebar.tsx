"use client"

import { styled } from 'styled-components'
import Logo from '../atoms/Logo'

const Sidebar = () => {
    return (
        <SiderbarContainer>
            <Logo />
            SideBar
        </SiderbarContainer>
    )
}

export default Sidebar


const SiderbarContainer = styled.aside`
width: 20%;
border-right: 1px solid #E5E5E5;
padding: 0 2rem;
background: #ffff;

`