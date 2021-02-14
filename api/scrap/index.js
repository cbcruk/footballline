import admin from '../../src/lib/firebase'

async function scrap(req, res) {
  const db = admin.firestore()
  const scrapRef = db.collection('scrap')

  if (req.method === 'POST') {
    const response = await scrapRef.add(req.body)
    const path = response.path

    res.json({
      path
    })
  }

  if (req.method === 'GET') {
    const snapshot = await scrapRef.get()
    const docs = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        data: doc.data()
      }
    })

    res.json(docs)
  }
}

export default scrap
