import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import Button from '~/components/Button/Button';
import PreferenceKeys from '~/utils/PreferenceKeys';
import { AuthContext } from '~/context/AuthProvider';
import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

function Navbar() {
    const { isAuth, setIsAuth } = useContext(AuthContext);

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    const handleSignOut = () => {
        setIsAuth(false);
        localStorage.removeItem(PreferenceKeys.login);
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className={cx('navbar')}>
                <div className={cx('container')}>
                    <Link to="/" className={cx('logo')}>
                        TRVL <i className="fa-brands fa-typo3" onClick={closeMobileMenu}></i>
                    </Link>
                    <div className={cx('menu-icon')} onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul
                        className={cx('nav-menu', {
                            active: click,
                        })}
                    >
                        <li className={cx('nav-item')}>
                            <Link to="/" className={cx('nav-links')} onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className={cx('nav-item')}>
                            <Link to="/services" className={cx('nav-links')} onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className={cx('nav-item')}>
                            <Link to="/trips" className={cx('nav-links')} onClick={closeMobileMenu}>
                                Trips
                            </Link>
                        </li>

                        <li className={cx('nav-item')}>
                            {isAuth ? (
                                <Link
                                    to="/"
                                    className={cx('nav-links-mobile')}
                                    onClick={() => {
                                        handleSignOut();
                                        closeMobileMenu();
                                    }}
                                >
                                    Sign out
                                </Link>
                            ) : (
                                <Link to="/sign-up" className={cx('nav-links-mobile')} onClick={closeMobileMenu}>
                                    Sign up
                                </Link>
                            )}
                        </li>
                    </ul>

                    {!isAuth && button && (
                        <Button to="/sign-up" buttonStyle="btn--outline">
                            SIGN UP
                        </Button>
                    )}
                    {isAuth && button && (
                        <Button to="/" buttonStyle="btn--outline" onClick={handleSignOut}>
                            SIGN OUT
                        </Button>
                    )}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
