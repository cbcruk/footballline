import { useCallback, useState } from 'react'
import differenceBy from 'lodash/differenceBy'
import { getIdToken } from '@cbcruk/firebase-app'

function useTrash(list) {
  const [trash, update] = useState([])
  const handleDelete = useCallback(async (idx) => {
    const token = await getIdToken()

    await fetch(`/api/scrap/${idx}`, {
      method: 'DELETE',
      headers: {
        Authorization: token
      }
    })

    update((prev) => [...prev, { idx }])
  }, [])

  return {
    items: differenceBy(list, trash, 'idx'),
    handleDelete
  }
}

export default useTrash
