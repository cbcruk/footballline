import React from 'react'
import { useParams } from 'react-router-dom'
import { IonList } from '@ionic/react'
import Item from './Item'

function Items({ list }) {
  const { categoryDepth01 } = useParams()

  return (
    <IonList>
      {list.map((item) => (
        <Item
          key={item.idx}
          routerLink={{
            pathname: `/detail/${item.idx}`,
            state: {
              categoryDepth01: categoryDepth01 || item.categoryDepth01
            }
          }}
          item={item}
        />
      ))}
    </IonList>
  )
}

export default Items
