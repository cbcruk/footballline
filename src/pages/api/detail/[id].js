import axios from '../../../lib/http'
import decode from '../../../lib/decode'

async function detail(req, res) {
  const { id } = req.query
  const response = await axios.get(`/board/${id}`)
  const data = response.data.match(/data-article="(\w+)"/)[1]
  const decoded = JSON.parse(decode(data))
  const {
    categoryDepth01,
    subject,
    replies,
    idx,
    memberId,
    memberNickname,
    writeDate,
    views,
    likes,
    contentHtml
  } = decoded

  res.send({
    categoryDepth01,
    subject,
    replies,
    idx,
    memberId,
    memberNickname,
    writeDate,
    views,
    likes,
    content: contentHtml
  })
}

export default detail
