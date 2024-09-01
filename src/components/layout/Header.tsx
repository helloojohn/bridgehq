"use client"
import { styled } from 'styled-components'
import SearchBar from '../SearchBar'



const Header = () => {
  return (
      <HeaderContainer>
          <HeaderTitle>Overview</HeaderTitle>
          <HeaderItemWrapper>
              <SearchBar />
              <Wrap/>
              <Wrap/>
              {/*<Wrap/>
              <SettingIcon>Setting</SettingIcon>
              <NotificationIcon>Bell</NotificationIcon>
              <Profile>Profile</Profile> */}
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
    height:6rem;
    background: #ffff;
    border-bottom: 1px solid #E5E5E5;

`

const HeaderTitle = styled.h1`
    font-size: 1.5rem;
    /* padding: 1.3rem; */
`

const HeaderItemWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`
const Wrap = styled.div`
    width: 70px;
    height: 70px;
    margin:  2rem;
    border-radius: 50%;
    background-color: black;
`
