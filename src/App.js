import React, { Suspense } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { SWRConfig } from 'swr'
import { Provider } from 'jotai'
import * as Sentry from '@sentry/react'
import {
  List,
  Detail,
  Best,
  Search,
  Scrap,
  Protected
} from './components/pages'
import { Spinner, Toast } from './components/shared'
import './lib/firebaseApp'
import './lib/sentry'

setupIonicReact({
  spinner: 'crescent'
})

function App() {
  return (
    <React.StrictMode>
      <SWRConfig
        value={{
          revalidateOnFocus: false
        }}
      >
        <Provider>
          <Sentry.ErrorBoundary fallback={null}>
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
          </Sentry.ErrorBoundary>
        </Provider>
      </SWRConfig>
    </React.StrictMode>
  )
}

export default App
