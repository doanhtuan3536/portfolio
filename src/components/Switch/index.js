import classNames from 'classnames/bind';
import styles from './Switch.module.scss';

const cx = classNames.bind(styles);

function Switch({ className, small, large }) {
    const classes = cx('switch', {
        [className]: className,
        small,
        large,
    });
    return (
        <label className={classes}>
            <input type={cx('checkbox')} />
            <span className={cx('slider', 'round')}></span>
        </label>
    );
}

export default Switch;
