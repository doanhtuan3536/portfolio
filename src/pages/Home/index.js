import classNames from 'classnames/bind';
import images from '~/assets/images';
import Image from '~/components/Image';
import Button from '~/components/Button';
import styles from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';
import HomeSection from './HomeSection';
// import Modal from '~/components/Modal/Modal';
import { useModal } from '~/hooks';
import ModalProject from './ModalProject';
import ProjectSection from './ProjectSection';
import SkillsSection from './SkillsSection';
// import videotest from '~/assets/video/test.webm';
import videos from '~/assets/video';
const cx = classNames.bind(styles);

const projects = [
    {
        name: 'My portfolio',
        image: require('~/assets/images/portfolio.png'),
        video: 'haha',
        tools: ['Reactjs'],
        intro: `This is my first project after I learned ReactJS, and it marks the beginning of an exciting journey into the world of web development. With the knowledge and skills I've acquired, I'm eager to explore the vast possibilities that ReactJS offers in creating dynamic and responsive web applications. I can't wait to see how this project will evolve and how it will contribute to my growth as a developer.`,
        github: '#',
        web: '#',
        startDate: '22/09/2023',
        endDate: '10/10/2023',
        hour: 200,
    },
    {
        name: 'My portfolio',
        image: require('~/assets/images/portfolio.png'),
        video: 'haha',
        tools: ['Reactjs'],
        intro: `This is my first project after I learned ReactJS, and it marks the beginning of an exciting journey into the world of web development. With the knowledge and skills I've acquired, I'm eager to explore the vast possibilities that ReactJS offers in creating dynamic and responsive web applications. I can't wait to see how this project will evolve and how it will contribute to my growth as a developer.`,
        github: '#',
        web: '#',
        startDate: '22/09/2023',
        endDate: '10/10/2023',
        hour: 200,
    },
];

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

function Home() {
    const [IconLink, setIconLink] = useState(true);
    const [toggleModal, setToggleModal] = useModal();
    let IconLinks = useRef();
    let indexProject = useRef();
    function IconLinksDisappear() {
        if (!IconLink) {
            // console.log(IconLinks);
            IconLinks.current.style.display = 'none';
        }
    }
    function ToggleModal(index) {
        indexProject.current = index;
        setToggleModal();
    }
    useEffect(() => {
        if (toggleModal) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'visible';
        }
    }, [toggleModal]);
    return (
        <div className={cx('wrapper')}>
            <div
                ref={IconLinks}
                className={cx('Icon-links')}
                style={{
                    animation: `${IconLink ? cx('slidein') : cx('slideout')} 0.5s forwards`,
                    display: `${IconLink ? 'flex' : ''}`,
                }}
                onAnimationEnd={IconLinksDisappear}
            >
                {SocialMedia.map((item, index) => {
                    return (
                        <Button key={index} href={item.link} LinkIcon className={cx('slider-link')} target={'_blank'}>
                            <FontAwesomeIcon icon={item.icon} />
                        </Button>
                    );
                })}
                <Button LinkIcon large className={cx('close-Icon-links')} onClick={() => setIconLink(false)}>
                    <FontAwesomeIcon icon={faCaretLeft} />
                </Button>
            </div>
            {!IconLink && (
                <Button LinkIcon large className={cx('open-Icon-links')} onClick={() => setIconLink(true)}>
                    <FontAwesomeIcon icon={faCaretRight} />
                </Button>
            )}
            <div className="grid">
                <div className={cx('slider')}>
                    <div className={cx('slider__content')}>
                        <div className={cx('slider__main-content')}>
                            <div className={cx('slider-text')}>
                                {/* {text.english} */}
                                <div className={cx('slider-text-introduce')}>
                                    <span>Hi, my name is</span>
                                    <span className={cx('slider-text-introduce__name')}>Tuan Anh Do</span>
                                    <span className={cx('slider-text-introduce__intro')}>
                                        My friends often call me Tuat. I build things for the webs. This website is made
                                        to introduce myself
                                    </span>
                                </div>
                                <div>You can download my CV here</div>
                            </div>
                            <div className={'mt-10'}>
                                <Button rounded large>
                                    Download my CV
                                </Button>
                            </div>
                        </div>
                        <div className={cx('slider-img-links')}>
                            <div className={cx('slider-images')}>
                                <Image src={images.myImages[1]} className={cx('slider-image')} />
                            </div>
                            <Button outline large className={cx('slider-btn-about')}>
                                About me
                            </Button>
                        </div>
                    </div>
                </div>
                <ProjectSection Allprojects={projects} ShowProjectDetails={ToggleModal}></ProjectSection>
                <SkillsSection></SkillsSection>
                <div style={{ height: 2000 }}></div>
            </div>
            {toggleModal && (
                <ModalProject
                    data={projects[indexProject.current]}
                    index={indexProject.current}
                    hideModal={setToggleModal}
                />
            )}
        </div>
    );
}

export default Home;
