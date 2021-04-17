import { IonItem, IonLabel, IonToggle } from '@ionic/react'
import { useAtom } from 'jotai'
import { writableDataSaverAtom } from '../../../atom/dataSaver'

function DataSaver() {
  const [dataSaver, setDataSaver] = useAtom(writableDataSaverAtom)

  return (
    <IonItem>
      <IonLabel>데이터 세이버</IonLabel>
      <IonToggle
        checked={dataSaver}
        onIonChange={(e) => setDataSaver(e.detail.checked)}
      />
    </IonItem>
  )
}

export default DataSaver
