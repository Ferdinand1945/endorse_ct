import React from 'react'
import styled from "styled-components";

import { Container } from 'react-bootstrap'
import logo from '../assets/endorse.png'

const StyledContainer = styled(Container)`
  margin-top: 40px;
 text-align: center;
`;
const StyledHeader = styled.h1`
  margin-top: 40px;
 text-align: center;
`;
const StyledText = styled.p`
  margin-top: 30px;
 text-align: center;
`;
const StyledsubHeading = styled.h3`
  margin-top: 30px;
 text-align: center;
`;
function Home() {
  return (
    <StyledContainer>
        <img src={logo} alt="Logo" />
        <StyledHeader>Endorse test code application</StyledHeader>
        <StyledText>By Fernando Lopez</StyledText>
        <StyledsubHeading>Navgate through the menu or <a href="/users">click here</a> to discover the advantages of the application.</StyledsubHeading>
    </StyledContainer>
 
  )
}

export default Home