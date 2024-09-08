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



// ======================= STYLING =====================

const Search = styled.div`
background: #F5F7FA;
border-radius: 40px;
margin-right: 10px;
display:flex;
height: 35px;
width: 250px;

input{
  margin-right: 1rem;
  font-family:inherit;
  font-size: .8rem;
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
font-size: 10px;
text-align: inherit;
padding: .5rem 0 .5rem 1.1rem;
display:flex;
cursor: pointer;

svg {
  font-size: 20px;
}
`