import admin from '../../src/lib/firebaseAdmin'

async function scrapId(req, res) {
  const db = admin.firestore()
  const { uid } = await admin.auth().verifyIdToken(req.headers.authorization)
  const doc = await db.doc(`me/${uid}`).collection('scrap').doc(req.query.id)

  if (req.method === 'GET') {
    const snapshot = await doc.get()
    const item = await snapshot.data()

    res.send(item)
  }

  if (req.method === 'DELETE') {
    await doc.delete()

    res.send(200)
  }
}

export default scrapId
