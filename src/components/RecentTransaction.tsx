import React from 'react'
import { styled } from 'styled-components'
import { base } from '../styles/variables'
import RTCards from './RTCards'

const RecentTransaction = () => {
  return (
      <RTransactionContainer>
              <RTTitle>Recent Transactions</RTTitle>


          <RTContainer>
              <RTCards />
              <RTCards />
              <RTCards />
          </RTContainer>
      </RTransactionContainer>
  )
}

export default RecentTransaction




const RTransactionContainer = styled.div`
width: 35%;
display: flex;
flex-direction: column;
gap: 14px;
`
const RTTitle = styled.p`
font-size: ${base.fontSize.t1};
font-weight: 500;
color: ${base.color.primary2};
`
const RTContainer = styled.div`
padding: 1rem;
width: 100%;
height: 12rem;
background: white;
border-radius: 1.4rem;
display: flex;
flex-direction: column;
justify-content: space-between;
`
