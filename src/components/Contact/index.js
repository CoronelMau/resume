import styled from "styled-components";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button"

const Section = styled.section`
margin-top: 3rem;
padding-top: 3rem;
padding-bottom: 5rem;
background-color: #B4C5DB;
display: flex;
flex-direction: column;
align-items: center;
`

const Container = styled.div`
width: 50%;
`

const Title = styled.h1`
margin-top: 3rem;
text-align: center;
font-size: 28px;
font-weight: bold;
padding-bottom: 1.5rem;
color: #4a5b6a;
`

const Text = styled.p`
padding-bottom: 1rem;
`

const FieldsList = [
  { id: 1, label: "Name" },
  { id: 2, label: "Email" },
  { id: 1, label: "Subject" },
]

const Contact = () => {
  return (
    <Section>
      <Container>
        <Title>Contact </Title>
        <Text>Want to contact me? Fill the following fields and I will get in touch with you soon! </Text>

        {FieldsList.map(({ id, label }) =>
          <TextField fullWidth id={id} label={label} variant="filled" margin="normal" />)}

        <TextField
          id="outlined-multiline-static"
          label="Observations"
          multiline
          rows={4}
          variant="filled"
          fullWidth
          margin="normal"
        />
        <Button variant="contained">Submit</Button>
      </Container>
    </Section>
  );
}

export default Contact;