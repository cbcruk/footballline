import React from 'react'
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import { BOARD_ITEMS } from '../../../constants'

function Menu() {
  return (
    <IonMenu contentId="list-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>메뉴</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonListHeader>게시판</IonListHeader>
          <IonMenuToggle auto-hide="false">
            {BOARD_ITEMS.map((board) => {
              return (
                <IonItem
                  key={board.category}
                  routerLink={`/board/${board.category}`}
                >
                  <IonLabel>{board.label}</IonLabel>
                </IonItem>
              )
            })}
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  )
}

export default Menu
