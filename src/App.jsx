import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import data from "../data"
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'

function App() {

 let details = data.map((item)=>{
return (<Cards key={item.id} item={item}/>)
 })


  return (
    <div className="App">
     <Navbar />
     <section>
       {details}
     </section>
    </div>
  )
}

export default App
