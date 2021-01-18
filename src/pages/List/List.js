import React from 'react'
import {
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonPage,
  IonProgressBar
} from '@ionic/react'
import { Spinner } from '../../components/shared'
import { Header, Menu, Items } from '../../components/List'
import useList from './useList'
import useContentScroll from './useContentScroll'

function List() {
  const { list, isLoading, isValidating, size, setSize, mutate } = useList()
  const { contentRef, handleScroll } = useContentScroll()
  const isPageSize1 = list.length > 0 && size === 1

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
        {isPageSize1 && isValidating && <IonProgressBar type="indeterminate" />}
        <IonContent ref={contentRef}>
          {isLoading && <Spinner />}
          {!isLoading && (
            <>
              <Items list={list} />
              <IonInfiniteScroll
                threshold="100px"
                disabled={isLoading}
                onIonInfinite={async (e) => {
                  await setSize(size + 1)
                  e.target.complete()
                }}
              >
                <IonInfiniteScrollContent />
              </IonInfiniteScroll>
            </>
          )}
        </IonContent>
      </IonPage>
    </>
  )
}

export default List
