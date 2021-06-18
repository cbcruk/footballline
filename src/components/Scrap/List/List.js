import {
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonList
} from '@ionic/react'
import Item from '../../List/Items/Item'
import useTrash from './useTrash'

function List({ list }) {
  const { items, handleDelete } = useTrash(list)

  return (
    <IonList>
      {items.map((item) => (
        <IonItemSliding key={item.idx}>
          <Item routerLink={`/protected/${item.idx}`} item={item} />
          <IonItemOptions side="end">
            <IonItemOption
              color="danger"
              onClick={() => handleDelete(item.idx)}
            >
              Delete
            </IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
      ))}
    </IonList>
  )
}

export default List
