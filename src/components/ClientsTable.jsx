import { useState, useEffect } from 'react'
import { useClients } from '../hooks/useClients'
import { Card } from './Card'

export function ClientsTable ({ searchQuery }) {
  const [clients, setClients] = useState([])
  const { clients: clientsData, loading, searches } = useClients()

  // ToDo: Move this to a custom hook or a context
  useEffect(() => {
    if (!loading) {
      setClients(clientsData)
    }
  }, [loading, clientsData])

  useEffect(() => {
    if (searchQuery.nameField) {
      setClients(clientsData.filter(client => client.name.toLowerCase().includes(searchQuery.nameSearch.toLowerCase())))
    }
    if (searchQuery.lastNameField) {
      setClients(clientsData.filter(client => client.lastname.toLowerCase().includes(searchQuery.lastNameSearch.toLowerCase())))
    }
    if (searchQuery.petNameField) {
      setClients(clientsData.filter(client => client.pets.some(pet => pet.name.toLowerCase().includes(searchQuery.petSearch.toLowerCase()))))
    }
  }
  , [searchQuery, clientsData])

  return (
    <div className='relative overflow-x-auto shadow-md'>
      <p>Searches: {searches.nameSearch}</p>
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
            {clients.map(client => (
              <tr key={client.id} className='bg-white border-b hover:bg-gray-50'>
                <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                  {client.name} {client.lastname}
                </th>
                <td className='px-6 py-4'>
                  {client.address}
                </td>
                <td className='px-6 py-4'>
                  {client.phone}
                </td>
                <td className='px-6 py-4 text-sm text-gray-500'>
                  {client.pets.map(pet => (
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
