
import './App.css';
import { useRoutes } from 'react-router-dom';
// import Main from './components/Main'
import Login from './components/Login';

function App() {

  let routes = useRoutes([
    { path: '/', element: <Login /> }
  ]);

  return routes;
}

export default App;
