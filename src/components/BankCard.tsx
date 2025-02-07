"use client"

import { styled } from 'styled-components'
import { base } from '../styles/variables'
import Cards from './Cards'
import Link from 'next/link'


const BankCard = () => {
    return (
            <BankCardContainer>
                <BankCardHeader>
                    <BankCardTitle>My Cards</BankCardTitle>
                    <BankCardText href='/cards' >See All</BankCardText>
                </BankCardHeader>
                <CardContainer>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                </CardContainer>
            </BankCardContainer>
    )
}

export default BankCard








const BankCardContainer = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 width: 62%;
`

const BankCardHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 1rem;
`
const BankCardTitle = styled.p`
font-size: ${base.fontSize.t1};
font-weight: 500;
color: ${base.color.primary2};
`
const BankCardText = styled(Link)`
color: ${base.color.primary2};
font-size: ${base.fontSize.t2};
font-weight: 500;
align-items: center;
text-decoration: none;
`
const CardContainer = styled.div`
display: flex;
justify-content: flex-start;
gap: 1.3rem;
padding: 0.7rem;
background-color: #eaebf1;
border-radius: 0.5rem;

overflow: scroll;
-ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;

&::-webkit-scrollbar{
  display: none;
}
`