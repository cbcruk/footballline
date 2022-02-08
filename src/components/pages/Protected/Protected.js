import { IonContent, IonPage, IonProgressBar } from '@ionic/react'
import { useParams } from 'react-router-dom'
import { Content, Header } from '../../Detail'
import useAuthSWR from '../../../hooks/useAuthSWR'

function Protected() {
  const params = useParams()
  const { data, isLoading, isValidating } = useAuthSWR(
    `/api/scrap/${params.id}`
  )

  return (
    <IonPage>
      <Header
        categoryDepth01={data?.categoryDepth01}
        shareTitle={data?.subject ?? ''}
      />
      {data && isValidating && <IonProgressBar type="indeterminate" />}
      <IonContent className="ion-padding">
        <Content data={data} isLoading={isLoading} />
      </IonContent>
    </IonPage>
  )
}

export default Protected
