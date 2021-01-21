import axios from 'axios'
import useSWR from 'swr'

// https://github.com/vercel/swr/issues/129

export function useCancelableSWR(key, opts) {
  const controller = new AbortController()

  return [
    useSWR(key, (url) => fetch(url, { signal: controller.signal }), opts),
    controller
  ]
}

export function useCancellableAxiosSWR(key, opts) {
  const source = axios.CancelToken.source()

  return [
    useSWR(key, (url) => axios.get(url, { cancelToken: source.token }), opts),
    source
  ]
}
