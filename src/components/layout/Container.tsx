import { styled } from 'styled-components'

// const ContainerWrap = ({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) => {
//   return (
//     <Container>
//       {children}
//     </Container>
//   )
// }

const ContainerWrap = ({
  children,
  style,
}: Readonly<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}>) => {
  return (
    <Container style={style}>
      {children}
    </Container>
  )
}

export default ContainerWrap

const Container = styled.div`
display: flex;
flex-flow: wrap;
align-items: center;
gap: 15px;
justify-content: space-between;
margin: 2rem;

`
