import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';
import images from '~/assets/images';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import Menu from '~/components/Popper/Menu';
import Switch from '~/components/Switch';
const cx = classNames.bind(styles);

const language = [
    {
        title: 'VietNamese',
    },

    {
        title: 'English',
    },
];

function Header() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <div className={cx('grid')}>
                    <div className={cx('navbar')}>
                        <Link to={config.routes.home}>
                            <img src={images.myLogo} alt="myImage" className={cx('navbar-logo')} />
                        </Link>
                        <div className={cx('navnar-list')}>
                            {Object.keys(config.routes).map((item, index) => {
                                return (
                                    <div key={index} className={cx('navbar-list__item')}>
                                        <Button text to={config.routes[item]} className={'TransparentBg'}>
                                            {item}
                                        </Button>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={cx('setting')}>
                            <Menu items={language}>
                                <Button
                                    text
                                    leftIcon={<FontAwesomeIcon icon={faLanguage} className={cx('navbar-icon')} />}
                                >
                                    language
                                </Button>
                            </Menu>
                            <Switch small className={cx('navbar-setting-switch')} />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
