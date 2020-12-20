import React from 'react'
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import { refreshOutline } from 'ionicons/icons'

function Header({ title, defaultHref, onRefresh, children }) {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref={defaultHref} />
        </IonButtons>
        {title && <IonTitle>{title}</IonTitle>}
        <IonButtons slot="end">
          {onRefresh && (
            <IonButton onClick={onRefresh}>
              <IonIcon slot="start" icon={refreshOutline} />
            </IonButton>
          )}
          {children}
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  )
}

export default Header
