import { DogIcon, CalendarIcon, AmbulanceIcon, HeadsetIcon, MenuIcon } from './Icons.jsx'

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
              <a href='/pets'><CalendarIcon /></a>
            </li>
            <li>
              <a href='/pets'><AmbulanceIcon /></a>
            </li>
          </ul>
        </div>
        <div>
          <ul className='flex gap-5'>
            <li>
              <a href='/'><HeadsetIcon /></a>
            </li>
            <li>
              <a href='/pets'><MenuIcon /></a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
