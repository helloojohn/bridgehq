"use client"

import { styled, ThemeContext } from 'styled-components'
import Logo from '../atoms/Logo'
import Link from "next/link"

import { AiFillHome, AiFillCreditCard, AiFillSetting } from "react-icons/ai";
import { FaUser, FaHandHoldingUsd, FaToolbox, FaLightbulb } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";
import { base } from '@/src/styles/variables';
import { useContext } from 'react';
import { usePathname } from 'next/navigation';

const sidebarLinks = [
    {
        icon: (< AiFillHome />),
        route: "/",
        label: "Dashboard",
    },
    {
        icon: < BiTransfer />,
        route: "/transactions",
        label: "Transactions",
    },
    {
        icon: < FaUser />,
        route: "/accounts",
        label: "Accounts",
    },
    {
        icon: < AiFillHome />,
        route: "/investments",
        label: "Investment",
    },
    {
        icon: < AiFillCreditCard />,
        route: "/cards",
        label: "Cards",
    },
    {
        icon: < FaHandHoldingUsd />,
        route: "/loans",
        label: "Loans",
    },
    {
        icon: <FaToolbox />,
        route: "/services",
        label: "Services",
    },
    {
        icon: <  FaLightbulb />,
        route: "/my-priviledges",
        label: "My Privileges",
    },
    {
        icon: <AiFillSetting />,
        route: "/settings",
        label: "Settings",
    }
]



const Sidebar = () => {

    // const {setTheme, theme } = useContext(ThemeContext)
    // const { pathname } = usePathname();

    return (
        <SiderbarContainer>
            <Logo />
            <SLinkContainer>
                {sidebarLinks.map(({ icon, label, route }) => (
                    // <SLink key={label} href={route} isActive={pathname === route} >
                    <SLink key={label} href={route}>
                        <SLinkDivider></SLinkDivider>
                        <SLinkIcon>{icon}</SLinkIcon>
                        <SLinkLabel>{label}</SLinkLabel>
                    </SLink>
                ))}
            </SLinkContainer>
        </SiderbarContainer>
    )
}

export default Sidebar



//==================== STYLING ================================

const SiderbarContainer = styled.aside`
border-right: 0.8px solid #E5E5E5;
background: #ffff;
height: 100vh;
width:300px;
/* position:fixed;
z-index:1;
top: 0; */
`

const SLinkContainer = styled.div`
background: transparent;

`
const SLinkDivider = styled.div`
/* height: 40px;
width: 4px; */
margin-left: -5px;
border-radius: 0rem 0.625rem 0.625rem 0rem;

&:hover {
    /* background-color: blue;
    height: 40px;
    width: 4px; */
    margin-left: -5px;
    background: ${base.color.primary3};
    border-radius: 0rem 0.625rem 0.625rem 0rem;
}
`


const SLink = styled(Link)`
display: flex;
color: ${base.color.links};
font-size: ${base.fontSize.t1};
font-weight: 350;
/* justify-content: center; */
align-items: center;
text-decoration: none;
/* border-t: 25px solid red; */


padding: 10px;

&:hover {
    background-color: #2d61ff15;
    color: ${base.color.primary3};
  }
&:active {
    /* background-color: green; */
    color: ${base.color.primary3};
  }
`
const SLinkIcon = styled.div`
padding-left: 2rem;
font-size: 1.1rem;
`
const SLinkLabel = styled.div`
margin-left: 1rem;
font-size: 14px;
font-weight: 400;

`