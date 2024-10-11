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
`
