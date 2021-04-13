import React, {useState} from 'react'
import {SITE} from './config'
import './App.css'

export default function App() {

  const [val, setVal] = useState([])
  const [results, setResults] = useState('')

  const getUsers = async(event)=>{
    event.preventDefault()
    let url = SITE + val 
    let req = await fetch(url)
    let resp = await req.json()
    console.log(resp.results)
    setResults(resp.results)
    setVal('')
  }

return (
    <div className='container'>
      
      <form  onSubmit={getUsers}>
      <input
      value={val}
      onChange={e=>setVal(e.target.value)}
      placeholder = ' Выберите число случайных пользователей'
      />
      <button type="submit"><i class="fa fa-search"></i></button>
      </form>
    <div className='card'>
      {results && results.length !=0 ?
      results.map(el=>{
        return(
          <div className='box'>
          <img src={el.picture.large}/>
          <h3> Name: {el.name.first}</h3>
          <h4>Age: {el.dob.age}</h4>
          <h4>Country: {el.location.country}</h4>
          <h4>Email: {el.email}</h4>
          <h4>Phone: {el.cell}</h4>
          </div>
        )
      })
      :<h3></h3>
      }

    </div>
    </div>
  )
}
