import {Suspense} from 'react'
import {useRoutes} from 'react-router-dom'
import {routesConfig} from './routes'
import Header from './pages/Header'
import Footer from './pages/Footer'
import ScrollToTop from './hooks/scrollToTop'

function App() {
  const routes = useRoutes(routesConfig);

  return (
    <div className='app-container'>
      <Header />
      <ScrollToTop />
      <main className='app'>
        <Suspense fallback={<div>Loading...</div>}>
          {routes}
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App
