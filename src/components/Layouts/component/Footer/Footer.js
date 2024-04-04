import config from '~/config';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { a } from 'react-spring';
const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={'grid'}>
                <footer className={cx('footer')}>
                    <div className={cx('main-content')}>
                        <div className={cx('intro', 'main-content-section')}>
                            <header className={cx('main-content__header')}>Tuan's Portfolio</header>
                            <main className={cx('main-content-text', 'main-content__content')}>
                                Thank you for visiting my personal portfolio website. Connect with me over socials.
                            </main>
                        </div>
                        <div className={cx('QuickLink', 'main-content-section')}>
                            <header className={cx('main-content__header')}>Quick Links</header>
                            <main className={cx('QuickLink__main-content', 'main-content__content')}>
                                <ul className={cx('QuickLink__main-content__list-Links')}>
                                    {Object.keys(config.routes).map((route) => {
                                        return (
                                            <Link
                                                to={config.routes[route]}
                                                className={cx('intro__main-content__link', 'main-content-text')}
                                            >
                                                {route.replace(/^\w/, (c) => c.toUpperCase())}
                                            </Link>
                                        );
                                    })}
                                </ul>
                            </main>
                        </div>
                        <div className={cx('ContactInfo', 'main-content-section')}>
                            <header className={cx('main-content__header')}>Contact Info</header>
                            <main className={cx('Contact__main-content', 'main-content__content')}>
                                <ul className={cx('Contact__main-content__list-Links')}>
                                    <li className={cx('Contact__main-content__link')}>
                                        <FontAwesomeIcon
                                            icon={faEnvelope}
                                            className={cx('Contact__main-content__link-icon')}
                                        />
                                        <span className={cx('main-content-text')}>doanhtuan3536@gmail.com</span>
                                    </li>
                                    <li className={cx('Contact__main-content__link')}>
                                        <FontAwesomeIcon
                                            icon={faPhone}
                                            className={cx('Contact__main-content__link-icon')}
                                        />
                                        <span className={cx('main-content-text')}>081313xxxx</span>
                                    </li>
                                </ul>
                            </main>
                        </div>
                    </div>
                    <hr
                        style={{
                            display: 'block',
                            height: '1px',
                            border: 0,
                            borderTop: '1px solid grey',
                            marginTop: '2.5rem',
                        }}
                    />
                    <footer className={cx('footer__footer')}>Designed By Tuan Do</footer>
                </footer>
            </div>
        </div>
    );
}

export default Footer;
