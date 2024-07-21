import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const links = [
        {
            title: "Home",
            link: "/",
        },
        {
            title: "Chess.com",
            link: "/chesscomid",
        },
        {
            title: "Lichess",
            link: "/lichessid",
        },
        {
            title: "About",
            link: "/about",
        },
    ];

    return (
        <div className='flex bg-black text-white px-5 py-4 items-center justify-between'>
            <Link to="/" className='flex items-center'>
                <img src="https://cdn-icons-png.flaticon.com/512/7697/7697554.png" width="40" height="50" style={{ paddingRight: '5px' }} alt="Icon" />
                <h1 className='text-2xl font-semibold'>ChessMonitor</h1>
            </Link>
            <div className=' flex items-center gap-4'>
                {links.map((item, i) => (
                    <Link to={item.link} key={i}>{item.title}</Link>
                ))}
            </div>
        </div>

    );
}

export default Navbar;
