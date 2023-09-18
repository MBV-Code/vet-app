import { useState } from 'react'
import { ArrowDownIcon } from './Icons'
import { menu } from '../data/sidebar'

export function Sidebar () {
  const [showSidebar, setShowSidebar] = useState(false)
  const showClass = showSidebar ? 'translate-x-0' : '-translate-x-full'

  const [showOptions, setShowOptions] = useState({
    dashboard: false,
    ecommerce: false
  })

  const handleShowOptions = (option) => {
    setShowOptions({
      ...showOptions,
      [option]: !showOptions[option]
    })
  }

  return (
    <>
      <button onClick={() => setShowSidebar(!showSidebar)} className='absolute top-0 left-0 w-36 h-12' />
      <div className={`hidden md:block ${showSidebar ? 'w-72 mr-5' : 'w-0'}`} />

      <aside className={`${showClass} fixed top-12 left-0 z-40 w-64 h-screen transition-transform`}>
        <nav className='h-full px-3 py-4 overflow-y-auto bg-slate-900'>
          {menu.map((item, index) => (
            <div key={index}>
              <button onClick={() => handleShowOptions(item.name.toLowerCase())} type='button' className='flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-gray-700'>
                <span>
                  {item.icon}
                </span>
                <span className='flex-1 ml-3 text-left whitespace-nowrap'>{item.name}</span>
                {item.children && (
                  <ArrowDownIcon />
                )}
              </button>
              {item.children && (
                <ul className={`${!showOptions[item.name.toLowerCase()] && 'hidden'} py-2 space-y-2`}>
                  {item.children.map((child, index) => (
                    <li key={index}>
                      <a href={child.link} className='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-700'>{child.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  )
}
