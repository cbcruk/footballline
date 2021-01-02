import React from 'react'
import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import { useParams } from 'react-router-dom'
import { BOARD_ITEMS_CATEGORY } from '../../../constants'

function Header() {
  const { categoryDepth01, searchText } = useParams()
  const category = BOARD_ITEMS_CATEGORY[categoryDepth01]

  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>
          {category} 검색: {searchText}
        </IonTitle>
        <IonButtons slot="start">
          <IonBackButton defaultHref={`/board/${categoryDepth01}`} />
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  )
}

export default Header
