import React from 'react'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { MainContent } from '../layouts/MainContent'
import SearchClient from '../sections/SearchClient'
import HealthPlans from '../sections/HealthPlans'
import { UsersTable } from '../components/UsersTable'
import { PetsTable } from '../components/PetsTable'

function MainPage () {
  return (
    <>
      <Header />
      <main className='md:flex'>
        <Sidebar />
        <section className='w-full'>
          <MainContent>
            <SearchClient />
            <HealthPlans />
            <UsersTable />
            <PetsTable />
          </MainContent>
        </section>
      </main>
    </>
  )
}

export default MainPage
