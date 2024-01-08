import { useRoutes } from 'react-router-dom';
import Results from './pages/Results';
import CreateArticle from './pages/CreateArticle';

const App = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Results />,
    },
    {
      path: '/create-article',
      element: <CreateArticle />,
    },
  ]);

  return <>{routes}</>;
};

export default App;
