import { Typography } from '@mui/material';
import styled from 'styled-components';

export const TitleMS = styled(Typography)`
  color: ${(props) => props.theme.color};
`;

const Title = ({ children }) => (
  <TitleMS
    variant="h2"
    align="center"
    gutterBottom
  >
    { children }
  </TitleMS>
);

export default Title;
