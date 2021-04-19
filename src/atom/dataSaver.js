import { atom } from 'jotai'

const DATA_SAVER_KEY = 'DATA_SAVER'

function getState() {
  const state = JSON.parse(localStorage.getItem(DATA_SAVER_KEY))

  return state || false
}

export const dataSaverAtom = atom(getState())

export const writableDataSaverAtom = atom(
  (get) => get(dataSaverAtom),
  (_get, set, isChecked) => {
    localStorage.setItem(DATA_SAVER_KEY, isChecked)
    set(dataSaverAtom, isChecked)
  }
)
