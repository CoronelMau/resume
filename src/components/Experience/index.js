import styled from "styled-components";
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack";

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
margin-bottom: 8rem;
@media (max-width: 768px) {
  flex-direction: column;
  margin-bottom: 4rem;
}
`

const ProjectImg = styled.img`
  width: 50%;
  box-shadow: 10px 10px 30px 10px rgba(0,0,0,0.1);
  @media (max-width: 768px) {
  width: 80%;
}
`

const ProjectTitle = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
  color: #4a5b6a;
  @media (max-width: 768px) {
  padding-top: 1rem;
}
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
  {
    id: 2,
    name: "Mini Alura",
    description: " Flex box practice",
    img: "../../img/flex.png",
    repo: "https://github.com/CoronelMau/Flex-Box"
  },
  {
    id: 3,
    name: "Apeperia",
    description: "Responsive page practice",
    img: "../../img/responsive.png",
    repo: "https://github.com/CoronelMau/Responsive-Layout"
  },
  {
    id: 4,
    name: "Org",
    description: "First react project",
    img: "../../img/org.png",
    repo: "https://github.com/CoronelMau/REACT-First-Practice"
  },
  {
    id: 5,
    name: "Smart Bank",
    description: "First styled components practice",
    img: "../../img/styled-components.png",
    repo: "https://github.com/CoronelMau/styled-components"
  },
  {
    id: 6,
    name: "Alura Food",
    description: "Hooks and MUI components practice",
    img: "../../img/hooks.png",
    repo: "https://github.com/CoronelMau/hooks-react"
  },
];

const Experience = () => {
  return (
    <Section>
      <Title>Projects</Title>

      {List.map(({ id, name, description, img, repo }) =>
        <ProjectCard id={id}>
          <ProjectImg src={img} />
          <div>
            <ProjectTitle>{name}</ProjectTitle>
            <ProjectDesciption>{description}</ProjectDesciption>
            <Stack spacing={1} direction="row">
              <Button href={repo} variant="outlined">Repository</Button>
              <Button variant="contained">Demo</Button>
            </Stack>
          </div>
        </ProjectCard>)}
    </Section>
  );
}

export default Experience;