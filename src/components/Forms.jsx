import { Card } from './Card'

export function SearchUserForm ({ searchQuery, setSearchQuery }) {
  const onChange = (e) => {
    if (e.target.name === 'first_name') {
      if (e.target.value === '') {
        setSearchQuery({ ...searchQuery, nameField: false, nameSearch: '' })
      }
      setSearchQuery({ ...searchQuery, nameField: true, nameSearch: e.target.value })
    }
    if (e.target.name === 'last_name') {
      if (e.target.value === '') {
        setSearchQuery({ ...searchQuery, lastNameField: false, lastNameSearch: '' })
      }
      setSearchQuery({ ...searchQuery, lastNameField: true, lastNameSearch: e.target.value })
    }
    if (e.target.name === 'pet') {
      if (e.target.value === '') {
        setSearchQuery({ ...searchQuery, petNameField: false, petSearch: '' })
      }
      setSearchQuery({ ...searchQuery, petNameField: true, petSearch: e.target.value })
    }
  }

  return (
    <Card>
      <form className='w-full'>
        <div className='grid md:grid-cols-2 md:gap-6'>
          <div className='relative z-0 w-full mb-6 group'>
            <input onChange={onChange} type='text' name='first_name' id='first_name' className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer' placeholder=' ' required />
            <label htmlFor='first_name' className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Nombre</label>
          </div>
          <div className='relative z-0 w-full mb-6 group'>
            <input onChange={onChange} type='text' name='last_name' id='last_name' className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer' placeholder=' ' required />
            <label htmlFor='last_name' className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Apellido</label>
          </div>
        </div>
        <div className='grid md:grid-cols-2 md:gap-6'>
          <div className='relative z-0 w-full mb-6 group'>
            <input onChange={onChange} type='text' name='pet' id='pet' className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer' placeholder=' ' required />
            <label htmlFor='pet' className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Mascota</label>
          </div>
        </div>
        <button type='submit' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>Buscar</button>
      </form>
    </Card>
  )
}
