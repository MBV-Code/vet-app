export function MainContent ({ children }) {
  return (
    <section className='w-full h-[calc(100vh-3rem)] main-content-grid'>
      {children}
    </section>
  )
}
