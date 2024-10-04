import { useQuery } from '@tanstack/react-query';
import { getUser } from './api/ProfileAPI';

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
      <img src={data.userInfo.avatar_url} alt={`Imagen del usuario ${data.userInfo.name}`} />
      <p>{data.userInfo.name}</p>
      <p>{data.userInfo.bio ? data.userInfo.bio : 'null'}</p>
      <p>{data.userInfo.location ? data.userInfo.location : 'null'}</p>
      <p>{data.userInfo.followers}</p>
      <p>{data.userInfo.following}</p>
      <p>{data.userInfo.repos_url}</p>
      <br />
      <br />
      <main>
        {data.reposInfo.map((repo, index) => (
          <div key={repo.id || index}>
            <p>Forks: {repo.forks_count}</p>
            <p>URL: <a href={repo.html_url}>{repo.html_url}</a></p>
            <p>Licencia: {repo.license?.name || 'Sin licencia'}</p>
            <p>Estrellas: {repo.stargazers_count}</p>
            <p>Última actualización: {new Date(repo.updated_at).toLocaleDateString()}</p>
            <br /><br />
          </div>
        ))}
      </main>
    </div>
  );

}

export default App;
