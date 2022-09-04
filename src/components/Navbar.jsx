import './Navbar.css'
import { FaCoins } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Link to='/'>
    <div className='navbar'>
        <FaCoins className='icon' />
        <h1> Crypto <span className='purple'>App</span></h1>
    </div>
    </Link>
  )
}

export default Navbar