import React from 'react'
import classNames from 'classnames'
import { Metainfo, Spinner } from '../../shared'
import { getHtml } from './helper'
import styles from './style.module.css'
import { useAtom } from 'jotai'
import { dataSaverAtom } from '../../../atom/dataSaver'

export function Viewer({ html }) {
  return (
    <div
      className={classNames([
        'ion-padding-top',
        'ion-padding-bottom',
        styles.content
      ])}
      dangerouslySetInnerHTML={{
        __html: html
      }}
      onClick={(e) => {
        const target = e.target

        if (target.tagName === 'PICTURE') {
          const img = target.querySelector('img')

          img.setAttribute('src', img.dataset.src)

          target.classList.add('is-done')
        }
      }}
    />
  )
}

function Content({ isLoading, data }) {
  const [dataSaver] = useAtom(dataSaverAtom)

  if (isLoading) {
    return <Spinner />
  }

  if (!data) {
    return <div className={styles.content}>삭제된 게시글입니다.</div>
  }

  return (
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
        <Viewer html={getHtml(data?.content, dataSaver)} />
      </div>
    </>
  )
}

export default Content
