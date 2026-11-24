import { Link } from 'react-router-dom'
import logo from '../assets/img/argentBankLogo.webp'
import { useDispatch, useSelector } from 'react-redux'

function Header() {

  const dispatch = useDispatch()
  const { token, user } = useSelector((state) => state.user)


  const handleLogout = () => {
    dispatch(logout())
  }
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      <div>



        {token ? (
          <>
          
          <Link className='main-nav-item' to='/profile'>
          <i className='fa fa-user-circle'></i>
          {user?.userName}
          </Link>

          <Link className='main-nav-item' to='/' onClick={handleLogout}>
          <i className='fa fa-sign-out'></i>
          Sign Out
          </Link>

          </>
          ) : (

        <Link className="main-nav-item" to="/login">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
          )}
      </div>
    </nav>
  )
}

export default Header