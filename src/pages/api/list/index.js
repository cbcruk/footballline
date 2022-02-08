import axios from '../../../lib/http'
import decode from '../../../lib/decode'

async function list(req, res) {
  const response = await axios.get(`/board`, {
    params: req.query
  })

  res.send(decode(response.data))
}

export default list
