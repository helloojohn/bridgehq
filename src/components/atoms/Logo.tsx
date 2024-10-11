"use client"

import Image from "next/image"
import styled from "styled-components"
import logo from "@/src/assets/logo.svg"
import Link from "next/link"
import { base } from "@/src/styles/variables"





// ======================= COMPONENT =====================
const Logo = () => {
    return (
        <LogoWrapper href="/">
            <Image
                src={logo}
                alt="Bridge Logo"
                width={30}
                height={30} />
            <LogoText>BRIDGE</LogoText>
        </LogoWrapper>
    )
}

export default Logo


// ====================== STYLING ========================

const LogoWrapper = styled(Link)`
 display: flex;
 align-items: center;
 padding: 1rem 2rem;
 text-decoration: none;
 color: black;
 cursor: pointer;
`

const LogoText = styled.h2`
padding-left:0.5rem;
color: ${base.color.primary2};
font-size: 1.2rem;
font-weight: 800;
`

