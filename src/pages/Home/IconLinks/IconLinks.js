import { useState, useRef, useEffect } from 'react';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './IconLinks.module.scss';
import useAnimationEnd from '~/hooks/useAnimationEnd';
const SocialMedia = [
    {
        icon: faFacebook,
        link: 'https://www.facebook.com/profile.php?id=100013905698650',
    },
    {
        icon: faInstagram,
        link: 'https://www.facebook.com/profile.php?id=100013905698650',
    },
    {
        icon: faGithub,
        link: 'https://github.com/doanhtuan3536',
    },
];

const cx = classNames.bind(styles);

function IconLinks() {
    const { show, Appear, setAppear, setToDisapear } = useAnimationEnd(true);
    return (
        <>
            {show ? (
                <div
                    className={cx('Icon-links')}
                    style={{
                        animation: `${Appear ? 'slidein 0.5s forwards' : 'slideout 0.2s forwards'}`,
                    }}
                    onAnimationEnd={setToDisapear}
                >
                    {SocialMedia.map((item, index) => {
                        return (
                            <Button key={index} href={item.link} LinkIcon className={cx('Icon-link')} target={'_blank'}>
                                <FontAwesomeIcon icon={item.icon} />
                            </Button>
                        );
                    })}
                    <Button LinkIcon large className={cx('close-Icon-links')} onClick={() => setAppear(false)}>
                        <FontAwesomeIcon icon={faCaretLeft} />
                    </Button>
                </div>
            ) : (
                <Button LinkIcon large className={cx('open-Icon-links')} onClick={() => setAppear(true)}>
                    <FontAwesomeIcon icon={faCaretRight} />
                </Button>
            )}
        </>
    );
}

export default IconLinks;
