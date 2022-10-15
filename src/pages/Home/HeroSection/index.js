import React from 'react';
import Button from '~/components/Button/Button';
import classNames from 'classnames/bind';

import styles from './HeroSection.module.scss';

const cx = classNames.bind(styles);

function HeroSection() {
    return (
        <div className={cx('container')}>
            <video src="videos/video-2.mp4" autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className={cx('btns')}>
                <Button className={cx('btn')} buttonStyle="btn--outline" buttonSize="btn--large">
                    GET STARTED
                </Button>
                <Button className={cx('btn')} buttonStyle="btn--primary" buttonSize="btn--large">
                    WATCH TRAILER <i className="far fa-play-circle" />
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;
