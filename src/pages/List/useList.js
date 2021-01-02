import { useParams } from 'react-router-dom'
import uniqBy from 'lodash/uniqBy'
import { useSWRInfinite } from 'swr'

function useList() {
  const { categoryDepth01, searchText } = useParams()
  const { data, loading, isValidating, mutate, size, setSize } = useSWRInfinite(
    (page) => {
      const params = new URLSearchParams()
      params.append('categoryDepth01', categoryDepth01)
      params.append('page', page)
      params.append('searchWindow', '')
      params.append('searchType', 0)
      params.append('searchText', searchText || '')

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
