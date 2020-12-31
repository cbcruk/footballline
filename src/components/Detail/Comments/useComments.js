import useSWR from 'swr'
import { getList } from './helper'

function useComments({ id, replies }) {
  const {
    data = {
      comments: [],
      totalElements: 0
    },
    error
  } = useSWR(`/api/comments/${id}?replies=${replies}`)
  const list = getList(data.comments)

  return {
    list,
    total: data.comments.length,
    isLoading: !error && list.length === 0
  }
}

export default useComments
