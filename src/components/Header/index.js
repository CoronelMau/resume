import React from "react";
import styled from "styled-components";

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

const LinkTo = styled.a`
text-decoration: none;
color: black;
@media (max-width: 1200px){
  display: none;
}
`

const Contact = styled.li`
font-weight: bold;
`

const Header = () => {

  const navList = [
    { id: 1, href: "/information", name: "About me" },
    { id: 2, href: "/skills", name: "Skills" },
    { id: 3, href: "/hobbies", name: "Hobbies" },
    { id: 4, href: "/education", name: "Education" },
    { id: 5, href: "/projects", name: "Projects" },
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
            <li id={id}><LinkTo onClick={(e) => { e.preventDefault(); }}
              href={href}>{name}</LinkTo></li>)}
          <Contact>8mau.coronel@gmail.com</Contact>
        </Ul>
      </Navigation>
    </StyledHeader>
  )
}

export default Header;