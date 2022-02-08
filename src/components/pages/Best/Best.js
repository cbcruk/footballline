import React from 'react'
import { IonContent, IonPage } from '@ionic/react'
import { Header, List, Segment } from '../../Best'
import useBest from './useBest'
import { BOARD_ITEMS_CATEGORY } from '../../../constants'
import { Helmet } from 'react-helmet'

function Best() {
  const { data = [], isLoading, type, setType, categoryDepth01 } = useBest()
  const title = BOARD_ITEMS_CATEGORY[categoryDepth01]

  return (
    <IonPage>
      <Helmet>
        <title>{title} 베스트글</title>
      </Helmet>
      <Header categoryDepth01={categoryDepth01} />
      <IonContent>
        <Segment type={type} setType={setType} />
        <List isLoading={isLoading} data={data} />
      </IonContent>
    </IonPage>
  )
}

export default Best
