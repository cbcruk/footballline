import { useParams } from 'react-router-dom'
import uniqBy from 'lodash/uniqBy'
import { useSWRInfinite } from 'swr'

function useList() {
  const { categoryDepth01 } = useParams()
  const { data, loading, isValidating, mutate, size, setSize } = useSWRInfinite(
    (page) => `/api/list?categoryDepth01=${categoryDepth01}&page=${page}`,
    async (url) => {
      const response = await fetch(url)
      const data = await response.json()

      return data.content
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
