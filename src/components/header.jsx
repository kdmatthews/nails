import './header.css'
import Navbar from './navbar';


function Header() {
    return (
      <>
      <Navbar></Navbar>
        <div className="bg">
          <Navbar></Navbar>
        </div>

      </>
    )
  }

  export default Header;