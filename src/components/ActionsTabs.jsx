export function ActionsTabs ({ currentAction, setCurrentAction }) {
  const actions = [
    { name: 'search', label: 'Buscar' },
    { name: 'new', label: 'Nuevo' },
    { name: 'modify', label: 'Modificar' },
    { name: 'lorem', label: 'Lorem' }
  ]

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
      {actions.map((action, index) => (
        <li key={index} className='w-full'>
          <button onClick={() => handleClick(action.name)} className={`${currentStyles(action.name)}`}>{action.label}</button>
        </li>
      )
      )}
    </ul>
  )
}
