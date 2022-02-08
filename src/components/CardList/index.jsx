// import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Grid,
} from '@mui/material';
import styled from 'styled-components';

const CardSM = styled(Card)`
  background-color: white;
`;

const CardList = ({ users }) => (
  <>
    {
      users.map((user) => (
        <Grid
          key={user.id}
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
        >
          <CardSM
            elevation={3}
          >
            <CardHeader
              title={user.name}
              subheader={`@${user.username}`}
              titleTypographyProps={{ align: 'center' }}
              subheaderTypographyProps={{
                align: 'center',
              }}
              sx={{
                backgroundColor: (theme) => theme.palette.grey[200],
              }}
            />
            <CardContent
              sx={{
                textAlign: 'center',
              }}
            >
              <ul>
                <li>
                  Company:
                  { ` ${user.company.name}`}
                </li>
                <li>{user.company.catchPhrase}</li>
              </ul>
            </CardContent>
            <CardActions>
              <Button
                component="button"
                fullWidth
                variant="outlined"
                href={`/user/${user.id}`}
              >
                View
              </Button>
            </CardActions>
          </CardSM>
        </Grid>
      ))
    }
  </>
);

export default CardList;
