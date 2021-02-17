import { IonContent, IonPage } from '@ionic/react'
import { useAtom } from 'jotai'
import { fetchUserAtom } from '../../atom/auth'
import { Header, List, SignIn } from '../../components/Scrap'
import { Spinner } from '../../components/shared'
import useScrap from './useScrap'

function Scrap() {
  const [user] = useAtom(fetchUserAtom)
  const { data, isLoading } = useScrap(user)

  return (
    <IonPage>
      <Header />
      <IonContent>
        {!user && <SignIn />}
        {user && (isLoading ? <Spinner /> : <List list={data} />)}
      </IonContent>
    </IonPage>
  )
}

export default Scrap
