import { useQuery } from '@tanstack/react-query';
import { getUser } from './api/ProfileAPI';
import Header from './components/Header';
import UserInfo from './components/UserInfo';
import RepoCard from './components/RepoCard';

function App() {
  const userName = 'GitHub';

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
      <UserInfo user={data.userInfo} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:max-w-5xl mx-auto gap-12 mb-14">
        {data.reposInfo.length > 0 &&
          data.reposInfo.map((repo) => <RepoCard key={repo.id} repo={repo} />)}
      </div>
    </div>
  );

}

export default App;
