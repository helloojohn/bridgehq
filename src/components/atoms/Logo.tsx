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
 padding:1.8rem 0;
 text-decoration: none;
 color: black;
 /* color: #343C6A; */
`

const LogoText = styled.span`
padding-left:0.5rem;
font-size: 1.5rem;
font-weight: 900;
`

