import React from 'react'
import styled from 'styled-components';
import Button from './atoms/Button';

const Greeting = () => {
  return (
      <GreetinContainer>
          <Gwrap>
              <GTitle>
                  Hi, John 👋
              </GTitle>
              <Gtext>
                  Monitor your finance with ease
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

`

const Gtext = styled.p`
color: gray;
font-size: .8rem;
`