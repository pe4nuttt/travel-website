import classNames from 'classnames/bind';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import styles from './Layout.module.scss';

const cx = classNames.bind(styles);

function Layout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;
