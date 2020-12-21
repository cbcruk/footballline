import React from 'react'
import { IonIcon, IonItem, IonLabel, isPlatform } from '@ionic/react'
import { chevronForwardOutline } from 'ionicons/icons'

function PopoverItem({ children, ...props }) {
  const isIos = isPlatform('ios')

  return (
    <IonItem button {...props}>
      <IonLabel>{children}</IonLabel>
      {!isIos && <IonIcon icon={chevronForwardOutline} slot="end" />}
    </IonItem>
  )
}

export default PopoverItem
