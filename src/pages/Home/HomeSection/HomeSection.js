import styles from './HomeSection.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function HomeSection({ header, children }) {
    return (
        <div className={cx('section-wrapper')}>
            <section className={cx('section-content')}>
                <h1 className={cx('section-header')}>{header}</h1>
                <div className={cx('section-main-content')}>{children}</div>
            </section>
        </div>
    );
}

export default HomeSection;
