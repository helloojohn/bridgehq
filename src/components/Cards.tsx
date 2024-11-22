import React from 'react'
import styled from 'styled-components'
import { base } from '../styles/variables'
import chip from "@/src/assets/chip.svg"
import master from "@/src/assets/master.svg"
import Image from "next/image"


const Cards = () => {
    return (
        <CardWrapper>
            <CardBalance>
                <CardBalanceWrapper>
                    <CardTitle>Balance</CardTitle>
                    <CardText>$5,700</CardText>
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
                    <CardText>John Okorie</CardText>
                </div>
                <div>
                    <CardTitle>VALID THRU</CardTitle>
                    <CardText>12/28</CardText>
                </div>
            </CardDetails>
            <Wrapper>
                <CardNumbers>
                    <CardText>6377 **** **** 6553</CardText>
                    <Image
                        src={master}
                        alt="Bridge Logo"
                        width={30}
                        height={30} />
                </CardNumbers>
            </Wrapper>
        </CardWrapper>
    )
}

export default Cards



const CardWrapper = styled.div`
display: flex;
flex-direction: column;
/* background: ${base.gradient.blue}; */
background: linear-gradient(107deg, #2421b9 2.61%, #2724ef 101.2%);
/* background: linear-gradient(107deg, #4C49ED 2.61%, #0A06F4 101.2%); */
height: 12rem;
width: 100%;
border-radius: 1rem;

/* padding: 1.3rem; */
color: white;
gap: 1rem;
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