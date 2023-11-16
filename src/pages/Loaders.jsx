import { Spinner } from '../components/Spinner'

export function Loaders () {
  return (
    <section className='bg-slate-900 h-screen flex justify-center items-center gap-3 overflow-hidden'>
      <Spinner />
      <Spinner color='red' />
      <Spinner color='green' />
    </section>
  )
}
