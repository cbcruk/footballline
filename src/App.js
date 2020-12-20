import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { IonApp, IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { SWRConfig } from 'swr'
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
import { List, Detail, Best } from './pages'

function App() {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false
      }}
    >
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/board/:categoryDepth01" component={List} />
            <Route path="/best/:categoryDepth01" component={Best} />
            <Route path="/detail/:id" component={Detail} />
            <Redirect exact from="/" to="/board/0" />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </SWRConfig>
  )
}

export default App
