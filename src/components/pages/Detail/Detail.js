import React, { useCallback } from 'react'
import { IonContent, IonPage, IonProgressBar } from '@ionic/react'
import { useAtom } from 'jotai'
import { getIdToken } from '@cbcruk/firebase-app'
import { Content, Header, Comments } from '../../Detail'
import { toastAtom } from '../../shared/Toast/Toast'
import useDetail from './useDetail'

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
