import styled from 'styled-components';

export const TitleSC = styled.h1`
  font-size: 40px;
`;

const Title = ({ children }) => (
  <TitleSC>
    { children }
  </TitleSC>
);

export default Title;
