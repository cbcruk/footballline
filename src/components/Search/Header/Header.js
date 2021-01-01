import React from 'react'
import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import { useLocation, useParams } from 'react-router-dom'
import { BOARD_ITEMS_CATEGORY } from '../../../constants'

function Header() {
  const { categoryDepth01 } = useParams()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const category = BOARD_ITEMS_CATEGORY[categoryDepth01]
  const q = searchParams.get('searchText')

  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>
          {category} 검색: {q}
        </IonTitle>
        <IonButtons slot="start">
          <IonBackButton defaultHref={`/board/${categoryDepth01}`} />
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  )
}

export default Header
