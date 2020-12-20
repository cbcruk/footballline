import React from 'react'
import { useParams } from 'react-router-dom'
import { IonItem, IonLabel, IonList } from '@ionic/react'
import { Metainfo } from '../../shared'
import styles from './style.module.css'

function Items({ list }) {
  const { categoryDepth01 } = useParams()

  return (
    <IonList>
      {list.map((item) => (
        <IonItem
          key={item.idx}
          routerLink={{
            pathname: `/detail/${item.idx}`,
            state: {
              categoryDepth01: categoryDepth01 || item.categoryDepth01
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
