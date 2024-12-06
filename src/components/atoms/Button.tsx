import React from 'react'
import { styled } from 'styled-components';

const Button = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
  return (
    <Btn>{children}</Btn>
  )
}

export default Button



const Btn = styled.button`
 background-color: #274dc4;
 border: none;
 white-space: nowrap;
 color: white;
 cursor: pointer;
 outline: none;
 font-size: .9rem;
 border-radius: 0.5rem;
 padding: .8rem 1rem;
 transition: all 0.1s ease-in;

 ::-moz-focus-inner {
  border: 0;
 }

 &:hover {
  /* background-color: ''; */
 }

 &:active {
  /* background-color:  */
}

`
