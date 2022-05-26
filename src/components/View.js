import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const View = () => {
    var [viewEvents,setView]=useState([])
    var [load,setLoad]=useState(true)

    axios.get("http://localhost:7000/api/viewevent").then((response)=>{
console.log(response.data)
setView(response.data)
setLoad(false)
    })
    
  return (
    <div><Header/>
<br></br>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
{load ?
  <div class="d-flex justify-content-center">
  <div class="spinner-border text-warning" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>
:
  <table class="table table-warning table-striped">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Date</th>
      <th scope="col">Venue</th>
      <th scope="col">Organiser</th>
      <th scope="col">Contact Number</th>
    </tr>
  </thead>
  <tbody>
   {viewEvents.map((value,key)=>{
return <tr>
<th scope="row">{value.name}</th>
<td>{value.date}</td>
<td>{value.venue}</td>
<td>{value.organiser}</td>
<td>{value.number}</td>
</tr>
   })}
    
  </tbody>
</table>}
        
    </div>
    </div>
    </div>
    </div>
  )
}

export default View