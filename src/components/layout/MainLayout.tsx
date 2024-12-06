"use client"

import { styled } from 'styled-components'
import Header from './Header'
import Sidebar from './Sidebar';

const MainLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <Container>
            <Sidebar />
            <Wrapper>
            <Header />
            {children}
            </Wrapper>
        </Container>
    )
}

export default MainLayout

const Container = styled.div`
height: 100vh;
width: 100vw;
display: flex;

`

const Wrapper = styled.main`
width: 100%;

`