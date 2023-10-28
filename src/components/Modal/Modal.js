import classNames from 'classnames/bind';

import Button from '../Button';
import styles from './Modal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Modal({ children, hide }) {
    return (
        <div className={cx('Modal')}>
            <div className={cx('Modal-overlay')}></div>
            <div className={cx('Modal-content')}>
                {children}
                <Button text className={cx('Modal-close-icon')} onClick={hide}>
                    <FontAwesomeIcon icon={faXmark} />
                </Button>
            </div>
        </div>
    );
}

export default Modal;
