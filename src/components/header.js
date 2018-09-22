import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'


const HeaderWrapper = styled.div `
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  
  background-color: rgba(33,33,33,.3);

  h1 {
    margin: 0;
    padding: .5rem;
  }
`

const StyledLink = styled(Link)`
  padding: .75rem;

  color: #DDA0DD;
  text-decoration: none;
  text-shadow: -2px 1px 0px rgba(0, 0, 0, 1);
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <div>
      <h1>
        <StyledLink to='/'>
          {siteTitle}
        </StyledLink>
      </h1>
    </div>
    <div>
      <StyledLink to='/about/'>ABOUT</StyledLink>
      <StyledLink to='/menu/'>MENU</StyledLink>
      <StyledLink to='/contact/'>CONTACT</StyledLink>
    </div>
  </HeaderWrapper>
)

export default Header