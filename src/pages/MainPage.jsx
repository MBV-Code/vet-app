import React from 'react'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { MainContent } from '../layouts/MainContent'
import SearchClient from '../sections/SearchClient'

function MainPage () {
  return (
    <>
      <Header />
      <main className='md:flex'>
        <Sidebar />
        <section className='w-full'>
          <MainContent>
            <SearchClient />
            <h2 className='text-2xl font-bold'>Sección 2</h2>
            <h2 className='text-2xl font-bold'>Sección 3</h2>
            <h2 className='text-2xl font-bold'>Sección 4</h2>
          </MainContent>
        </section>
      </main>
    </>
  )
}

export default MainPage
