import Lab from "@/lab"
import { useCallback, useState } from "react"


const SimpleForm = ({initialValue, onChange}) => {
  //const [value, setValue] = useState(initialValue)

  const handleChange = useCallback((event) => {
    onChange(event.target.value)
  },[])

  return (
    <input type="text" value={initialValue} onChange={handleChange} />
  )
}

function App() {

  const [text, setText] = useState('')

  return (
    <>
      {text}
      <SimpleForm initialValue={text} onChange={setText}></SimpleForm>
      <Lab></Lab>
    </>
  )
}

export default App
