import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';

export function App() {
  return (
    <>
      <Container>
        <Heading>Logo</Heading>
      </Container>
      <Container>
        <Heading>Menu</Heading>
      </Container>
      <Container>
        <Heading>Form</Heading>
      </Container>
      <Container>
        <Heading>Footer</Heading>
      </Container>
    </>
  );
}
