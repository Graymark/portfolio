import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { COLORS } from '../../../assets/constants';
import "./index.css";


const Header = () => {

    const [isVisible, setIsVisible] = useState(false);



    const launchAnimation = () => {
        const scrollOffset = window.scrollY;
        if(scrollOffset > 500) {
            setIsVisible(false)
        } else {
            setIsVisible(true);
        }    
    }

    useEffect( () => {
        //window.addEventListener('scroll', launchAnimation)
        console.log('salut')
        return () => {
            window.removeEventListener('scroll', launchAnimation)
        }
    }, [])

    return (
        <nav className={`headerNav ${isVisible && 'fade'}`} style={{backgroundColor: COLORS.backgroundHeavy}}>
            <Link className='logoWrapper' to="/">
                <h1 className="headerTitle">Nils.Montier</h1>
            </Link>
            <div className="headerMenu">
                <Link to="/contact">
                    <h1 className="headerTitle">Contact</h1>
                </Link>
                <Link to="/curriculum">
                    <h1 className="headerTitle">Curiculum</h1>
                </Link>
                <Link to="/about">
                    <h1 className="headerTitle">About</h1>
                </Link>
            </div>
        </nav>

    )
}

export default Header;
