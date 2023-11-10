import { Card } from './Card'

const users = [
  {
    id: 1,
    name: 'Jane Cooper',
    address: '123 Main St.',
    phone: '555-555-5555',
    pets: [
      {
        id: 1,
        name: 'Pepito',
        age: 2,
        breed: 'Caniche',
        gender: 'Macho',
        weight: '10kg',
        owner: 1
      }
    ]
  },
  {
    id: 2,
    name: 'Mary Cooper',
    address: '987 Main St.',
    phone: '333-333-3333',
    pets: [
      {
        id: 2,
        name: 'Pepita',
        age: 3,
        breed: 'Caniche',
        gender: 'Hembra',
        weight: '8kg',
        owner: 1
      }
    ]
  }
]

export function UsersTable () {
  return (
    <div className='relative overflow-x-auto shadow-md'>
      <Card>
        <table className='w-full text-sm text-left text-gray-500'>
          <thead className='text-xs text-white uppercase bg-slate-900'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Nombre
              </th>
              <th scope='col' className='px-6 py-3'>
                Dirección
              </th>
              <th scope='col' className='px-6 py-3'>
                Telefono
              </th>
              <th scope='col' className='px-6 py-3'>
                Mascotas
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className='bg-white border-b hover:bg-gray-50'>
                <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                  {user.name}
                </th>
                <td className='px-6 py-4'>
                  {user.address}
                </td>
                <td className='px-6 py-4'>
                  {user.phone}
                </td>
                <td className='px-6 py-4 text-sm text-gray-500'>
                  {user.pets.map(pet => (
                    <div key={pet.id}>
                      <p className='font-medium text-gray-900'>{pet.name}</p>
                      <p className='text-gray-700'>{pet.breed}</p>
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}
