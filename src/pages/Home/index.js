import classNames from 'classnames/bind';
import images from '~/assets/images';
import Image from '~/components/Image';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';
import HomeSection from './HomeSection';

import { useModal } from '~/hooks';
import ModalProject from './ModalProject';
import ProjectSection from './ProjectSection';
import SkillsSection from './SkillsSection';

import videos from '~/assets/video';
import styles from './Home.module.scss';
import IconLinks from './IconLinks';
import config from '~/config';
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

function Home() {
    const [toggleModal, setToggleModal] = useState(false);
    const [currentIndexProj, setCurrentIndexProj] = useState(null);
    function handleToggleModal(index) {
        setCurrentIndexProj(index);
        setToggleModal(!toggleModal);
    }
    return (
        <div className={cx('wrapper')}>
            <IconLinks />
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
                            <Button to={`${config.routes.about}`} outline large className={cx('slider-btn-about')}>
                                About me
                            </Button>
                        </div>
                    </div>
                </div>
                <ProjectSection Allprojects={projects} ShowProjectDetails={handleToggleModal} />
                <SkillsSection />
            </div>
            <ModalProject
                data={currentIndexProj != null ? projects[currentIndexProj] : null}
                index={currentIndexProj}
                hideModal={() => setToggleModal(!toggleModal)}
                showModal={toggleModal}
            />
        </div>
    );
}

export default Home;
