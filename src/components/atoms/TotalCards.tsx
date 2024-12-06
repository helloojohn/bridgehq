import React from 'react'
import { styled } from 'styled-components'


import { BsFillPiggyBankFill, BsPiggyBank } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { PiBankFill } from "react-icons/pi";
import { FaFileInvoice } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";





const TotalCardItems = [
    {
        icon: <RiMoneyDollarCircleFill />,
        title: "Balance",
        text: "$2,783,332.33",
        color: "#04b204",
        backgroundColor: "#d3f5d3",
    },

    {
        icon: <PiBankFill />,
        title: "Total Account",
        text: "12",
        color: "#e1a00b",
        backgroundColor: "#f7ecca",
    },

    {
        icon: <BsFillPiggyBankFill />,
        title: "Savings",
        text: "$853,632.21",
        color: "blue",
        backgroundColor: "#ecf3fc",
    },
    {
        icon: <FaFileInvoice />,
        title: "Expenses",
        text: "$3,082.97",
        color: "#f33e3b",
        backgroundColor: "#fcdada",
    },
    {
        icon: <GiReceiveMoney />,
        title: "Loan",
        text: "$63,980.01",
        color: "#dc02ad",
        backgroundColor: "#ffe1f0",
    },

]
const TotalCards = () => {
    return (
        <TotalCardWrapper>
        {TotalCardItems.map(({icon, title, text, color, backgroundColor}) => (
        <TotalCardContainer key={title}>
                <TotalCard backgroundColor={backgroundColor}>
                    <TotalCardIcon color={color}>{icon}</TotalCardIcon>
            </TotalCard>

            <TotalCardDescription>
                 <TotalCardDescriptionTitle>{title}</TotalCardDescriptionTitle>
                 <TotalCardDescriptionText>{text}</TotalCardDescriptionText>
             </TotalCardDescription>
            </TotalCardContainer >
    ))}
        </TotalCardWrapper>
    )
}

export default TotalCards;

const TotalCardWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: .6rem;
overflow-x: scroll;
padding: 0.7rem;
background: #eaebf1;
border-radius: 0.5rem;
width: 100%;


-ms-overflow-style: none;
scrollbar-width: none;
&::-webkit-scrollbar{
    display: none;
}
`

const TotalCardContainer = styled.div`
padding: 1rem;
height: 65px;
display: flex;
justify-content: center;
align-items: center;
background: white;
border-radius: 0.7rem;
min-width: 240px;
/* box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px; */
`

const TotalCard = styled.div`
width: 40px;
height: 40px;
display: flex;
padding: .5rem ;
background-color: ${({ backgroundColor }) => backgroundColor}; ;
/* background-color: #f8f8f887; */
align-items:center;
border-radius: 2rem;
justify-content: center;
`

const TotalCardIcon = styled.div`
/* padding-left: 2rem; */
font-size: 1.5rem;
color: ${({ color }) => color || 'lightgray'};
text-align: center;
display: flex;
justify-content: center;
align-items: center;
`

const TotalCardDescription = styled.div`
padding-left: 1rem;
display: flex;
flex-direction: column;
flex: 1;
justify-content: space-between;
`
const TotalCardDescriptionTitle = styled.p`
font-size: 11px;
color: gray;
margin-bottom: 3px;
`
const TotalCardDescriptionText = styled.span`
font-size: 1.1rem;
font-weight: 500;
width: 100%;
`
