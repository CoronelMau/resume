import React from "react";
import styled from "styled-components";

const Header = () => {

  const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 2rem;
  color: #4a5b6a;
  @media (max-width: 320px) {
  flex-direction: column;
}
  `

  const MyData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  `

  const Logo = styled.img`
  height: 35px;
  @media (max-width: 560px) {
  display: none;
}
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
  @media (max-width: 1200px){
    display: none;
  }
  `

  const Contact = styled.li`
  font-weight: bold;
  `

  const navList = [
    { id: 1, href: "#", name: "About me" },
    { id: 2, href: "#", name: "Skills" },
    { id: 3, href: "#", name: "Hobbies" },
    { id: 4, href: "#", name: "Education" },
    { id: 5, href: "#", name: "Projects" },
  ]

  return (
    <StyledHeader>
      <MyData className="my_data">
        <Logo className="Logo" src="../../img/Logo.png" />
        <Name>Mauricio Coronel</Name>
      </MyData>

      <Navigation>
        <Ul>
          {navList.map(({ id, href, name }) =>
            <li id={id}><Link href={href}>{name}</Link></li>)}
          <Contact>8mau.coronel@gmail.com</Contact>
        </Ul>
      </Navigation>
    </StyledHeader>
  )
}

export default Header;