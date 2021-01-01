import { useLocation, useParams } from 'react-router-dom'
import uniqBy from 'lodash/uniqBy'
import { useSWRInfinite } from 'swr'

function useList() {
  const location = useLocation()
  const { categoryDepth01 } = useParams()
  const { data, loading, isValidating, mutate, size, setSize } = useSWRInfinite(
    (page) => {
      const params = new URLSearchParams(location.search)
      params.append('categoryDepth01', categoryDepth01)
      params.append('page', page)

      return `/api/list?${params.toString()}`
    },
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
