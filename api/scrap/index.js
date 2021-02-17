import { pick } from 'lodash'
import admin from '../../src/lib/firebaseAdmin'

async function scrap(req, res) {
  const db = admin.firestore()
  const { uid } = await admin.auth().verifyIdToken(req.headers.authorization)
  const scrapRef = db.doc(`me/${uid}`).collection('scrap')

  if (req.method === 'POST') {
    const body = JSON.parse(req.body)

    await scrapRef.doc(`${body.idx}`).set(body)

    res.send(200)
  }

  if (req.method === 'GET') {
    const snapshot = await scrapRef.get()
    const docs = snapshot.docs.map((doc) => {
      return pick(doc.data(), [
        'idx',
        'categoryDepth01',
        'subject',
        'memberNickname',
        'writeDate',
        'views',
        'categoryDepth01',
        'likes',
        'replies'
      ])
    })

    res.json(docs)
  }
}

export default scrap
