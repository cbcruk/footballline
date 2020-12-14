import { CORS_URL, SOCCERLINE_URL } from '../constants'
import decode from './decode'
import getDataFromHtml from './getDataFromHtml'

const isServer = typeof window === 'undefined'
const fetchUrl = isServer ? SOCCERLINE_URL : CORS_URL

async function rpc(endpoint) {
  const response = await fetch(fetchUrl + endpoint)
  const data = await response.text()
  const isHtml = data.trim().startsWith('<!DOCTYPE')
  const encodeStr = isHtml ? getDataFromHtml(data) : data

  return JSON.parse(decode(encodeStr))
}

export default rpc
