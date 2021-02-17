import { IonItem, IonLabel } from '@ionic/react'
import { Metainfo } from '../../shared'
import styles from './style.module.css'

function Item({ item, routerLink }) {
  return (
    <IonItem key={item.idx} routerLink={routerLink}>
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
  )
}

export default Item
