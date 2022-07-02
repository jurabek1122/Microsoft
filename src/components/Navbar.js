import React, { useState } from 'react';
import { ImCancelCircle } from 'react-icons/im';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ card, inputValue, setInputValue }) => {

    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const navigate = useNavigate();

    const InputHAndler = (e) => {
        e.preventDefault();
        navigate('/searched/' + inputValue)
    }

    return (
            <nav className="navigation">
                <div className='container d-f'>
                <Link to="/" className="brand-name">
                    MacroSoft
                </Link>
                <form onSubmit={InputHAndler}>
                    <input 
                        className='navbar-input'    
                        type='text' 
                        placeholder='Nom bo`yicha qidiring ...'
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                     /> 
                </form>
                <button className="hamburger"
                onClick={() => { setIsNavExpanded(!isNavExpanded) }}>
                     {
                        isNavExpanded ? (
                        <ImCancelCircle />
                        ) : (
                        <GiHamburgerMenu />
                        )
                    }
                </button>
                <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                    <ul>
                    <li>
                        <Link to="/">Asosiy</Link>
                    </li>
                    <li>
                        <Link to="/products">Mahsulotlar</Link>
                    </li>
                    <li>
                        <Link to="/about">Biz Haqimizda</Link>
                    </li>
                    <li>
                        <Link to="/contact">Aloqa</Link>
                    </li>
                    <li>
                        <Link to="/card" className='dnone'>
                            <div className="number1">
                                <HiOutlineShoppingCart />
                            <p>{card.length}</p>
                            </div>
                        </Link>
                    </li>
                    </ul>
                </div>
        </div>

                </nav>
    );
};

export default Navbar;