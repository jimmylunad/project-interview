import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
} from '@mui/material';
import routes from './routes';

const routesMap = routes.filter((route) => route.showNav === true);

const Pages = () => (
  <>
    <AppBar
      position="fixed"
      color="default"
      elevation={3}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography variant="h5" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Kata Interview
        </Typography>
        <nav>
          {
            routesMap.map((pages) => (
              <Link
                key={pages.name}
                variant="button"
                color="text.primary"
                href={pages.path}
                sx={{ my: 1, mx: 1.5 }}
              >
                {pages.name}
              </Link>
            ))
          }
        </nav>
      </Toolbar>
    </AppBar>
    <BrowserRouter>
      <Routes>
        {
          routes.map((pages) => (
            <Route key={pages.path} path={pages.path} element={pages.element} />
          ))
        }
        <Route
          path="*"
          element={
            <main>No existe la página</main>
          }
        />
      </Routes>
    </BrowserRouter>
  </>
);

export default Pages;
