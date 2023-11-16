// a blob componet for the background
export function Blob () {
  return (
    <div style={{
      width: '500px',
      height: '500px',
      position: 'absolute',
      background: 'linear-gradient(45deg, #ff4ecd -20%, #0072f5 100%)',
      borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
      filter: 'blur(55px)',
      opacity: '0.3'
    }}
    />
  )
}
