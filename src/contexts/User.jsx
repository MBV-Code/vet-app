import { useState, useEffect, useCallback, createContext } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
// import { getUserByEmail } from '../services/users'

export const UserContext = createContext()

export function UserProvider ({ children }) {
  const { user: authUser, isAuthenticated } = useAuth0()
  const [user, setUser] = useState(authUser)

  //   const getUser = useCallback(async () => {
  //     try {
  //       const fetchedUser = await getUserByEmail(authUser.email) // Llamado a una API para que devuelve el usuario con los permisos
  //       setUser(fetchedUser)
  //     } catch (error) {
  //       console.error('Error:', error)
  //     }
  //   }, [authUser?.email])

  //   useEffect(() => {
  //     if (isAuthenticated) {
  //       getUser()
  //     }
  //   }, [isAuthenticated, getUser])

  //   const signupUser = (user) => {
  //     registerUser(user) // Llamado a una API para que registre en BD
  //     setUser({
  //       email: user.email,
  //       type: userTypes[user.type].type
  //     })
  //   }

  //   const updateType = async (email, type) => {
  //     updateUserType(email, type) // Llamado a una API para actualizar el registro en BD
  //     setUser({
  //       email,
  //       type: userTypes[type].type
  //     })
  //   }

  //   const loginAsAdmin = (user, password) => {
  //     // Aqui se deberia hacer una validacion a una API para poder ingresar como admin
  //     if (password === 'admin12345') {
  //       updateType(user.email, 0)
  //     }
  //   }

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  )
}
