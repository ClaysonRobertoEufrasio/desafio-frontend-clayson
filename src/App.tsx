import './App.css';
import AuthProvider from './authContext/AuthContext';
import Home from './pages/Home/home';

function App() {
  return (
    <AuthProvider>
      <Home/>
    </AuthProvider>
  );
}

export default App;
