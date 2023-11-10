import { ClipBoardListIcon, DollarIcon } from '../components/Icons'

export default function HealthPlans () {
  return (
    <section className='flex flex-col gap-24'>
      <div>
        <div className='flex items-center gap-1'>
          <ClipBoardListIcon className='w-[16px]' />
          <h2 className='text-xl font-bold'>Planes de salud</h2>
        </div>
        <ul className='flex flex-col gap-2 pl-5'>
          <li>
            <div className='flex items-center gap-2'>
              <Circle color='green' />
              <p>Plan de salud 1</p>
            </div>
          </li>
          <li>
            <div className='flex items-center gap-2'>
              <Circle color='orange' />
              <p>Plan de salud 2</p>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <div className='flex items-center gap-1'>
          <DollarIcon className='w-[16px]' />
          <h2 className='text-xl font-bold'>Situación economica</h2>
        </div>
        <p>No hay dinero a favor del cliente</p>
      </div>
    </section>
  )
}

const Circle = ({ color }) => (
  <svg width='8' height='8' fill={color} viewBox='0 0 16 16'>
    <circle cx='8' cy='8' r='8' />
  </svg>
)
