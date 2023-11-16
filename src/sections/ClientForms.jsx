import { useState } from 'react'
import { SearchUserForm } from '../components/Forms'
import { ActionsTabs } from '../components/ActionsTabs'

export default function ClientForms ({ searchQuery, setSearchQuery }) {
  const [currentAction, setCurrentAction] = useState('search')

  return (
    <section className='flex flex-col gap-5 items-center'>
      <div className='mt-[-12px]'>
        <ActionsTabs currentAction={currentAction} setCurrentAction={setCurrentAction} />
      </div>
      {currentAction === 'search' && <SearchUserForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}
      {currentAction === 'new' && <p>New User</p>}
      {currentAction === 'modify' && <p>Modify</p>}
      {currentAction === 'lorem' && <p>Lorem</p>}
    </section>
  )
}
