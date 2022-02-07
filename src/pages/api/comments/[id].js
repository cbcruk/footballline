import axios from '../../../lib/http'
import decode from '../../../lib/decode'

async function comments(req, res) {
  const response = await axios.get(`/board/${req.query.id}/comments`)

  res.send(decode(response.data))
}

export default comments
