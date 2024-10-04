import { useQuery } from '@tanstack/react-query';
import { getUser } from './api/ProfileAPI';
import BgImage from './components/BgImage';

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
      <BgImage />
    </div>
  );

}

export default App;
