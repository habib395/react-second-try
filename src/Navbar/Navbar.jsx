
import { useState } from 'react';
import Link from './Link';
import { IoMenuSharp } from "react-icons/io5";
import { IoIosClose } from 'react-icons/io';

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const routes = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'About', path: '/about' },
  { id: 3, name: 'Services', path: '/services' },
  { id: 4, name: 'Contact', path: '/contact' },
  { id: 5, name: 'User Profile', path: '/user/:id' }, 
];
    return (
        <nav className='text-black p-6 bg-yellow-200'>
                <div className='md:hidden text-2xl' onClick={() => setOpen(!open)}>
                    {
                        open === true ? <IoIosClose></IoIosClose>: <IoMenuSharp ></IoMenuSharp>
                    }
                
                </div>
            <ul className={`md:flex absolute duration-1000
            md:static
                ${open ? 'top-20' : '-top-36'}
                bg-yellow-200 px-6 shadow-lg`}>
            {
                routes.map(route =><Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;