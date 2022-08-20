import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
  import {connect} from "react-redux"
  import {getNumbers} from './actions/getAction'
  import {useEffect} from 'react'
  import {Link} from 'react-router-dom'
function Navbar(props){
  useEffect(()=>{
    getNumbers()
    console.log("number",props.basketProps.basketNumbers)
  },[])

    return(
        <div className='main'>
    <nav className="navbar navbar-expand-lg navbar-dark mb-5">
    <div className="container">
      <Link to="/" className="navbar-brand" href="#">Navbar</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse ml-auto" id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link" aria-current="page" href="#">Home</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About Us</a>
          </li>
          <li className="nav-item">
            <Link to="/Cart" className="btn btn-primary nav-link" href="#"><FontAwesomeIcon icon={faCartShopping}/><span className='badge badge-light'>{props.basketProps.basketNumbers}</span></Link>
          </li>

        </ul>
      </div>
    </div>
  </nav>
  <div>
  <div className="holder ms-5">
      <h2>Shop in your way!</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
  </div>
</div>
</div>
)
}
const mapStateToProps = state =>({
  basketProps: state.basketState
})
export default connect(mapStateToProps, {getNumbers})(Navbar)