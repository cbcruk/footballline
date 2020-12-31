import React from 'react'
import { IonList } from '@ionic/react'
import { useLocation, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import {
  Popover,
  Header as SharedHeader,
  PopoverItem,
  Share
} from '../../shared'
import { BOARD_ITEMS_CATEGORY } from '../../../constants'

function Header({ categoryDepth01, shareTitle, onRefresh }) {
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
      <Helmet>
        <title>{shareTitle}</title>
      </Helmet>
      <Share
        data={{
          title: shareTitle
        }}
      />
      <Popover>
        <IonList>
          <PopoverItem
            href={`${process.env.API_URL}/board/${id}`}
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
