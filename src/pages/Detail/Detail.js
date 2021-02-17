import React, { createContext, useCallback } from 'react'
import { IonContent, IonPage, IonProgressBar } from '@ionic/react'
import { useAtom } from 'jotai'
import { Content, Header, Comments } from '../../components/Detail'
import { toastAtom } from '../../components/shared/Toast/Toast'
import { getIdToken } from '../../lib/firebase'
import useDetail from './useDetail'

export const DetailContext = createContext({})

function Detail() {
  const { data, mutate, isLoading, isValidating } = useDetail()
  const [, setMessage] = useAtom(toastAtom)
  const handleScrap = useCallback(async () => {
    const token = await getIdToken()

    await fetch('/api/scrap', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Authorization: token
      }
    })

    setMessage('🧲 게시물이 스크랩되었습니다.')
  }, [data, setMessage])

  return (
    <IonPage>
      <Header
        categoryDepth01={data?.categoryDepth01}
        shareTitle={data?.subject ?? ''}
        onScrap={() => handleScrap()}
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
