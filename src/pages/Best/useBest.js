import { useState } from 'react'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import rpc from '../../lib/rpc'

function useBest() {
  const { categoryDepth01 } = useParams()
  const [type, setType] = useState('0')
  const { data, error } = useSWR(`/board/best/${categoryDepth01}/${type}`, rpc)

  return {
    data,
    error,
    isLoading: !error && !data,
    type,
    setType,
    categoryDepth01
  }
}

export default useBest
