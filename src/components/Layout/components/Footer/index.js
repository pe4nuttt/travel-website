import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import Button from '~/components/Button/Button';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('container')}>
            <section className={cx('subscription')}>
                <p className={cx('subscription-heading')}>
                    Join the Adventure newsletter to receive our best vacation deals
                </p>
                <p className={cx('subscription-text')}>You can unsubcribe at any time.</p>
                <div className={cx('input-areas')}>
                    <form>
                        <input type="email" name="email" className={cx('footer-input')} placeholder="Your email" />
                        <Button className={cx('btn')} buttonStyle="btn--outline">
                            Subscribe
                        </Button>
                    </form>
                </div>
            </section>

            <div className={cx('links')}>
                <div className={cx('links-wrapper')}>
                    <div className={cx('links-item')}>
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimotionals</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                    <div className={cx('links-item')}>
                        <h2>Contact Us</h2>
                        <Link to="/sign-up">Contact</Link>
                        <Link to="/">Support</Link>
                        <Link to="/">Destinations</Link>
                        <Link to="/">Sponsorships</Link>
                    </div>
                </div>
                <div className={cx('links-wrapper')}>
                    <div className={cx('links-item')}>
                        <h2>Videos</h2>
                        <Link to="/">Submit Video</Link>
                        <Link to="/">Ambassadors</Link>
                        <Link to="/">Agency</Link>
                        <Link to="/">Influencer</Link>
                    </div>
                    <div className={cx('links-item')}>
                        <h2>Social Media</h2>
                        <Link to="/">Instagram</Link>
                        <Link to="/">Facebook</Link>
                        <Link to="/">Youtube</Link>
                        <Link to="/">Twitter</Link>
                    </div>
                </div>
            </div>

            <section className={cx('social-media')}>
                <div className={cx('social-media-wrap')}>
                    <div className="footer-logo">
                        <Link to="/" className={cx('social-logo')}>
                            TRVL <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <small className={cx('website-rights')}>TRVL © 2022</small>
                    <div className={cx('social-icons')}>
                        <Link className={cx('social-icon-link')} to="/" target="_blank" aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className={cx('social-icon-link')} to="/" target="_blank" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className={cx('social-icon-link')} to="/" target="_blank" aria-label="youtube">
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link className={cx('social-icon-link')} to="/" target="_blank" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link className={cx('social-icon-link')} to="/" target="_blank" aria-label="Linkedin">
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
