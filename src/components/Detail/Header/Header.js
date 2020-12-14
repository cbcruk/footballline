import React from 'react'
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonBackButton,
  IonButtons,
  IonButton,
  IonIcon
} from '@ionic/react'
import { useLocation } from 'react-router-dom'
import { refreshOutline, shareOutline } from 'ionicons/icons'
import { BOARD_ITEMS_CATEGORY } from '../../../constants'
import Popover from './Popover'

function Header({ categoryDepth01, onRefresh }) {
  const location = useLocation()
  const title =
    BOARD_ITEMS_CATEGORY[location.state?.categoryDepth01 ?? categoryDepth01]

  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton />
        </IonButtons>
        <IonTitle>{title}</IonTitle>
        <IonButtons slot="end">
          <IonButton onClick={onRefresh}>
            <IonIcon slot="start" icon={refreshOutline} />
          </IonButton>
          <IonButton onClick={() => {}}>
            <IonIcon slot="start" icon={shareOutline} />
          </IonButton>
          <Popover />
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  )
}

export default Header
