import styled from "styled-components";

const About = () => {

  const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  padding: 3rem 9rem;
  align-items: center;
  `

  const AboutMe = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    
  `

  const MainTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #4a5b6a;
  `

  const AboutText = styled.p`
  font-size: 1.1rem;
  padding: 1.5rem 0;
  line-height: 1.2;
`

  const MePhoto = styled.img`
  height: 368px;
  border-radius: 50%;
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

  return (
    <Section>
      <AboutMe>
        <MainTitle>Hello! My name is Mauricio Coronel and I am a front-end developer</MainTitle>
        <AboutText>I'm architect from profession, but software developer from passion. At the time I'm
          learning programming in the Oracle ONE by Alura project.
        </AboutText>
        <SocialMedia>
          <li><Link href="https://github.com/CoronelMau/">Github<ArrowImg src="../../img/right-arrow.png" /></Link></li>
          <li><Link href="https://www.linkedin.com/in/mauricio-coronel/">LinkedIn<ArrowImg src="../../img/right-arrow.png" /></Link></li>
          <li><Link href="https://www.instagram.com/m.coronel/">Instagram<ArrowImg src="../../img/right-arrow.png" /></Link></li>
          <li><Link href="#">Resume<ArrowImg src="../../img/right-arrow.png" /></Link></li>
        </SocialMedia>
      </AboutMe>
      <MePhoto src="../../img/Me_Photo.png" />
    </Section>
  );
}

export default About;