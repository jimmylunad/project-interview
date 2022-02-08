import { ThemeProvider } from 'styled-components';
import './styles/base/index.css';
import { themeSC } from './styles/theme';
import Pages from './pages';
import AuthProvider from './providers/Auth/provider';

const App = () => (
  <ThemeProvider theme={themeSC}>
    <AuthProvider>
      <Pages />
    </AuthProvider>
  </ThemeProvider>
);

export default App;
