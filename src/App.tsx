import { useQuery } from '@tanstack/react-query';
import { getUser } from './api/ProfileAPI';
import UserInfo from './components/UserInfo';
import RepoCard from './components/RepoCard';

import { useEffect, useState } from 'react';

function App() {
  const [showAllRepos, setShowAllRepos] = useState(false);

  const [userName, setUserName] = useState('iVeluu'); // Estado para el nombre de usuario
  const [searchTerm, setSearchTerm] = useState<string>(''); // Estado para el nombre de usuario


  useEffect(() => {
    console.log('username cambiando')
  }, [userName])

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['project', userName],
    queryFn: () => getUser(userName),
    retry: false,
    enabled: !!userName,
    refetchInterval: 5000, // Actualiza cada 5 segundos
  });
  
  if (isLoading) return 'Cargando ...';

  if (isError) return 'Error...';

  const reposToShow = showAllRepos ? data?.reposInfo : data?.reposInfo.slice(0, 4);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setUserName(searchTerm)
  }


  if (data) return (
    <div>
      
      <header className="bg-header bg-cover bg-center h-96 ">
        <div className="max-w-2xl mx-auto">
          <div className="pt-10 mx-4">

            <form onSubmit={handleSubmit} className="flex bg-primary px-8 py-6 justify-between items-center rounded-xl border-4 border-transparent hover:border-outColor transition-all duration-300 ease-in-out">
              <img src="/Search.svg" alt="Logo lupa de busqueda" className="my-auto mr-4" />
              <input
                type="text"
                placeholder="username"
                name="search"
                id="search"
                className="bg-primary flex-1 text-colorTxt bg-transparent outline-none text-[20px] appearance-none'"
                autoComplete="off"
                onChange={(e) => {
                  refetch()
                  setSearchTerm(e.target.value)
                }} 
              />

            </form>
          </div>
          <section className="flex bg-followers p-3 items-center rounded-xl translate-y-2 mx-4 gap-5">
            <img src={data.userInfo.avatar_url} alt={`Imagen del usuario ${data.userInfo.name}`} className="w-24 rounded-xl" />
            <div className="">
              <h1 className="text-colorTxt text-[24px]">{data.userInfo.name}</h1>
              <p className="text-p text-[16px]">{data.userInfo.bio ? data.userInfo.bio : 'Not biography '}</p>
            </div>
          </section>
        </div>
      </header>

      <UserInfo user={data.userInfo} />

      <main className="grid grid-cols-1 md:grid-cols-2 lg:max-w-5xl mx-auto gap-12 mb-14">
        {reposToShow!.length > 0 &&
          reposToShow!.map((repo) => <RepoCard key={repo.id} repo={repo} />)}
      </main>

      <div className="text-center mb-14">
        {showAllRepos ? (
          // Botón para mostrar menos repositorios
          <button
            onClick={() => setShowAllRepos(false)}
            className="bg-primary text-colorTxt px-4 py-2 rounded-md mt-4"
          >
            View less repositories
          </button>
        ) : (
          // Botón para mostrar todos los repositorios
          data.reposInfo.length > 4 && (
            <button
              onClick={() => setShowAllRepos(true)}
              className="bg-primary text-colorTxt px-4 py-2 rounded-md mt-4"
            >
              View all repositories
            </button>
          )
        )}
      </div>
    </div>
  );

}

export default App;
