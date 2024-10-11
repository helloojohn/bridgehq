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
margin: 1.4rem 2rem;
display: flex;
justify-content: space-between;
`
