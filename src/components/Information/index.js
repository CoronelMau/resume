import styled from "styled-components"

const Information = () => {

  const AboutMeSection = styled.section`
  background-color: #B4C5DB;
  padding: 4rem;
  width: 100%;
  padding-left: 13.5rem;
  `

  const AboutMeHeader = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color:#4a5b6a;
  width: 50%;
  `

  const AboutMeText = styled.p`
  padding-top: 1rem;
  line-height: 1.3;
  width: 40%;
  `

  const Important = styled.span`
  font-weight: bold;
  color: #4a5b6a;
  `

  return (

    <AboutMeSection>
      <AboutMeHeader>About me</AboutMeHeader>
      <AboutMeText>
        Hi! My name is <Important>Mauricio Coronel</Important>. I'm 23 years old, and currently living in Mexico City.
        I'm a self-taught person in this world of programming, always wanting to learn more and more everyday.
      </AboutMeText>
      <AboutMeText>
        I'm a very competitive person, who likes great challenges and does he's best in every single one of them.
        Also, I do well with teams, trying to contribute and expecting to get something out of every project.
      </AboutMeText>
    </AboutMeSection>

  );
}

export default Information;