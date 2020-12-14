import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import rpc from '../../lib/rpc'

function useDetail() {
  const params = useParams()
  const { data, mutate, error, isValidating } = useSWR(
    `/board/${params.id}`,
    rpc
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
