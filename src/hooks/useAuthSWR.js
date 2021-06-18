import { getIdToken } from '@cbcruk/firebase-app'
import { useAtom } from 'jotai'
import useSWR from 'swr'
import { fetchUserAtom } from '../atom/auth'

function useAuthSWR(url) {
  const [auth] = useAtom(fetchUserAtom)
  const { data, mutate, error, isValidating } = useSWR(url, async (url) => {
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
    data,
    mutate,
    error,
    isValidating,
    isLoading: !error && !data
  }
}

export default useAuthSWR
