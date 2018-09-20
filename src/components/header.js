import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'


const HeaderWrapper = styled.div `
  align-itemes: center;
  background: transparent;
  display: flex;
  height: 15%;
  justify-content: space-between;
  width: 100%;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <div>
      <h1>
        <Link to='/'>
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div>
      <Link to='/about/'>ABOUT</Link>
      <Link to='/menu/'>MENU</Link>
      <Link to='/contact/'>CONTACT</Link>
    </div>
  </HeaderWrapper>
)

export default Header