import dogImage from '../assets/images/dog_sleeping.png'
import { Blob } from '../components/Blob'

export function NotFoundPage () {
  return (
    <section className='bg-slate-900 h-screen flex justify-center items-center overflow-hidden'>
      <div className='w-full max-w-7xl mx-16 flex flex-col items-center md:flex-row justify-center md:gap-32'>
        <div className='max-w-md flex flex-col gap-8'>
          <div>
            <h1 className='flex flex-col items-center text-9xl text-white font-thin'>
              404
              <span className='font-medium'>Oops!</span>
            </h1>
          </div>
          <div>
            <p className='text-xl text-white'>
              La página que estás buscando no existe. Por favor, regresa a la página principal.
            </p>
          </div>
          <div className='flex justify-center'>
            <button className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
              <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                Ir a la página principal
              </span>
            </button>
          </div>
        </div>
        <div className='relative flex items-center'>
          <div className='absolute w-full h-full z-10'>
            <Blob />
          </div>
          <div className='z-20'>
            <img src={dogImage} alt='perro durmiendo' />
          </div>
        </div>
      </div>
    </section>
  )
}
