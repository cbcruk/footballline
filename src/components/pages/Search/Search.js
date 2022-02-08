import React from 'react'
import {
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonPage,
  IonProgressBar
} from '@ionic/react'
import { Items } from '../../List'
import Header from '../../Search/Header'
import useList from '../List/useList'

function Search() {
  const { list, loading, isValidating, size, setSize } = useList()

  return (
    <>
      <IonPage>
        <Header />
        {isValidating && <IonProgressBar type="indeterminate" />}
        <IonContent>
          <Items list={list} />
          <IonInfiniteScroll
            threshold="100px"
            disabled={loading}
            onIonInfinite={async (e) => {
              await setSize(size + 1)
              e.target.complete()
            }}
          >
            <IonInfiniteScrollContent />
          </IonInfiniteScroll>
        </IonContent>
      </IonPage>
    </>
  )
}

export default Search
