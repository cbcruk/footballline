import React from 'react'
import { IonButton, IonIcon, IonList } from '@ionic/react'
import { clipboardOutline } from 'ionicons/icons'
import { useLocation, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useAtom } from 'jotai'
import {
  Popover,
  Header as SharedHeader,
  PopoverItem,
  Share
} from '../../shared'
import { BOARD_ITEMS_CATEGORY } from '../../../constants'
import { fetchUserAtom } from '../../../atom/auth'

function Header({ categoryDepth01, shareTitle, onRefresh, onScrap }) {
  const location = useLocation()
  const { id } = useParams()
  const categoryDepth01State =
    location.state?.categoryDepth01 ?? categoryDepth01
  const title = BOARD_ITEMS_CATEGORY[categoryDepth01State]
  const [user] = useAtom(fetchUserAtom)

  return (
    <SharedHeader
      title={title}
      onRefresh={onRefresh}
      defaultHref={`/board/${categoryDepth01State}`}
    >
      <Helmet>
        <title>{shareTitle}</title>
      </Helmet>
      {user && (
        <IonButton onClick={onScrap}>
          <IonIcon slot="start" icon={clipboardOutline} />
        </IonButton>
      )}
      <Share
        data={{
          title: shareTitle
        }}
      />
      <Popover>
        <IonList>
          <PopoverItem
            href={`${process.env.REACT_APP_API_URL}/board/${id}`}
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
