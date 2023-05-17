import styled from "styled-components";

const Section = styled.section`
text-align: center;
padding-top: 2rem;
padding-bottom: 2rem;
color: #4a5b6a;
`

const Footer = () => {
  return (
    <Section>
      <h1>Created by Mauricio Coronel</h1>
      <h2>2023</h2>
    </Section>
  );
}

export default Footer;