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
    mutate
  } = useSWR(`/board/${id}/comments`, rpc)
  const list = getList(data.comments)

  useEffect(() => {
    mutate()
  }, [mutate, replies])

  return { list, total: data.comments.length }
}

export default useComments