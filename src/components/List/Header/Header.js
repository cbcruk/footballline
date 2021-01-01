import React from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonMenuToggle,
  IonList
} from '@ionic/react'
import { menuOutline, refresh } from 'ionicons/icons'
import { BOARD_ITEMS_CATEGORY } from '../../../constants'
import Popover from '../../shared/Popover'
import { PopoverItem } from '../../shared'
import Search from './Search'

function Header({ onRefresh }) {
  const { categoryDepth01 } = useParams()
  const title = BOARD_ITEMS_CATEGORY[categoryDepth01]

  return (
    <IonHeader>
      <Helmet>
        <title>{title}</title>
      </Helmet>
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
          <Search />
          <IonButton onClick={onRefresh}>
            <IonIcon slot="start" icon={refresh} />
          </IonButton>
          <Popover>
            <IonList>
              <PopoverItem routerLink={`/best/${categoryDepth01}`}>
                베스트글 보기
              </PopoverItem>
            </IonList>
          </Popover>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  )
}

export default Header
