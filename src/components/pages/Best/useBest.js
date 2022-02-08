import { useState } from 'react'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'

function useBest() {
  const { categoryDepth01 } = useParams()
  const [type, setType] = useState('0')
  const { data, error } = useSWR(
    `/api/best?categoryDepth01=${categoryDepth01}&type=${type}`
  )

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
