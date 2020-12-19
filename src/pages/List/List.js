import React from 'react'
import {
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonPage,
  IonProgressBar
} from '@ionic/react'
import { Header, Menu, Items } from '../../components/List'
import useList from './useList'
import useContentScroll from './useContentScroll'

function List() {
  const { list, loading, isValidating, size, setSize, mutate } = useList()
  const { contentRef, handleScroll } = useContentScroll()

  return (
    <>
      <Menu />
      <IonPage id="list-page">
        <Header
          onRefresh={async () => {
            handleScroll()
            await setSize(1)
            await mutate()
          }}
        />
        {isValidating && <IonProgressBar type="indeterminate" />}
        <IonContent ref={contentRef}>
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

export default List
