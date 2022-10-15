import classNames from 'classnames/bind';
import styles from './Tickets.module.scss';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function TicketItem({ onClick, ...props }) {
    return (
        <>
            <li className={cx('ticket__item')}>
                <figure className={cx('ticket__pic-wrap')}>
                    <img src={props.src} alt="Travel image" className={cx('ticket__img')}></img>
                </figure>
                <div className={cx('ticket__label')}>
                    <span className={cx('ticket__icon')}>
                        <i className="fa-solid fa-calendar"></i>
                        {props.date}
                    </span>
                    <span className={cx('ticket__icon')}>
                        <i className="fa-solid fa-user"></i>
                        {props.userQuantity}
                    </span>
                    <span className={cx('ticket__icon')}>
                        <i className="fa-solid fa-location-dot"></i>
                        {props.location}
                    </span>
                </div>
                <h2 className={cx('ticket__title')}>{props.title}</h2>
                <p className={cx('ticket__description')}>{props.description}</p>
                <div className={cx('ticket__buying')}>
                    <div className={cx('ticket__modal')}>
                        <Button buttonStyle="btn--secondary" onClick={onClick}>
                            Buy Tickets
                        </Button>
                    </div>
                    <span className={cx('ticket__price')}>{props.price}</span>
                </div>
            </li>
        </>
    );
}

export default TicketItem;
