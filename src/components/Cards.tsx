import React from 'react'
import styled from 'styled-components'
import { base } from '../styles/variables'
import chip from "@/src/assets/chip.svg"
import master from "@/src/assets/master.svg"
import Image from "next/image"



const CardItems = [
    {
        balance: "$40,054",
        holder: 'John Okorie',
        number: '6377 **** **** 6553',
        type: 'Visa',
        expiry: '12/28',
        cvv: '123',
    },
    {
        balance: "$6,954",
        holder: 'John Okorie',
        number: '2887 **** **** 2153',
        type: 'MasterCard',
        expiry: '02/27',
        cvv: '873',
    },
    {
        balance: "$211,54",
        holder: 'John Okorie',
        number: '1022 **** **** 603',
        type: 'Verve',
        expiry: '10/25',
        cvv: '443',
    },
]
const Cards = () => {
    return (
        <>
            {CardItems.map(({balance, holder, number, type, expiry, cvv}) => (


        <CardWrapper key={cvv}>
            <CardBalance>
                <CardBalanceWrapper>
                    <CardTitle>Balance</CardTitle>
                    <CardText>{balance}</CardText>
                </CardBalanceWrapper>

                <Image
                    src={chip}
                    alt="Bridge Logo"
                    width={30}
                    height={30} />

            </CardBalance>
            <CardDetails>
                <div>
                    <CardTitle>CARD HOLDER</CardTitle>
                    <CardText>{holder}</CardText>
                </div>
                <div>
                    <CardTitle>VALID THRU</CardTitle>
                            <CardText>{expiry}</CardText>
                </div>
            </CardDetails>
            <Wrapper>
                <CardNumbers>
                    <CardText>{number}</CardText>
                    <Image
                        src={master}
                        alt="Bridge Logo"
                        width={30}
                        height={30} />
                </CardNumbers>
            </Wrapper>
                </CardWrapper>
            ))}
        </>
    )
}

export default Cards



const CardWrapper = styled.div`
display: flex;
flex-direction: column;

/* background: linear-gradient(107deg, #2421b9 2.61%, #2724ef 101.2%); */
/* background: linear-gradient(107deg, #4C49ED 2.61%, #0A06F4 101.2%); */
height: 11rem;
min-width: 300px;
border-radius: 1rem;
color: white;
gap: .5rem;


background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%230d1838' points='1600%2C160 0%2C460 0%2C350 1600%2C50'/%3E%3Cpolygon fill='%230e315d' points='1600%2C260 0%2C560 0%2C450 1600%2C150'/%3E%3Cpolygon fill='%230f4981' points='1600%2C360 0%2C660 0%2C550 1600%2C250'/%3E%3Cpolygon fill='%231062a6' points='1600%2C460 0%2C760 0%2C650 1600%2C350'/%3E%3Cpolygon fill='%23117aca' points='1600%2C800 0%2C800 0%2C750 1600%2C450'/%3E%3C/g%3E%3C/svg%3E");
background-color: #08023a;
background-size: auto 147%;
  background-position: center;

`



const CardBalance = styled.div`
padding: 1.3rem 1.3rem 0 1.3rem ;
display: flex;
justify-content: space-between;
`

const CardBalanceWrapper = styled.div`
display: flex;
flex-direction: column;
`
const CardNumbers = styled.div`
display: flex;
justify-content: space-between;
/* padding-top: 0.95rem; */
align-items: center;
`

const CardTitle = styled.span`
font-size: 0.7rem;
font-weight: 300;
`

const CardText = styled.h2`
font-size: 0.8rem;
font-weight: 400;
`

const CardDetails = styled.div`
padding: 0 1.3rem;
display: flex;
justify-content: space-between;
width: 90%;
margin-bottom: 1rem;
`

const Wrapper = styled.div`
padding:  0.9rem 1.4rem;
height: 30%;
    border: 1px sold gray;
    border-radius: 0rem 0rem 1.5625rem 1.5625rem;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.00) 100%);
`