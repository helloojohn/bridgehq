"use client"

import Image from "next/image"
import styled from "styled-components"
// import logo from "@/src/assets/bridge.svg"
import logo from "@/public/icons/bridge-favicon.png"
import Link from "next/link"
import { base } from "@/src/styles/variables"





// ======================= COMPONENT =====================
const Logo = () => {
    return (
        <LogoWrapper href="/">
            <Image
                src={logo}
                alt="Bridge Logo"
                width={25}
                height={25} />
            <LogoText>Bridge</LogoText>
        </LogoWrapper>
    )
}

export default Logo


// ====================== STYLING ========================

const LogoWrapper = styled(Link)`
 display: flex;
 align-items: center;
 padding: 1.5rem 2rem;
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
`
// const LogoText2 = styled.p`
// font-size: 1.3rem;
// `

