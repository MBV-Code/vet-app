import { LoginButton, SignUpButton } from '../components/Auth'

function LoginPage () {
  return (
    <section className='bg-slate-900 h-screen flex flex-col gap-5 justify-center items-center'>
      <h1 className='text-white text-3xl bold'>🐶😸¡Bienvenido!🐕‍🦺🐈</h1>
      <form>
        <div className=''>
          <LoginButton />
          <SignUpButton />
        </div>
      </form>
    </section>
  )
}

export default LoginPage
