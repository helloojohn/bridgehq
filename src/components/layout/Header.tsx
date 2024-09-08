"use client"
import { styled } from 'styled-components'
import SearchBar from '../SearchBar'
import SettingsIcon from '../SettingIcon'
import NotificationsIcon from '../NotificationIcon'
import ProfileIcon from '../ProfileIcon'



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
    padding: 0 2rem 0 2rem;
    height: 5rem;
    background: #ffff;
    border-bottom: 1px solid #E5E5E5;

`

const HeaderTitle = styled.h1`
    font-size: 1.4rem;
    font-weight: 700;
    /* padding: 1.3rem; */
`

const HeaderItemWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`
