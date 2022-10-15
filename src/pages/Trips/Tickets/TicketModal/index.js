import { useState } from 'react';
import classNames from 'classnames/bind';
import Button from '~/components/Button/Button';
import styles from './TicketModal.module.scss';

const cx = classNames.bind(styles);

function TicketModal({ toggleModal }) {
    const [inputValues, setInputValues] = useState({
        quantity: '',
        email: '',
    });

    const handleChangeInput = (e) => {
        const { name, value } = e.target;

        setInputValues({
            ...inputValues,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleToggleModal = (e) => {
        if (e.target === e.currentTarget) {
            toggleModal();
        }
    };

    return (
        <div className={cx('container')} onClick={handleToggleModal}>
            <div className={cx('wrapper')}>
                <div className={cx('heading')}>
                    <h1 className={cx('heading-title')}>
                        <i className="fa-solid fa-suitcase"></i>
                        Tickets
                    </h1>
                    <button className={cx('close-btn')} onClick={toggleModal}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div className={cx('body')}>
                    <form className={cx('form')} onSubmit={handleSubmit}>
                        <div className={cx('form-inputs')}>
                            <label className={cx('form-label')} htmlFor="quantity">
                                <i className="fa-solid fa-cart-shopping"></i>
                                Tickets, $15 per person
                            </label>
                            <input
                                id="quantity"
                                name="quantity"
                                className={cx('form-input')}
                                value={inputValues.quantity}
                                type="text"
                                placeholder="How many?"
                                onChange={handleChangeInput}
                            />
                        </div>
                        <div className={cx('form-inputs')}>
                            <label className={cx('form-label')} htmlFor="email">
                                <i className="fa-solid fa-user"></i>
                                Send To
                            </label>
                            <input
                                id="email"
                                name="email"
                                className={cx('form-input')}
                                value={inputValues.email}
                                type="text"
                                placeholder="Enter email"
                                onChange={handleChangeInput}
                            />
                        </div>
                        <Button
                            className={cx('submit-btn')}
                            buttonStyle="btn--secondary"
                            buttonSize="btn--medium"
                            type="submit"
                            disabled
                        >
                            PAY
                            <i className="fa-solid fa-check"></i>
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TicketModal;
