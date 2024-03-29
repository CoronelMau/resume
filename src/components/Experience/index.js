import styled from 'styled-components';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Section = styled.section``;

const Title = styled.h1`
  margin-top: 3rem;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  padding-bottom: 1.5rem;
  color: #4a5b6a;
`;

const ProjectCard = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 8rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 4rem;
  }
`;

const ProjectImg = styled.img`
  width: 50%;
  box-shadow: 10px 10px 30px 10px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const ProjectTitle = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
  color: #4a5b6a;
  @media screen and (max-width: 768px) {
    padding-top: 1rem;
  }
`;

const ProjectDesciption = styled.p`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

const List = [
  {
    id: 1,
    name: 'Text Encrypter',
    description: 'Alura challenge',
    img: '../../img/challenge.png',
    repo: 'https://github.com/CoronelMau/ChallengeEncriptador',
    demo: 'https://coronelmau.github.io/ChallengeEncriptador/',
  },
  {
    id: 2,
    name: 'Mini Alura',
    description: ' Flex box practice',
    img: '../../img/flex.png',
    repo: 'https://github.com/CoronelMau/Flex-Box',
    demo: 'https://coronelmau.github.io/Flex-Box/',
  },
  {
    id: 3,
    name: 'Apeperia',
    description: 'Responsive page practice',
    img: '../../img/responsive.png',
    repo: 'https://github.com/CoronelMau/Responsive-Layout',
    demo: 'https://coronelmau.github.io/Responsive-Layout/',
  },
  {
    id: 4,
    name: 'Org',
    description: 'First react project',
    img: '../../img/org.png',
    repo: 'https://github.com/CoronelMau/REACT-First-Practice',
    demo: 'https://react-first-practice-n94umfxqd-coronelmau.vercel.app/',
  },
  {
    id: 5,
    name: 'Smart Bank',
    description: 'First styled components practice',
    img: '../../img/styled-components.png',
    repo: 'https://github.com/CoronelMau/styled-components',
    demo: 'https://styled-components-aphg7b4k0-coronelmau.vercel.app/',
  },
  {
    id: 6,
    name: 'Alura Food',
    description: 'Hooks and MUI components practice',
    img: '../../img/hooks.png',
    repo: 'https://github.com/CoronelMau/hooks-react',
    demo: 'https://coronelmau.github.io/hooks-react/',
  },
  {
    id: 7,
    name: 'Todo list',
    description: 'Todo notes with NodeJs and MongoDB',
    img: '../../img/todo-list.png',
    repo: 'https://github.com/CoronelMau/todo-list',
    demo: null,
    backend: 'https://github.com/CoronelMau/todo-services',
  },
  {
    id: 8,
    name: 'Game of Life',
    description: 'Pure JavaScript practice',
    img: '../../img/game-life.png',
    repo: 'https://github.com/CoronelMau/game-of-life',
    demo: 'https://game-of-life-fawn-five.vercel.app/',
  },
  {
    id: 9,
    name: 'Tic-Tac-Toe',
    description: 'Unit test practice with Jest',
    img: '../../img/tic.png',
    repo: 'https://github.com/CoronelMau/tic-tac-toe',
    demo: 'https://tic-tac-toe-beta-dun-94.vercel.app/',
  },
];

const Experience = () => {
  return (
    <Section id="projects">
      <Title>Projects</Title>

      {List.map(({ id, name, description, img, repo, demo, backend }) => (
        <ProjectCard key={id}>
          <ProjectImg src={img} alt="Project img" />
          <div>
            <ProjectTitle>{name}</ProjectTitle>
            <ProjectDesciption>{description}</ProjectDesciption>
            <Stack spacing={1} direction="row">
              <Button target="_blank" href={repo} variant="outlined">
                Repository
              </Button>
              <Button
                target="_blank"
                href={demo !== null ? demo : backend}
                variant="contained"
              >
                {demo !== null ? 'Demo' : 'Backend'}
              </Button>
            </Stack>
          </div>
        </ProjectCard>
      ))}
    </Section>
  );
};

export default Experience;
