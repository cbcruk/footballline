import React from 'react'
import { IonContent, IonPage } from '@ionic/react'
import { Header, List, Segment } from '../../components/Best'
import useBest from './useBest'

function Best() {
  const { data = [], isLoading, type, setType, categoryDepth01 } = useBest()

  return (
    <IonPage>
      <Header categoryDepth01={categoryDepth01} />
      <IonContent>
        <Segment type={type} setType={setType} />
        <List isLoading={isLoading} data={data} />
      </IonContent>
    </IonPage>
  )
}

export default Best
