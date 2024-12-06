"use client"

import Image from "next/image"
import styled from "styled-components"
// import logo from "@/src/assets/bridge.svg"
import logo from "@/public/icons/bridge-favicon.png"
import Link from "next/link"
import { base } from "@/src/styles/variables"



interface LogoProps {
    sidebarOpen: boolean;
}

// ======================= COMPONENT =====================
const Logo = ({ sidebarOpen }: LogoProps) => {
    return (
        <LogoWrapper href="/">
            <Image
                src={logo}
                alt="Bridge Logo"
                width={30}
                height={30} />
            <LogoText isOpen={sidebarOpen} >Bridge</LogoText>
            {/* {sidebarOpen && <LogoText>Bridge</LogoText>
            } */}
        </LogoWrapper>
    )
}

export default Logo


// ====================== STYLING ========================

const LogoWrapper = styled(Link)`
 display: flex;
 /* align-items: center; */
 justify-content: center;
 align-self: flex-start;
 padding: 1.1rem;
 text-decoration: none;
 color: black;
 cursor: pointer;
`

const LogoText = styled.h2`
padding-left:0.5rem;
margin-right: 0.3rem;
color: ${base.color.primary2};
font-size: 1.3rem;
font-weight: 700;
display: ${({ isOpen }) => (!isOpen ? 'none' : 'block')};


@media (max-width: 991.98px) {
    display: ${({ isOpen }) => (!isOpen ? 'block' : 'none')};
}

`

