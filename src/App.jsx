import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { MainContent } from './layouts/MainContent'

function App () {
  return (
    <>
      <Header />
      <main className='md:flex'>
        <Sidebar />
        <section className='w-full'>
          <MainContent>
            <h2 className='text-2xl font-bold'>Sección 1</h2>
            <h2 className='text-2xl font-bold'>Sección 2</h2>
            <h2 className='text-2xl font-bold'>Sección 3</h2>
            <h2 className='text-2xl font-bold'>Sección 4</h2>
          </MainContent>
        </section>
      </main>
    </>
  )
}

export default App
