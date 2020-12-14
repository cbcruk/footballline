import { useParams } from 'react-router-dom'
import uniqBy from 'lodash/uniqBy'
import { useSWRInfinite } from 'swr'
import { stringifyUrl } from 'query-string'
import rpc from '../../lib/rpc'

function useList() {
  const params = useParams()
  const { data, loading, isValidating, mutate, size, setSize } = useSWRInfinite(
    (page) => {
      const key = stringifyUrl({
        url: '/board',
        query: {
          ...params,
          page
        }
      })

      return key
    },
    async (url) => {
      const response = await rpc(url)

      return response.content
    }
  )
  const list = data ? uniqBy([].concat(...data), 'idx') : []

  return {
    list,
    loading,
    mutate,
    isValidating,
    size,
    setSize
  }
}

export default useList
