export function ActionsTabs ({ currentAction, setCurrentAction }) {
  const actions = [
    { name: 'search', label: 'Buscar' },
    { name: 'new', label: 'Nuevo' },
    { name: 'modify', label: 'Modificar' },
    { name: 'lorem', label: 'Lorem' }
  ]

  console.log(currentAction)

  const handleClick = (action) => {
    setCurrentAction(action)
  }

  const currentStyles = (action, index) => {
    let styles = ''

    if (action === currentAction) {
      styles = 'inline-block w-full p-4 text-gray-900 bg-gray-100 focus:outline-none'
    } else {
      styles = 'inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:outline-none'
    }

    if (index === 0) {
      styles = styles + ' rounded-bl-lg'
    } else if (index === actions.length - 1) {
      styles = styles + ' rounded-br-lg'
    }

    return styles
  }

  return (
    <ul className='hidden text-sm font-medium text-center text-gray-500 rounded-bl-lg rounded-br-lg divide-x divide-gray-200 shadow sm:flex'>
      {/* <li className='w-full'>
        <button onClick={() => handleClick(0)} className='inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-bl-lg active focus:outline-none'>Buscar</button>
      </li>
      <li className='w-full'>
        <button onClick={() => handleClick(1)} className='inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:outline-none'>Nuevo</button>
      </li>
      <li className='w-full'>
        <button onClick={() => handleClick(2)} className='inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:outline-none'>Modificar</button>
      </li>
      <li className='w-full'>
        <button onClick={() => handleClick(3)} className='inline-block w-full p-4 bg-white rounded-br-lg hover:text-gray-700 hover:bg-gray-50 focus:outline-none'>Lorem</button>
      </li> */}
      {actions.map((action, index) => (
        <li key={index} className='w-full'>
          <button onClick={() => handleClick(action.name)} className={`${currentStyles(action.name)}`}>{action.label}</button>
        </li>
      )
      )}
    </ul>
  )
}
