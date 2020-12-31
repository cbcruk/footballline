import axios from '../../src/lib/http'
import decode from '../../src/lib/decode'

async function detail(req, res) {
  const response = await axios.get(`/board/${req.query.id}`)
  const data = response.data.match(/data-article="(\w+)"/)[1]

  res.send(decode(data))
}

export default detail
