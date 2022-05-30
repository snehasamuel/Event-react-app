import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Add = () => {
    var [name,setName]=useState("")
    var [date,setDate]=useState("")
    var [venue,setVenue]=useState("")
    var [organiser,setOrganiser]=useState("")
    var [contact,setContact]=useState("")

    const registerEvent=(()=>{
        const data={"name":name,"date":date,"venue":venue,"organiser":organiser,"number":contact} 
        
       axios.post("http://localhost:7000/api/addevent",data).then((response)=>{
        console.log(response.data) 
        if(response.data.status=="success")
        {
            alert("data inserted suucessfully!!")
        }
        else
        {
            alert("data insertion failed!!")
        }

        })
    })
  return (
    <div>
        <Header/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Name</label>
                    <input onChange={(a)=>{setName(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Date</label>
                    <input onChange={(a)=>{setDate(a.target.value)}} type="date" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Venue</label>
                    <input onChange={(a)=>{setVenue(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Organiser</label>
                    <input onChange={(a)=>{setOrganiser(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Contact Number</label>
                    <input onChange={(a)=>{setContact(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={registerEvent} className="btn btn-warning">REGISTER</button>
                </div>
            </div>  
        </div>
    </div>
</div>
    </div>
  )
}

export default Add