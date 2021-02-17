import {
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonList
} from '@ionic/react'
import Item from '../../List/Items/Item'

function List({ list }) {
  return (
    <IonList>
      {list.map((item) => (
        <IonItemSliding key={item.idx}>
          <Item routerLink={`/detail/${item.idx}`} item={item} />
          <IonItemOptions side="end">
            <IonItemOption color="danger" onClick={() => {}}>
              Delete
            </IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
      ))}
    </IonList>
  )
}

export default List
