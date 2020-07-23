import React from 'react';
import './Header.css';
import Logo from './logo.png';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {useStateValue} from './StateProvider';
import {auth} from './firebase';

var audio = new Audio();
audio.src="yo.mp3";
function Header() {
    const [{basket, user}, dispatch] =useStateValue();

    const login = () =>{
        if (user){
            auth.signOut();
        }
    }

    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo" src={Logo} alt=""/>
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            
            <div className="header__nav">
            <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Whats up ,{user?.email}</span>
                    <span className="header__optionLineTwo">{user?"Sign Out":"Sign in"}</span>
                    </div>
            </Link>
                {/*link 2*/}
            <Link to="/" className="header__link">
                    <div className="header__option">
                    <span className="header__optionLineOne">Im just here</span>
                    <span className="header__optionLineTwo">for show lol</span>
                    </div>
            </Link>
              {/*link 3*/}
              <Link to="/" className="header__link">
                    <div className="header__option">
                    <span className="header__optionLineOne">Yeah,</span>
                    <span className="header__optionLineTwo">me too.</span>
                    </div>
            </Link>
              {/*link 4*/}
              <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <AddShoppingCartIcon/>
    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
            </Link>
            
            </div>
        </nav>
    )
}

export default Header
