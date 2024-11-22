import React from 'react'
import { styled } from 'styled-components'
import Image from "next/image"
import stripe from "@/src/assets/stripe.svg"

const TotalCards = () => {
    return (
        <TotalCardContainer>
            <TotalCardImage>
                <Image
                    src={stripe}
                    alt="Google Logo"
                    width={25}
                    height={25} />
            </TotalCardImage>

            <TotalCardDescription>
                <TotalCardDescriptionTitle>My Balance</TotalCardDescriptionTitle>
                <TotalCardDescriptionText>$345554</TotalCardDescriptionText>
            </TotalCardDescription>

        </TotalCardContainer>
    )
}

export default TotalCards;



const  TotalCardContainer = styled.div`
padding: 1.5rem;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
background: white;
border-radius: 1rem;

`

const TotalCardImage = styled.div`
width: 50px;
height: 50px;
display: flex;
padding: .5rem ;
background-color: #a0a0a05a;
align-items:center;
border-radius: 2rem;
justify-content: center;
`

const  TotalCardDescription = styled.div`
padding-left: 1rem;
display: flex;
flex-direction: column;
flex: 1;
justify-content: space-between;
`
const TotalCardDescriptionTitle = styled.p`
font-size: 10px;
color: gray;
margin-bottom: 3px;
`
const TotalCardDescriptionText = styled.span`
font-size: 1rem;
font-weight: 500;
`
