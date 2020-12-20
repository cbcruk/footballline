import React from 'react'
import { Spinner } from '../../shared'
import List from './List'
import useComments from './useComments'
import styles from './style.module.css'

function Comments({ id, replies, memberId }) {
  const { list, total, isLoading } = useComments({
    id,
    replies
  })

  return (
    <details open className={styles.wrapper}>
      <summary className={styles.summary}>{total || replies}개의 댓글</summary>
      {isLoading ? <Spinner /> : <List list={list} authorId={memberId} />}
    </details>
  )
}

export default Comments
