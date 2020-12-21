import React from 'react'
import { IonButton, IonIcon, IonList } from '@ionic/react'
import { useLocation, useParams } from 'react-router-dom'
import { shareOutline } from 'ionicons/icons'
import { Popover, Header as SharedHeader, PopoverItem } from '../../shared'
import { BOARD_ITEMS_CATEGORY } from '../../../constants'

function Header({ categoryDepth01, onRefresh }) {
  const location = useLocation()
  const { id } = useParams()
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
          <PopoverItem
            href={`https://soccerline.kr/board/${id}`}
            target="_blank"
          >
            Soccerline에서 보기
          </PopoverItem>
        </IonList>
      </Popover>
    </SharedHeader>
  )
}

export default Header
