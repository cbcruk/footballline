import React from 'react'
import { IonBackButton, IonButtons, IonHeader, IonToolbar } from '@ionic/react'

function Header({ categoryDepth01 }) {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref={`/board/${categoryDepth01}`} />
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  )
}

export default Header
