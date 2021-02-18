import admin from '../../src/lib/firebaseAdmin'

async function scrapId(req, res) {
  const db = admin.firestore()
  const { uid } = await admin.auth().verifyIdToken(req.headers.authorization)

  if (req.method === 'DELETE') {
    await db.doc(`me/${uid}`).collection('scrap').doc(req.query.id).delete()

    res.send(200)
  }
}

export default scrapId
