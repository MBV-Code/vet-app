import { useState } from 'react'
import { SearchUserForm, UserModalForm } from '../components/Forms'

function SearchClient () {
  const [showModal, setShowModal] = useState(false)

  return (
    <section className='flex items-center'>
      <SearchUserForm />
      <UserModalForm showModal={showModal} setShowModal={setShowModal} />
    </section>
  )
}

export default SearchClient
