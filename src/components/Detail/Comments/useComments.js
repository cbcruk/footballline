import { useEffect } from 'react'
import useSWR from 'swr'
import rpc from '../../../lib/rpc'
import { getList } from './helper'

function useComments({ id, replies }) {
  const {
    data = {
      comments: [],
      totalElements: 0
    },
    mutate,
    error
  } = useSWR(`/board/${id}/comments`, rpc)
  const list = getList(data.comments)

  useEffect(() => {
    mutate()
  }, [mutate, replies])

  return {
    list,
    total: data.comments.length,
    isLoading: !error && list.length === 0
  }
}

export default useComments
