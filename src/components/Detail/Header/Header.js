import React from 'react'
import { IonButton, IonIcon, IonLabel, IonList, IonItem } from '@ionic/react'
import { useLocation } from 'react-router-dom'
import { chevronForwardOutline, shareOutline } from 'ionicons/icons'
import { Popover, Header as SharedHeader } from '../../shared'
import { BOARD_ITEMS_CATEGORY } from '../../../constants'

function Header({ categoryDepth01, onRefresh }) {
  const location = useLocation()
  const categoryDepth01State =
    location.state?.categoryDepth01 ?? categoryDepth01
  const title = BOARD_ITEMS_CATEGORY[categoryDepth01State]

  return (
    <SharedHeader
      title={title}
      onRefresh={onRefresh}
      defaultHref={`/board/${categoryDepth01State}`}
    >
      <IonButton onClick={() => {}}>
        <IonIcon slot="start" icon={shareOutline} />
      </IonButton>
      <Popover>
        <IonList>
          <IonItem button>
            <IonLabel>Soccerline에서 보기</IonLabel>
            <IonIcon icon={chevronForwardOutline} slot="end" />
          </IonItem>
        </IonList>
      </Popover>
    </SharedHeader>
  )
}

export default Header
