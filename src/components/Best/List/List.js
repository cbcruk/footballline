import React from 'react'
import { IonItem, IonLabel, IonList, IonNote } from '@ionic/react'
import { Spinner } from '../../shared'
import styles from './style.module.css'

function List({ isLoading, data }) {
  return (
    <IonList>
      {isLoading && <Spinner className="ion-padding" />}
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
