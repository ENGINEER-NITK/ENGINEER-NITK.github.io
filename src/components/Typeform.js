import { Widget } from '@typeform/embed-react'

const Typeform = ({hash = "Kmi7KSi9"}) => {
  return <Widget style={{
    height: '80vh',
    width: '100%',
    margin: 'auto auto 3em auto',
  }} id={hash} className="my-form" />
}

export default Typeform
