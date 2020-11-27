import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 60px;
  color: deeppink;
  text-transform: uppercase;
  font-weight: 300;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Heading = ({ children }) => {
  return <H1>{children}</H1>;
};

export default Heading;
