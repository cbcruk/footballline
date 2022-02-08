import { useParams } from 'react-router-dom'
import useSWR from 'swr'

function useDetail() {
  const params = useParams()
  const { data, mutate, error, isValidating } = useSWR(
    `/api/detail/${params.id}`
  )

  return {
    data,
    isLoading: !error && !data,
    error,
    mutate,
    isValidating
  }
}

export default useDetail
