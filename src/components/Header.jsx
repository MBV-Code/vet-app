import { DogIcon, CalendarIcon, AmbulanceIcon, HeadsetIcon, MenuIcon, UserSettingsIcon } from './Icons.jsx'
import { Link } from 'react-router-dom'

export function Header () {
  return (
    <header className='w-full h-12 flex text-white bg-slate-900'>
      <div className='w-52 flex items-center justify-center'>
        <h1 className='text-xl font-bold'>Vet App</h1>
      </div>
      <nav className='w-full flex justify-between items-center px-5'>
        <div>
          <ul className='flex gap-5'>
            <li>
              <a href='/'><DogIcon /></a>
            </li>
            <li>
              <a href='/'><CalendarIcon /></a>
            </li>
            <li>
              <a href='/'><AmbulanceIcon /></a>
            </li>
          </ul>
        </div>
        <div>
          <ul className='flex gap-5'>
            <li>
              <a href='/'><HeadsetIcon /></a>
            </li>
            <li>
              <a href='/'><MenuIcon /></a>
            </li>
            <li>
              <Link to='/login'><UserSettingsIcon className='text-white' /></Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
