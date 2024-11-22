import React from 'react'
import { styled } from 'styled-components'
import Image from "next/image"
import google from "@/src/assets/google.svg"

const RTCards = () => {
  return (
    <RTCardContainer>
      <RTCardImage>
        <Image
        src={google}
        alt="Google Logo"
        width={15}
        height={15} />
      </RTCardImage>

      <RTCardDescription>
        <RTCardDescriptionTitle>Playstore subscription</RTCardDescriptionTitle>
        <RTCardDescriptionText>20th November 2024</RTCardDescriptionText>
      </RTCardDescription>

      <RTCardAmount>-$3000</RTCardAmount>
    </RTCardContainer>
  )
}

export default RTCards



const RTCardContainer = styled.div`
padding-bottom: .5rem;
display: flex;
justify-content: center;
align-items: center;

`

const RTCardImage = styled.div`
width: 40px;
height: 40px;
display: flex;
padding: .5rem ;
background-color: #a0a0a05a;
align-items:center;
border-radius: 2rem;
justify-content: center;
`

const RTCardDescription = styled.div`
padding-left: 1rem;
display: flex;
flex-direction: column;
flex: 1;
justify-content: space-between;
`
const RTCardDescriptionTitle = styled.span`
font-size: 13px;
margin-bottom: 3px;
`
const RTCardDescriptionText = styled.p`
font-size: 10px;
color: gray;
`

const RTCardAmount = styled.div`
color: red;
`