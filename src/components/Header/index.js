import React from "react";
import styled from "styled-components";

const Header = () => {

  const StyledHeader = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 2rem;
  color: #4a5b6a;
  `

  const MyData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  `

  const Logo = styled.img`
  height: 35px;
  `

  const Name = styled.p`
  font-weight: bold;
  padding-left: 1rem;
  `

  const Navigation = styled.nav`
  width: 50%;
  `

  const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  `

  const Link = styled.a`
  text-decoration: none;
  color: black;

  `

  const Contact = styled.li`
  font-weight: bold;
  `

  return (
    <StyledHeader>
      <MyData className="my_data">
        <Logo className="Logo" src="../../img/Logo.png" />
        <Name>Mauricio Coronel</Name>
      </MyData>

      <Navigation>
        <Ul>
          <li><Link href="#">About me</Link></li>
          <li><Link href="#">Skills</Link></li>
          <li><Link href="#">Hobbies</Link></li>
          <li><Link href="#">Education</Link></li>
          <li><Link href="#">Projects</Link></li>
          <Contact>8mau.coronel@gmail.com</Contact>
        </Ul>
      </Navigation>
    </StyledHeader>
  )
}

export default Header;