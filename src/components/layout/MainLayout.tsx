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

const Container = styled.main`
    display: flex;
    height: 100vh;
    width: 100vw;
`

const Wrapper = styled.div`
width:100%;`