import React from 'react'
import useSWR from 'swr'
import classNames from 'classnames'
import rpc from '../../../lib/rpc'
import List from './List'
import { getList } from './helper'

function Comments({ id, replies, memberId }) {
  const {
    data = {
      comments: [],
      totalElements: 0
    }
  } = useSWR(`/board/${id}/comments`, rpc)
  const list = getList(data.comments)

  return (
    <details open className={classNames(['ion-padding-top'])}>
      <summary>{data.comments.length || replies}개의 댓글</summary>
      <div className="ion-margin-top">
        <List list={list} authorId={memberId} />
      </div>
    </details>
  )
}

export default Comments
