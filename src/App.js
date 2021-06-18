import { Suspense } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { IonApp, IonRouterOutlet, setupConfig } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import '@ionic/react/css/core.css'
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'
import './theme/variables.css'
import { List, Detail, Best, Search, Scrap, Protected } from './pages'
import { Spinner, Toast } from './components/shared'

setupConfig({
  spinner: 'crescent'
})

function App() {
  return (
    <IonApp>
      <Helmet defaultTitle="풋볼라인" titleTemplate="풋볼라인 - %s" />
      <IonReactRouter>
        <Suspense fallback={<Spinner />}>
          <IonRouterOutlet>
            <Route path="/board/:categoryDepth01" component={List} />
            <Route path="/best/:categoryDepth01" component={Best} />
            <Route
              path="/search/:categoryDepth01/:searchText"
              component={Search}
            />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/scrap" component={Scrap} />
            <Route path="/protected/:id" component={Protected} />
            <Redirect exact from="/" to="/board/0" />
          </IonRouterOutlet>
        </Suspense>
      </IonReactRouter>
      <Toast />
    </IonApp>
  )
}

export default App
