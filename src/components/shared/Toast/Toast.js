import { IonToast } from '@ionic/react'
import { atom, useAtom } from 'jotai'

export const toastAtom = atom(null)

function Toast() {
  const [message, setMessage] = useAtom(toastAtom)

  return (
    <IonToast
      isOpen={Boolean(message)}
      onDidDismiss={() => setMessage(null)}
      message={message}
      duration={1000}
    />
  )
}

export default Toast
