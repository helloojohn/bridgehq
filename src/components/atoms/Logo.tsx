"use client"

import Image from "next/image"
import styled from "styled-components"
import logo from "@/src/assets/logo.svg"
import Link from "next/link"





// ======================= COMPONENT =====================
const Logo = () => {
    return (
        <LogoWrapper href="/">
            <Image
                src={logo}
                alt="Bridge Logo"
                width={30}
                height={30} />
            <LogoText>Bridge</LogoText>
        </LogoWrapper>
    )
}

export default Logo


// ====================== STYLING ========================

const LogoWrapper = styled(Link)`
 display: flex;
 align-items: center;
 padding: 1.6rem 2rem;
 text-decoration: none;
 color: black;
 cursor: pointer;
`

const LogoText = styled.strong`
padding-left:0.5rem;
font-size: 1.5rem;
font-weight: 900;
`

