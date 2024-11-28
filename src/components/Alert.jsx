import Alert from 'react-bootstrap/Alert'

const MyAlert = () => {
  return (
    <>
      {['primary'].map(() => (
        <Alert>Benvenuto! Ecco il nostro catalogo!</Alert>
      ))}
    </>
  )
}

export default MyAlert
