import React from 'react'
import { IonRow, IonSpinner } from '@ionic/react'
import classNames from 'classnames'

function Spinner({ className }) {
  return (
    <IonRow class={classNames(['ion-justify-content-center', className])}>
      <IonSpinner name="crescent" />
    </IonRow>
  )
}

export default Spinner
