"use client"

import { styled, ThemeContext } from 'styled-components'
import Logo from '../atoms/Logo'
import Link from "next/link"

import { AiFillCreditCard, AiFillSetting, AiOutlineLeft } from "react-icons/ai";
import { TbMoneybag } from "react-icons/tb";
import { MdAccountCircle } from "react-icons/md";
import { BiSupport, BiBarChart } from "react-icons/bi";
import { RiHomeFill } from "react-icons/ri";
import { FaToolbox } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";
import { base, device } from '@/src/styles/variables';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const sidebarLinks = [
    {
        icon: <RiHomeFill />,
        route: "/",
        label: "Dashboard",
    },
    {
        icon: < BiTransfer />,
        route: "/transactions",
        label: "Transactions",
    },
    {
        icon: <MdAccountCircle />,
        route: "/accounts",
        label: "Accounts",
    },
    {
        icon: < BiBarChart />,
        route: "/investments",
        label: "Investment",
    },
    {
        icon: < AiFillCreditCard />,
        route: "/cards",
        label: "Cards",
    },
    {
        icon: < TbMoneybag />,
        route: "/loans",
        label: "Loans",
    },
    {
        icon: <FaToolbox />,
        route: "/utilities",
        label: "Utilities",
    },
    {
        icon: <BiSupport />,
        route: "/support",
        label: "Support",
    },
    {
        icon: <AiFillSetting />,
        route: "/settings",
        label: "Settings",
    }
]


interface SLinkProps {
    isActive: boolean;
    children: React.ReactNode;
}

interface SiderbarContainerProps {
    isOpen: boolean;
    children: React.ReactNode;
}
interface SidebarButtonProps {
    isOpen: boolean;
    children: React.ReactNode;
    onClick: () => void;
}


const Sidebar = () => {

    // const {setTheme, theme } = useContext(ThemeContext)
    const pathname = usePathname();

    const [sidebarOpen, setSidebarOpen] = useState(true)

    return (
        <>

                <SidebarButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
                    <AiOutlineLeft />
                </SidebarButton>
            <SiderbarContainer isOpen={sidebarOpen}>
                <Logo sidebarOpen={sidebarOpen} />
                <SLinkContainer>
                    {sidebarLinks.map(({ icon, label, route }) => (

                        <SLink key={label} href={route} style={!sidebarOpen ? { width: 'fit-content' } : {}} isActive={pathname === route}>
                            <SLinkIcon>{icon}</SLinkIcon>
                            {/* {sidebarOpen && <SLinkLabel>{label}</SLinkLabel> } */}
                            <SLinkLabel isOpen={sidebarOpen}>{label}</SLinkLabel>
                        </SLink>

                    ))}
                </SLinkContainer>
            </SiderbarContainer></>
    )
}

export default Sidebar



//==================== STYLING ================================

const SiderbarContainer = styled.aside<SiderbarContainerProps>`
border-right: 0.8px solid #E5E5E5;
background: #ffff;
height: 100%;
min-width:${({ isOpen }) => (!isOpen ? '60px' : '230px')};
display: flex;
flex-direction: column;


@media (max-width: 1200px) {
    min-width: ${({ isOpen }) => (!isOpen ? '62px' : '175px')};
}

@media (max-width: 991.98px) {
position: ${({ isOpen }) => (!isOpen ? 'absolute' : 'none')};
min-width: ${({ isOpen }) => (!isOpen ? '220px' : '62px')};

box-shadow: ${({ isOpen }) => (!isOpen ? '0px 4px 20px rgba(0, 0, 0, 0.25)' : '')};
z-index: 1;

}

`


const SidebarButton = styled.button<SidebarButtonProps >`
position:absolute;
top: 20px;
left: ${({ isOpen }) => (isOpen ? '221px' : '52px')};
height: 20px;
width: 20px;
border: none;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'initial')};
z-index: 20;

//laptop
@media (max-width: 1200px) {
    left: ${({ isOpen }) => (isOpen ? '165px' : '')};
}
@media (max-width: 991.98px) {
    left: ${({ isOpen }) => (isOpen ? '54px' : '205px')};
}

`

const SLinkContainer = styled.div`
background: transparent;
margin-top: 15px;

`


const SLink = styled(Link) <SLinkProps>`
display: flex;
color: ${base.color.links};
font-size: ${base.fontSize.t1};
font-weight: 350;
align-items: center;
text-decoration: none;
background: transparent;
${({ isActive }) => isActive && `color: #274dc4;`}



 &::before{
        content:"";
        height: 40px;
        width: 3px;
        background-color: transparent;
        border-radius: 0rem 0.625rem 0.625rem 0rem;
        ${({ isActive }) => isActive && `background-color: #274dc4;`}
    }

&:hover {
    color: ${base.color.primary3};


    /* &::before{
        content:"";
        height: 40px;
        width: 3px;
        background-color: ${base.color.primary3};
        border-radius: 0rem 0.625rem 0.625rem 0rem;
    } */
  }


&:active {
    color: ${base.color.primary3};
  }
`
const SLinkIcon = styled.div`
padding-left: 1rem;
font-size: 1.3rem;
`
const SLinkLabel = styled.div`
margin-left: 1rem;
font-size: 14px;
font-weight: 400;
display: ${({ isOpen }) => (!isOpen ? 'none' : 'block')};


@media  (max-width: 991.98px) {
    display: ${({ isOpen }) => (!isOpen ? 'block' : 'none')};

}

`