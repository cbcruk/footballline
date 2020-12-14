import { useLocation as useLocationHook } from 'react-router-dom'
import queryString from 'query-string'

function useLocation() {
  const location = useLocationHook()
  const query = queryString.parse(location.search)

  return {
    ...location,
    query
  }
}

export default useLocation
