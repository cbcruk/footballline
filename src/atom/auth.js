import { atom } from 'jotai'
import firebaseApp from '../lib/firebase'

function getUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebaseApp.auth().onAuthStateChanged((user) => {
      resolve(user)
      unsubscribe()
    }, reject)
  })
}

export const userAtom = atom(null)

export const fetchUserAtom = atom(
  async (get) => get(userAtom) || (await getUser())
)
