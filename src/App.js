
import './App.css';
import { useRoutes } from 'react-router-dom';
import Main from './components/Main'

function App() {

  let routes = useRoutes([
    { path: '/', element: <Main /> }
  ]);

  return routes;
}

export default App;
