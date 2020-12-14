import React from 'react'
import { useParams } from 'react-router-dom'
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonMenuToggle
} from '@ionic/react'
import { menuOutline, refresh } from 'ionicons/icons'
import { BOARD_ITEMS_CATEGORY } from '../../../constants'

function Header({ onRefresh }) {
  const { categoryDepth01 } = useParams()
  const title = BOARD_ITEMS_CATEGORY[categoryDepth01]

  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuToggle>
            <IonButton>
              <IonIcon icon={menuOutline} />
            </IonButton>
          </IonMenuToggle>
        </IonButtons>
        <IonTitle>{title}</IonTitle>
        <IonButtons slot="end">
          <IonButton onClick={onRefresh}>
            <IonIcon slot="start" icon={refresh} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  )
}

export default Header
