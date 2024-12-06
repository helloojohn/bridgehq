import { styled } from 'styled-components'

const MainWrapper = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default MainWrapper;

const Container = styled.div`
/* margin-top: 5rem; */
/* background: red; */
height: 100vh;
width: 100%;
overflow: scroll;

&::-webkit-scrollbar{
  display: none;
}


`
