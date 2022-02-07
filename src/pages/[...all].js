import dynamic from 'next/dynamic'

const App = dynamic(() => import('../App'), {
  ssr: false
})

function Index() {
  return <App />
}

export default Index
