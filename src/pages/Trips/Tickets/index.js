import { useEffect, useState, useContext } from 'react';
import classNames from 'classnames/bind';

import TicketModal from './TicketModal';
import TicketItem from './TicketItem';
import styles from './Tickets.module.scss';
import { AuthContext } from '~/context/AuthProvider';

const cx = classNames.bind(styles);

const TICKET_ITEMS = [
    {
        src: 'images/img-3.jpg',
        date: '15-12',
        userQuantity: '100',
        location: 'Ocean',
        title: 'Snow Surfing',
        description: 'The majestic beauty of winter promises you the most wonderful experiences',
        price: '$1500',
    },
    {
        src: 'images/img-4.jpg',
        date: '15-12',
        userQuantity: '100',
        location: 'Ocean',
        title: 'Snow Surfing',
        description: 'The majestic beauty of winter promises you the most wonderful experiences',
        price: '$1500',
    },
    {
        src: 'images/img-9.jpg',
        date: '15-12',
        userQuantity: '100',
        location: 'Ocean',
        title: 'Snow Surfing',
        description:
            "The majestic beauty of winter promises you the most wonderful experiences. Feel nature in the most authentic way. Let's start the journey now.",
        price: '$1500',
    },
    {
        src: 'images/img-6.jpg',
        date: '15-12',
        userQuantity: '100',
        location: 'Ocean',
        title: 'Snow Surfing',
        description: 'The majestic beauty of winter promises you the most wonderful experiences',
        price: '$1500',
    },
    {
        src: 'images/img-6.jpg',
        date: '15-12',
        userQuantity: '100',
        location: 'Ocean',
        title: 'Snow Surfing',
        description: 'The majestic beauty of winter promises you the most wonderful experiences',
        price: '$1500',
    },
    {
        src: 'images/img-6.jpg',
        date: '15-12',
        userQuantity: '100',
        location: 'Ocean',
        title: 'Snow Surfing',
        description: 'The majestic beauty of winter promises you the most wonderful experiences',
        price: '$1500',
    },
    {
        src: 'images/img-6.jpg',
        date: '15-12',
        userQuantity: '100',
        location: 'Ocean',
        title: 'Snow Surfing',
        description: 'The majestic beauty of winter promises you the most wonderful experiences',
        price: '$1500',
    },
    {
        src: 'images/img-6.jpg',
        date: '15-12',
        userQuantity: '100',
        location: 'Ocean',
        title: 'Snow Surfing',
        description: 'The majestic beauty of winter promises you the most wonderful experiences',
        price: '$1500',
    },
    {
        src: 'images/img-7.jpg',
        date: '15-12',
        userQuantity: '100',
        location: 'Ocean',
        title: 'Snow Surfing',
        description: 'The majestic beauty of winter promises you the most wonderful experiences',
        price: '$1500',
    },
];

function Tickets() {
    const { isAuth } = useContext(AuthContext);

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div className={cx('ticket')}>
            <h1 className={cx('title')}>WE HAVE THE BEST TOURS</h1>
            <h3 className={cx('description')}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Suspendisse
                potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.
            </h3>
            <div className={cx('container')}>
                <div className={cx('wrapper')}>
                    <ul className={cx('ticket_items')}>
                        {TICKET_ITEMS.map((item, index) => {
                            return (
                                <TicketItem
                                    key={index}
                                    src={item.src}
                                    date={item.date}
                                    userQuantity={item.userQuantity}
                                    location={item.location}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                    onClick={toggleModal}
                                />
                            );
                        })}
                    </ul>
                </div>
            </div>

            {isAuth && showModal && <TicketModal toggleModal={toggleModal} />}
        </div>
    );
}

export default Tickets;
