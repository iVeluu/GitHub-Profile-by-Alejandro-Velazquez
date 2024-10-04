import { useQuery } from '@tanstack/react-query';
import { getUser } from './api/ProfileAPI';
import Header from './components/Header';

function App() {
  const userName = 'midudev';

  const { data, isLoading, isError } = useQuery({
    queryKey: ['project', userName],
    queryFn: () => getUser(userName),
    retry: false
  });

  if (isLoading) return 'Cargando ...';

  if (isError) return 'Error...';

  console.log(data);

  if (data) return (
    <div>
      <Header />
    </div>
  );

}

export default App;
