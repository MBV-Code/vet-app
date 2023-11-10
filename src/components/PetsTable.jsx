import { Card } from './Card'

const pets = [
  {
    id: 1,
    name: 'Pepito',
    age: 2,
    breed: 'Caniche',
    gender: 'Macho',
    weight: '10kg',
    owner: 1
  },
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

export function PetsTable () {
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
                Raza
              </th>
              <th scope='col' className='px-6 py-3'>
                Genero
              </th>
            </tr>
          </thead>
          <tbody>
            {pets.map(pet => (
              <tr key={pet.id} className='bg-white border-b hover:bg-gray-50'>
                <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                  {pet.name}
                </th>
                <td className='px-6 py-4'>
                  {pet.breed}
                </td>
                <td className='px-6 py-4'>
                  {pet.gender}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}
