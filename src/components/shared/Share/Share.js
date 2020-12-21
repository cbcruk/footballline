import React from 'react'
import { IonButton, IonIcon } from '@ionic/react'
import { shareOutline } from 'ionicons/icons'

function Share({ data }) {
  const isSupportShare = window.navigator.share

  if (!isSupportShare) {
    return null
  }

  return (
    <IonButton
      onClick={async () => {
        await navigator.share({
          url: window.location.href,
          ...data
        })
      }}
    >
      <IonIcon slot="start" icon={shareOutline} />
    </IonButton>
  )
}

export default Share
