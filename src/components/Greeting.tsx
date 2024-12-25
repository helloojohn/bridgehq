import React from 'react'
import styled from 'styled-components';
import Button from './atoms/Button';

const Greeting = () => {
  return (
      <GreetinContainer>
          <Gwrap>
              <GTitle>
                  Welcome, John 👋
              </GTitle>
              <Gtext>
                  Access and Monitor your finances with ease
              </Gtext>
          </Gwrap>
          <Button>
              Add Account
          </Button>
      </GreetinContainer>
  )
}

export default Greeting;

const GreetinContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`
const Gwrap = styled.div`
display: flex;
flex-direction: column;
`

const GTitle = styled.h3`
margin-bottom: 5px;
font-size: 1.2rem;
font-weight: 600;
`

const Gtext = styled.p`
color: gray;
font-size: .8rem;
`