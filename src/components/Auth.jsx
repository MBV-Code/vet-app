import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export const LoginButton = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0()

  const handleClick = () => {
    if (isAuthenticated) {
      logout({ logoutParams: { returnTo: window.location.origin } })
      return
    }

    loginWithRedirect({
      authorizationParams: {
        ui_locales: 'es'
      }
    })
  }

  return (
    <button
      onClick={handleClick}
      className='w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]'
    >
      {isAuthenticated ? 'Cerrar Sesión' : 'Iniciar Sesión'}
    </button>
  )
}

export const SignUpButton = ({ disabled }) => {
  const { loginWithPopup } = useAuth0()

  const handleClick = () => {
    loginWithPopup({
      authorizationParams: {
        screen_hint: 'signup',
        ui_locales: 'es',
        redirect_uri: `${window.location.origin}/`
      }
    })
  }

  return (
    <button
      type='button'
      disabled={disabled}
      onClick={handleClick}
      className='w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]'
    >
      ¡Unirme!
    </button>
  )
}
