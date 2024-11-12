import { Link } from 'react-router-dom'
import './Navbar.css'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { CiSearch } from 'react-icons/ci'
import { FaCartShopping } from 'react-icons/fa6'
import logo from '../../assets/images/logo.svg'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
export default function Navbar({ x }) {
    const [IsOpen, setIsOPen] = useState(false)
    const handleOpen = () => {
        setIsOPen(!IsOpen);
    }
    return (
        <nav className={x ? 'Af-Navbar' : 'Af-Navbar2'}>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='section-2'>
                <ul className={x  ? `Af-menu ${IsOpen ? "open" : ""}` : `Af-menu ${IsOpen ? "open2" : ""}` }  >
                    <li>
                        <Link to={'/'}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={'/about'}>
                            About
                        </Link>
                    </li>
                    <li>
                        Services
                    </li>
                    <li>
                        Pages
                    </li>
                    <li>
                        Blog
                    </li>
                    <li>
                        <Link to={'/contact'}>
                            Contact
                        </Link>
                    </li>
                    {
                        IsOpen &&
                        <li>
                            <FontAwesomeIcon icon={faXmark} onClick={handleOpen}/>
                        </li>
                    }
                </ul>
            </div>
            <div className="section-3">
                <CiSearch />
                <FaCartShopping />
                <button><Link to={'/signup'}>
                    GET A QUOTE
                </Link>
                    <FaLongArrowAltRight />
                </button>
                <FontAwesomeIcon className='iconBars' icon={faBars} onClick={handleOpen} />

            </div>
        </nav>
    )
}
