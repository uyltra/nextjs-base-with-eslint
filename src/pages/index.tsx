import Heading from '@components/Heading';
import styled from 'styled-components';

const StyledText = styled.p`
  font-weight: bold;
  font-size: 40px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Wrapper = styled.div`
  width: calc(100% - 20vw);
  margin: 100px auto;
  text-align: center;
`;

const Home = () => {
  return (
    <Wrapper>
      <Heading> Next js + eslint + typescript + path aliases </Heading>
      <StyledText> Hack away! </StyledText>
    </Wrapper>
  );
};

export default Home;
