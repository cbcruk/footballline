import React from 'react'
import { IonItem, IonLabel, IonList } from '@ionic/react'
import { Metainfo } from '../../shared'
import styles from './style.module.css'

function Items({ list }) {
  return (
    <IonList>
      {list.map((item) => (
        <IonItem
          key={item.idx}
          routerLink={{
            pathname: `/detail/${item.idx}`,
            state: {
              categoryDepth01: item.categoryDepth01
            }
          }}
        >
          <IonLabel>
            <h2>{item.subject}</h2>
            <Metainfo
              className={styles.metainfo}
              memberNickname={item.memberNickname}
              writeDate={item.writeDate}
              views={item.views}
              categoryDepth01={item.categoryDepth01}
              likes={item.likes}
              replies={item.replies}
            />
          </IonLabel>
        </IonItem>
      ))}
    </IonList>
  )
}

export default Items
