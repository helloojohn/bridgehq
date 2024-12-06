"use client"
import { styled } from 'styled-components'
import SearchBar from '../SearchBar'
import SettingsIcon from '../SettingIcon'
import NotificationsIcon from '../NotificationIcon'
import ProfileIcon from '../ProfileIcon'
import { base } from '@/src/styles/variables'



const Header = () => {
  return (
      <HeaderContainer>
          <HeaderTitle>Overview</HeaderTitle>
          <HeaderItemWrapper>
              <SearchBar />
              <SettingsIcon />
              <NotificationsIcon />
              <ProfileIcon />
          </HeaderItemWrapper>

    </HeaderContainer>
  )
}

export default Header


// ====================== STYLING ========================

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    height: 3.8rem;
    background: #ffff;
    border-bottom: 1px solid #E5E5E5;
    width: 100%;

    /* position: fixed;
    left:20%;
    top: 0;
    z-index:1; */
`

const HeaderTitle = styled.h1`
    font-size: 19px;
    /* color: ${base.color.primary2}; */
    color: #282828c0;
    /* font-size: ${base.fontSize.h1}; */
    /* font-style: normal; */
    font-weight: 500;
    /* padding: 1.3rem; */
`

const HeaderItemWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`
