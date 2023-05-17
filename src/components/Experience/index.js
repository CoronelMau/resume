import styled from "styled-components";
import Button from "@mui/material/Button"

const Section = styled.section`
`

const Title = styled.h1`
margin-top: 3rem;
text-align: center;
font-size: 32px;
font-weight: bold;
padding-bottom: 1.5rem;
color: #4a5b6a;
`

const ProjectCard = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
padding-bottom: 4rem;
`

const ProjectImg = styled.img`
  width: 50%;
  box-shadow: 10px 10px 30px 10px rgba(0,0,0,0.1);
`

const ProjectTitle = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
  color: #4a5b6a;
`

const ProjectDesciption = styled.p`
padding-top: 0.5rem;
padding-bottom: 0.5rem;
`

const List = [
  {
    id: 1,
    name: "Text Encrypter",
    description: "Alura challenge",
    img: "../../img/challenge.png",
    repo: "https://github.com/CoronelMau/ChallengeEncriptador"
  },
];

const Experience = () => {
  return (
    <Section>
      <Title>Professional Experience</Title>

      {List.map(({ id, name, description, img, repo }) =>
        <ProjectCard id={id}>
          <ProjectImg src={img} />
          <div>
            <ProjectTitle>{name}</ProjectTitle>
            <ProjectDesciption>{description}</ProjectDesciption>
            <Button href={repo} variant="outlined">Repository</Button>
            <> </>
            <Button variant="contained">Demo</Button>
          </div>
        </ProjectCard>)}
    </Section>
  );
}

export default Experience;