"use client"

import { styled } from 'styled-components'
import Logo from '../atoms/Logo'
import Link from "next/link"
// import { sidebarLinks } from '@/src/constants'

import { AiFillHome } from "react-icons/ai";

const sidebarLinks = [
    {
        icon: (< AiFillHome />),
        route: "/",
        label: "Dashboard",
    },
    {
        icon: < AiFillHome />,
        route: "/transactions",
        label: "Transactions",
    },
    {
        icon: < AiFillHome />,
        route: "/accounts",
        label: "Accounts",
    },
    {
        icon: < AiFillHome />,
        route: "/investments",
        label: "Investment",
    },
    {
        icon: < AiFillHome />,
        route: "/cards",
        label: "Cards",
    },
    {
        icon: < AiFillHome />,
        route: "/loans",
        label: "Loans",
    },
    {
        icon: < AiFillHome />,
        route: "/services",
        label: "Services",
    },
    {
        icon: < AiFillHome />,
        route: "/my-priviledges",
        label: "My Privileges",
    },
    {
        icon: < AiFillHome />,
        route: "/settings",
        label: "Setting",
    }
]



const Sidebar = () => {

    return (
        <SiderbarContainer>
            <Logo />
            <SLinkContainer>
                {sidebarLinks.map((link) => (
                    <SLink key={link.label} href={link.route}>
                        <SLinkIcon>{link.icon}</SLinkIcon>
                        <SLinkLabel>{link.label}</SLinkLabel>
                    </SLink>
                ))}
            </SLinkContainer>
        </SiderbarContainer>
    )
}

export default Sidebar



//==================== STYLING ================================

const SiderbarContainer = styled.aside`
width: 30%;
height: 100%;
/* padding: 0 2rem; */
border-right: 1px solid #E5E5E5;
background: #ffff;
`

const SLinkContainer = styled.div`
background: transparent;
padding: 5rem 0;


`
const SLink = styled(Link)`
display: flex;
border-left: 5px solid blue;


padding: 0;

&::before {
    background-color: black;
    margin: 3rem
}
`
const SLinkIcon = styled.div`
padding-left: 2rem
`
const SLinkLabel = styled.div`

`