import React, { useState } from 'react'
import Header from './Header'

const Search = () => {
    var [date,setDate]=useState("")

    const searchEvent=(()=>{
        const data={"date":date}
        console.log(data)
    })

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
</div>
    </div>
  )
}

export default Search