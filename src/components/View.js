import React from 'react'
import Header from './Header'

const View = () => {
    var viewEvents=[{"name":"hdfvdsh","date":"1/12/2022","venue":"mznbccc","organiser":"zdjgcudfchg","contact":"576541646"} ,
    {"name":"zhjvchjdzbc","date":"5/5/2022","venue":"jhgdfjsd","organiser":"zcgzdjzd","contact":"4974616"},
    {"name":"zycgyudg","date":"8/8/2022","venue":"sjhgkj","organiser":"hdcsdjvds","contact":"5464678956"} ,
    {"name":"naoiuoihigme","date":"7/7/2023","venue":"sgrfuis","organiser":"dhjvgc","contact":"89461613"} ,
    {"name":"guitgui","date":"4/7/2022","venue":"t8yuyi","organiser":"yghfyfg","contact":"4654545"} ,
    {"name":"namiutiute","date":"29/9/2022","venue":"ur6tr","organiser":"jfyyfyu","contact":"5576545"}  ]
  return (
    <div><Header/>
<br></br>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

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
<td>{value.contact}</td>
</tr>
   })}
    
  </tbody>
</table>
    </div>
    </div>
    </div>
    </div>
  )
}

export default View