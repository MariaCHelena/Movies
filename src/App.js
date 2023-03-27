import GlobalStyle from './GlobalStyles'
import RoutesApp from './routes';
import { AuthProvider } from './contexts/Auth'

function App() {

  return (
    <>
      <AuthProvider>
        <RoutesApp />
        <GlobalStyle />
      </AuthProvider>
    </>
  );
}

export default App;
