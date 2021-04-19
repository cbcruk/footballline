import { useLocation } from 'react-router'

function useQuery() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)

  return Object.fromEntries([...searchParams.entries()])
}

export default useQuery
