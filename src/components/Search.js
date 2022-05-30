import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Search = () => {
    var [date,setDate]=useState("")
    const [data,setData]=useState([{"name":"","venue":"","organiser":"","number":""}])
    
    const searchEvent=(()=>{
        
        const readValue={"date":date}
        axios.post("http://localhost:7000/api/search",readValue).then((response)=>{
console.log(response.data)
setData(response.data.data)
        })
       
    })

    const deleteApi=(id)=>{
        const data={"_id":id}
        axios.post("http://localhost:7000/api/delete",data).then((response)=>{
  console.log(response.data)
  if(response.data.status=="success")
  {
    alert("successfully deleted")
  
  }
  else{
    alert("failed to delete")
  }
        })
  
      }
  return (
    <div>
        <Header/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Date of Event</label>
                    <input onChange={(a)=>{setDate(a.target.value)}} type="date" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={searchEvent} className="btn btn-warning">SEARCH</button>
                </div>
            </div>
        </div>
    </div>

{data.map((value,key)=>{
    return <div className='row g-3'>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label for="" className="form-label">Name of Event</label>
                        <input value={value.name} type="text" className="form-control"/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label for="" className="form-label">Venue</label>
                        <input value={value.venue}  type="text" className="form-control"/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label for="" className="form-label">Organiser</label>
                        <input value={value.organiser} type="text" className="form-control"/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label for="" className="form-label">Contact Number</label>
                        <input value={value.number}  type="text" className="form-control"/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button onClick={()=>{deleteApi(value._id)}}  className="btn btn-danger">DELETE</button>
                    </div>
    </div>
    
    </div>
        </div>
})}

    </div>
    </div>
  )
}

export default Search