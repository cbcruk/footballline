import { getIdToken } from '@cbcruk/firebase-app'
import useSWR from 'swr'

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
