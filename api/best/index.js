import axios from '../../src/lib/http'
import decode from '../../src/lib/decode'

async function best(req, res) {
  const { categoryDepth01, type } = req.query
  const response = await axios.get(`/board/best/${categoryDepth01}/${type}`)

  res.send(decode(response.data))
}

export default best
