import useSWR from 'swr'
import { getIdToken } from '../../lib/firebase'

function useScrap(auth) {
  const result = useSWR(['/api/scrap', auth], async (url) => {
    if (!auth) {
      return
    }

    const token = await getIdToken()

    return fetch(url, {
      headers: {
        Authorization: token
      }
    }).then((r) => r.json())
  })

  return {
    ...result,
    isLoading: !result.data && !result.error
  }
}

export default useScrap
