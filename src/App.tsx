//import { Profile, profileResponse } from "./types";
import { useQuery } from '@tanstack/react-query';
import { getUser } from './api/ProfileAPI';

function App() {
  const userName = 'iVeluu'
    
  const { data, isLoading, isError } = useQuery({
    queryKey: ['project', userName],
    queryFn: () => getUser(userName),
    retry: false
  })

  if (isLoading) return 'Cargando ...'

  if (isError) {
    return 'Error...'
  }
  console.log(data)
  if (data) return (
    <>
      <img src={data.avatar_url} alt={`Imagen del usuario ${data.name}`} />
      <p>{data.name}</p>
      <p>{data.bio ? data.bio : 'null'}</p>
      <p>{data.location ? data.location : 'null'}</p>
      <p>{data.followers}</p>
      <p>{data.following}</p>
    </>
  )
}

export default App
