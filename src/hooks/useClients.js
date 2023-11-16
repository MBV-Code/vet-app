import { useState, useEffect } from 'react'

export function useClients () {
  const [clients, setClients] = useState([])
  const [filteredClients, setFilteredClients] = useState([])
  const [loading, setLoading] = useState(true)
  const [searches, setSearches] = useState({
    nameField: false,
    nameSearch: '',
    lastNameField: false,
    lastNameSearch: '',
    phoneField: false,
    phoneSearch: '',
    petNameField: false,
    petSearch: ''
  })

  useEffect(() => {
    setLoading(true)

    const fetchClients = async () => {
      const response = await fetch(`http://localhost:${import.meta.env.VITE_API_PORT}/api/clients`)
      const data = await response.json()
      setClients(data)
      setFilteredClients(data)
      setLoading(false)
    }

    fetchClients()
  }, [])

  const searchClients = (clients, queries) => {
    let filteredClients = clients
    const { nameField, nameSearch, lastNameField, lastNameSearch, phoneField, phoneSearch, petNameField, petSearch } = queries

    if (nameField && nameSearch) {
      filteredClients = filteredClients.filter(client => client.name.toLowerCase().includes(nameSearch.toLowerCase()))
    }

    if (lastNameField && lastNameSearch) {
      filteredClients = filteredClients.filter(client => client.lastname.toLowerCase().includes(lastNameSearch.toLowerCase()))
    }

    if (phoneField && phoneSearch) {
      filteredClients = filteredClients.filter(client => client.phone.toLowerCase().includes(phoneSearch.toLowerCase()))
    }

    if (petNameField && petSearch) {
      filteredClients = filteredClients.filter(client => client.pets.some(pet => pet.name.toLowerCase().includes(petSearch.toLowerCase())))
    }

    setFilteredClients(filteredClients)
  }

  return { clients, filteredClients, loading, searchClients, searches, setSearches }
}
