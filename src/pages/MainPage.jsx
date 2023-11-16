import { useState } from 'react'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { MainContent } from '../layouts/MainContent'
import ClientForms from '../sections/ClientForms'
import HealthPlans from '../sections/HealthPlans'
import { ClientsTable } from '../components/ClientsTable'
import { PetsTable } from '../components/PetsTable'

function MainPage () {
  // ToDo: Move this to a custom hook or a context
  const [searchQuery, setSearchQuery] = useState({
    nameField: false,
    nameSearch: '',
    lastNameField: false,
    lastNameSearch: '',
    petNameField: false,
    petSearch: ''
  })

  return (
    <>
      <Header />
      <main className='md:flex'>
        <Sidebar />
        <section className='w-full'>
          <MainContent>
            <ClientForms searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <HealthPlans />
            <ClientsTable searchQuery={searchQuery} />
            <PetsTable />
          </MainContent>
        </section>
      </main>
    </>
  )
}

export default MainPage
