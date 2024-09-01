import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import styled from 'styled-components'

const SearchBar = () => {
  return (
    <Search>
      <SearchIcon>
          <AiOutlineSearch/>
      </SearchIcon>
      <input placeholder='Search for something'/>
    </Search>
  )
}

export default SearchBar

const Search = styled.div`
background: #F5F7FA;
border-radius: 40px;
display:flex;
height: 50px;
max-width: 320px;

input{
  padding: 0px;
  font-family:inherit;
  font-size: 16px;
  width:100%;
  outline: none;
  border:none;
  /* color:#718EBF; */
  background: transparent;
}
`

const SearchIcon = styled.button`
outline: none;
border: none;
background: none;
color: #718EBF;
font-family: inherit;
letter-spacing: inherit;
font-size: inherit;
text-align: inherit;
padding: .8rem 1.2rem;
display:flex;
cursor: pointer;

svg {
  font-size: 30px;
}
`