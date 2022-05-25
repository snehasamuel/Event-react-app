import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        
        <nav class="navbar navbar-expand-lg navbar-light bg-warning">
<Link class="navbar-brand" to="/">EVENT MANAGEMENT APP</Link>  
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
<Link class="nav-link" to="/">Add Event</Link>
      </li>
      <li class="nav-item">
<Link class="nav-link" to="/search">Search Event</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/view">View Events</Link>
        
      </li>
     
    </ul>
  </div>
</nav>

    </div>
  )
}

export default Header