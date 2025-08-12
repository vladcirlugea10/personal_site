import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import eu from '../Images/eu.jpg';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const navigate = useNavigate();

  return (
  <header className='flex justify-between p-4 bg-white dark:bg-neutral-900'>
      <div className="flex items-center gap-4">
        <img onClick={() => navigate('/')} src={eu} alt="Profile" className="w-12 h-12 rounded-full cursor-pointer transition-transform duration-200 hover:scale-110"/>
        <h1 className="font-bold text-xl">Vlad Cirlugea</h1>
      </div>
      <nav className='flex gap-4'>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
