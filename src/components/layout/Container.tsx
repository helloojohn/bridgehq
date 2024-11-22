import { styled } from 'styled-components'

const ContainerWrap = ({
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

export default ContainerWrap

const Container = styled.div`
display: flex;
justify-content: space-between;
margin: 2rem 3rem;

`
