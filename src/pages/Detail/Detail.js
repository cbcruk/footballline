import React, { createContext } from 'react'
import {
  IonContent,
  IonPage,
  IonProgressBar,
  IonRow,
  IonSpinner
} from '@ionic/react'
import classNames from 'classnames'
import { Metainfo } from '../../components/shared'
import { Header } from '../../components/Detail'
import useDetail from './useDetail'
import { getHtml } from './helper'
import styles from './style.module.css'
import Comments from '../../components/Detail/Comments'

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
        {isLoading ? (
          <IonRow class="ion-justify-content-center">
            <IonSpinner name="crescent" />
          </IonRow>
        ) : (
          <>
            <div className={classNames(['ion-padding-bottom', styles.header])}>
              <h2>{data?.subject}</h2>
              <Metainfo
                className={styles.metainfo}
                memberNickname={data?.memberNickname}
                writeDate={data?.writeDate}
                views={data?.views}
                likes={data?.likes}
              />
            </div>
            <p
              dangerouslySetInnerHTML={{
                __html: getHtml(data?.contentHtml)
              }}
            />
            {data?.replies > 0 && (
              <Comments
                id={data?.idx}
                replies={data?.replies}
                memberId={data?.memberId}
              />
            )}
          </>
        )}
      </IonContent>
    </IonPage>
  )
}

export default Detail
