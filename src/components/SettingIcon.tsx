import React from 'react'
import { AiOutlineSetting } from 'react-icons/ai'
import styled from 'styled-components'

const SettingsIcon = () => {
  return (
    <Settings>
      <SettingIcon>
        <AiOutlineSetting />
      </SettingIcon>
    </Settings>
  )
}

export default SettingsIcon



// ======================= STYLING =====================

const Settings = styled.div`
background: #F5F7FA;
border-radius: 40px;
margin: .4rem;
display:flex;
justify-content:center;
align-items: center;
min-height: 35px;
min-width: 35px;
`

const SettingIcon = styled.button`
outline: none;
border: none;
background: none;
color: #718EBF;
font-family: inherit;
letter-spacing: inherit;
text-align: center;
padding: .5rem;
display:flex;
cursor: pointer;

svg {
  font-size: 20px;
  font-family: 900;
}
`