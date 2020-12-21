import React, { createContext } from 'react'
import { IonContent, IonPage, IonProgressBar } from '@ionic/react'
import { Content, Header, Comments } from '../../components/Detail'
import useDetail from './useDetail'

export const DetailContext = createContext({})

function Detail() {
  const { data, mutate, isLoading, isValidating } = useDetail()

  return (
    <IonPage>
      <Header
        categoryDepth01={data?.categoryDepth01}
        onRefresh={() => mutate()}
      />
      {data && isValidating && <IonProgressBar type="indeterminate" />}
      <IonContent className="ion-padding">
        <Content data={data} isLoading={isLoading} />
        {data?.replies > 0 && (
          <Comments
            id={data?.idx}
            replies={data?.replies}
            memberId={data?.memberId}
          />
        )}
      </IonContent>
    </IonPage>
  )
}

export default Detail
