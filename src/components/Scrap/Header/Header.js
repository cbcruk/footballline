import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/react'

function Header() {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>스크랩</IonTitle>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/board/0" />
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  )
}

export default Header
