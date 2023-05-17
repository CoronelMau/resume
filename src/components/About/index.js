import styled from "styled-components";

const Section = styled.section`
display: grid;
margin: 0 10vw 0;
padding: 3rem 0;
align-items: center;
grid-template-columns: 3fr 1fr;
gap: 100px;
`

const AboutMe = styled.div`
display: flex;
flex-direction: column;
width: 90%;
`

const MainTitle = styled.h1`
font-size: 2.5rem;
font-weight: bold;
color: #4a5b6a;
`

const AboutText = styled.p`
font-size: 1.1rem;
padding: 1.5rem 0;
line-height: 1.2;`

const MePhoto = styled.img`
height: 368px;
border-radius: 50%;
padding-right: 3rem;
`

const SocialMedia = styled.ul`
display: flex;
justify-content: space-around;
font-size: .85rem;
`

const ArrowImg = styled.img`
width: 10px;
padding-left: .3rem;
`

const Link = styled.a`
text-decoration: none;
color: black;
color: #4a5b6a;
`

const items = [
  { id: 1, href: "https://github.com/CoronelMau/", name: "Github" },
  { id: 2, href: "https://www.linkedin.com/in/mauricio-coronel/", name: "LinkedIn" },
  { id: 3, href: "https://www.instagram.com/m.coronel/", name: "Instagram" },
  { id: 4, href: "#", name: "Resume" }
];

const About = () => {
  return (
    <Section>
      <AboutMe>
        <MainTitle>Hello! My name is Mauricio Coronel and I am a front-end developer</MainTitle>
        <AboutText>I'm architect from profession, but software developer from passion. At the time I'm
          learning programming in the Oracle ONE by Alura project.
        </AboutText>
        <SocialMedia>
          {items.map(({ id, name, href }) =>
            <li><Link href={href}>{name}<ArrowImg src="../../img/right-arrow.png" /></Link></li>
          )}
        </SocialMedia>
      </AboutMe>
      <MePhoto alt="Mauricio Coronel Photo" src="../../img/Me_Photo.png" />
    </Section >
  );
}

export default About;