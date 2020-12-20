import React from 'react'
import {
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonRow,
  IonSpinner
} from '@ionic/react'
import styles from './style.module.css'

function List({ isLoading, data }) {
  return (
    <IonList>
      {isLoading && (
        <IonRow class="ion-justify-content-center ion-padding">
          <IonSpinner name="crescent" />
        </IonRow>
      )}
      {data.map((item, index) => (
        <IonItem
          key={item.idx}
          routerLink={`/detail/${item.idx}`}
          detail={false}
        >
          <IonNote slot="start" color="dark" className={styles.index}>
            {index + 1}
          </IonNote>
          <IonLabel>{item.subject}</IonLabel>
          <IonNote slot="end" color="primary">
            {item.replies}
          </IonNote>
        </IonItem>
      ))}
    </IonList>
  )
}

export default List
