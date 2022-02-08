import {
  Container,
  Button,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
} from '@mui/material';

const Home = () => (
  <>
    <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 14, pb: 6 }}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Kata PeYa
      </Typography>
    </Container>
    <Container maxWidth="lg" component="main">
      <Grid container spacing={4} alignItems="flex-end">
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
        >
          <Card
            elevation={3}
          >
            <CardHeader
              title="pro"
              subheader="most Popular"
              titleTypographyProps={{ align: 'center' }}
              subheaderTypographyProps={{
                align: 'center',
              }}
              sx={{
                backgroundColor: (theme) => theme.palette.grey[200],
              }}
            >
              textd
            </CardHeader>
            <CardContent>
              prueba de color
            </CardContent>
            <CardActions>
              <Button
                fullWidth
                variant="outlined"
              >
                hola
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </>
);

export default Home;
