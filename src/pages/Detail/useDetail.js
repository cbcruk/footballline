import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import useAuthSWR from '../../hooks/useAuthSWR'
import useQuery from './useQuery'

function useDetail() {
  const params = useParams()
  const query = useQuery()
  const target = query.from === 'scrap' ? 'scrap' : 'detail'
  const { current: url } = useRef(`/api/${target}/${params.id}`)
  const { data, mutate, error, isValidating } = useAuthSWR(url)

  return {
    data,
    isLoading: !error && !data,
    error,
    mutate,
    isValidating
  }
}

export default useDetail
