import {
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonLoading
} from '@ionic/react'
import { useAtom } from 'jotai'
import { useState } from 'react'
import { userAtom } from '../../../atom/auth'
import firebaseApp from '../../../lib/firebase'
import styles from './style.module.css'

const REQUEST = 'request'

function SignIn() {
  const [, setUser] = useAtom(userAtom)
  const [state, setState] = useState('idle')
  const isRequest = state === REQUEST

  return (
    <form
      autoComplete="off"
      onSubmit={async (e) => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const password = form.password.value

        setState(REQUEST)

        const { user } = await firebaseApp
          .auth()
          .signInWithEmailAndPassword(email, password)

        setUser(user)
      }}
    >
      <IonItem>
        <IonLabel position="stacked">Email</IonLabel>
        <IonInput type="text" name="email" className="ion-margin-top" />
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">Password</IonLabel>
        <IonInput type="password" name="password" className="ion-margin-top" />
      </IonItem>
      <IonButton
        type="submit"
        disabled={isRequest}
        expand="block"
        className="ion-margin"
      >
        Submit
      </IonButton>
      <IonLoading
        cssClass={styles.loading}
        isOpen={isRequest}
        spinner="dots"
        message="잠시만 기다려주세요"
      />
    </form>
  )
}

export default SignIn
