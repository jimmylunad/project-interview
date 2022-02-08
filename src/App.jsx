import { ThemeProvider } from 'styled-components';
import './styles/base/index.css';
import { themeSC } from './styles/theme';
import Pages from './pages';

const App = () => (
  <ThemeProvider theme={themeSC}>
    <Pages />
  </ThemeProvider>
);

export default App;
