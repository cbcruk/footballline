import React from 'react'
import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react'

function Segemnt({ type, setType }) {
  return (
    <IonSegment
      value={type}
      onIonChange={(e) => setType(e.detail.value)}
      className="ion-padding"
    >
      <IonSegmentButton value="0">
        <IonLabel>실시간</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="1">
        <IonLabel>Today</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="2">
        <IonLabel>댓글</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  )
}

export default Segemnt
