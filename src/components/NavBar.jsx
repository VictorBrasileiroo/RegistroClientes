import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className='bg-white h-full w-full p-5 relative'>
            <ul className='flex items-center justify-between'>
                <div>
                    <li className='font-golos text-black font-semibold text-[20px]'>Registro de Clientes</li>
                </div>
                <div className='flex gap-6 items-center'>
                    <div 
                        className={`sm:hidden bx relative w-9 h-9 cursor-pointer z-[800] transition-transform duration-300 ease-out hover:scale-110 ${menuOpen ? 'open' : ''}`}
                        onClick={toggleMenu}
                    >
                        <div className={`line-1 absolute w-[70%] h-[2.5px] bg-black left-[15%] top-[30%] transition-all duration-300 ease-out ${menuOpen ? 'rotate-45 top-[55%]' : ''}`}></div>
                        <div className={`line-2 absolute w-[70%] h-[2.5px] bg-black left-[15%] top-[50%] transition-all duration-300 ease-out ${menuOpen ? 'opacity-0' : ''}`}></div>
                        <div className={`line-3 absolute w-[70%] h-[2.5px] bg-black left-[15%] top-[70%] transition-all duration-300 ease-out ${menuOpen ? '-rotate-45 top-[60%]' : ''}`}></div>
                    </div>
                    {/* Tablet/Desktop */}
                    <li className='hidden sm:flex font-golos text-black font-medium'><Link className='hover:text-grayText transition-all' to="/">Página Principal</Link></li>
                    <li className='hidden sm:flex font-golos text-black font-medium hover:text-grayText transition-all'><Link to="/register">Registro</Link></li>
                    <li className='hidden sm:flex font-golos text-black font-medium hover:text-grayText transition-all'><Link to="/edit">Edição</Link></li>
                </div>
            </ul>
            {/* Mobile Menu */}
            {menuOpen && (
                <div className='w-full h-full bg-white flex flex-col items-center justify-center pt-10'>
                    <li className='font-golos text-black font-medium text-[24px] mb-4'><Link to="/" onClick={toggleMenu}>Página Principal</Link></li>
                    <li className='font-golos text-black font-medium text-[24px] mb-4'><Link to="/register" onClick={toggleMenu}>Registro</Link></li>
                    <li className='font-golos text-black font-medium text-[24px]'><Link to="/edit" onClick={toggleMenu}>Edição</Link></li>
                </div>
            )}
        </nav>
    );
}