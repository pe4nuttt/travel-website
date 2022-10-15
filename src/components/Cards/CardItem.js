import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Cards.module.scss';

const cx = classNames.bind(styles);

function CardItem(props) {
    return (
        <>
            <li className={cx('item')}>
                <Link className={cx('item__link')} to={props.path}>
                    <figure className={cx('item__pic-wrap')} data-category={props.label}>
                        <img src={props.src} alt="Travel" className={cx('item__img')}></img>
                    </figure>
                    <div className={cx('item__info')}>
                        <h5 className={cx('item__text')}>{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default CardItem;
