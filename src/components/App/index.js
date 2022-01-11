import './App.css'
import { useState } from 'react'
import Header from '../Header'
import Input from '../Input'
import Button from '../Button'
import Result from '../Result'
function App()
{
  const [ val1, setVal1 ] = useState(0)
  const [ val2, setVal2 ] = useState(0)
  const [ result, setResult ] = useState(0)
  const [ buttonValue, setButtonValue ] = useState('')
  function handleChangeVal1(e)
  {
    setVal1(e.target.value)
  }
  function handleChangeVal2(e)
  {
    setVal2(e.target.value)
  }
  function handleClick(e)
  {
    const value = e.target.innerHTML
    setButtonValue(value)
    if (buttonValue === "+")
    {
      setResult(Number(val1) + Number(val2))
      setVal1(0)
      setVal2(0)
    } else if (buttonValue === "-")
    {
      setResult(Number(val1) - Number(val2))
      setVal1(0)
      setVal2(0)
    } else if (buttonValue === "x")
    {
      setResult(Number(val1) * Number(val2))
      setVal1(0)
      setVal2(0)
    }
    else if (buttonValue === "/")
    {
      setResult(Number(val1) / Number(val2))
      setVal1(0)
      setVal2(0)
    }
  }

  return (
    <div className="App">
      <Header />
      <section className='calculator'>
        <Input handleChange={function (e) { handleChangeVal1(e) }} value={val1} />
        <section className='opButtons'>
          <Button handleClick={function (e) { handleClick(e) }} op='+' />
          <Button handleClick={function (e) { handleClick(e) }} op='-' />
          <Button handleClick={function (e) { handleClick(e) }} op='x' />
          <Button handleClick={function (e) { handleClick(e) }} op='/' />
        </section>
        <Input handleChange={function (e) { handleChangeVal2(e) }} value={val2} />
        <Button handleClick={function (e) { handleClick(e) }} op='=' />
        <Result result={result} />
      </section>
    </div>
  )
}

export default App
