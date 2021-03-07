import { getUser } from '@cbcruk/firebase-app'
import { atom } from 'jotai'

export const userAtom = atom(null)

export const fetchUserAtom = atom(
  async (get) => get(userAtom) || (await getUser())
)
