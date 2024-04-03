import HomeSection from '../HomeSection';
import SkillElement from './SkillElement';
import LearningDetail from './LearningDetail';
import images from '~/assets/images';

import { useState } from 'react';

import styles from './SkillsSection.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const skills = {
    'Programing Language': [
        {
            name: 'C++',
            img: images.SkillsImage['C++'],
            DocumentReference: [
                {
                    nameWeb: 'w3school',
                    content: 'C++ tutorial',
                    linkRef: 'https://www.w3schools.com/cpp/',
                },
            ],
            CourseVidReference: [
                {
                    nameWeb: 'fullstack (F8)',
                    content: 'C++ from basic to advanced',
                    linkRef: 'https://fullstack.edu.vn/courses/lap-trinh-c-co-ban-toi-nang-cao',
                },
                {
                    nameWeb: 'freeCodeCamp youtube',
                    content: 'C++ from basic to advanced',
                    linkRef: 'https://www.youtube.com/watch?v=8jLOx1hD3_o',
                },
            ],
        },
        {
            name: 'Javascript',
            img: images.SkillsImage.javascript,
            DocumentReference: [
                {
                    nameWeb: 'w3school',
                    content: 'Javascript tutorial',
                    linkRef: 'https://www.w3schools.com/js/',
                },
                {
                    nameWeb: 'w3school',
                    content: 'DOM event object',
                    linkRef: 'https://www.w3schools.com/jsref/dom_obj_event.asp',
                },
            ],
            CourseVidReference: [
                {
                    nameWeb: 'fullstack (F8)',
                    content: 'Basic javascript',
                    linkRef: 'https://fullstack.edu.vn/courses/javascript-co-ban',
                },
                {
                    nameWeb: 'fullstack (F8)',
                    content: 'Advanced javascript',
                    linkRef: 'https://fullstack.edu.vn/courses/javascript-co-ban',
                },
                {
                    nameWeb: 'Udemy',
                    content: 'Full Bootcamp web',
                    linkRef: 'https://www.udemy.com/course/the-web-developer-bootcamp/',
                },
            ],
        },
    ],
    'Library / framework': [
        {
            name: 'React',
            img: images.SkillsImage.react,
            DocumentReference: [
                {
                    nameWeb: 'react.dev',
                    content: 'React document',
                    linkRef: 'https://react.dev/',
                },
                {
                    nameWeb: 'w3school',
                    content: 'Reatc tutorial',
                    linkRef: 'https://www.w3schools.com/REACT/DEFAULT.ASP',
                },
            ],
            CourseVidReference: [
                {
                    nameWeb: 'fullstack (F8)',
                    content: 'Build website with Reactjs',
                    linkRef: 'https://fullstack.edu.vn/courses/reactjs',
                },
                {
                    nameWeb: 'fullstack (F8)',
                    content: 'Advanced javascript',
                    linkRef: 'https://fullstack.edu.vn/courses/javascript-co-ban',
                },
                {
                    nameWeb: 'Udemy',
                    content: 'The Ultimate React Course: React, Redux & More',
                    linkRef: 'https://www.udemy.com/course/the-ultimate-react-course/',
                },
            ],
        },
        {
            name: 'Nodejs',
            img: images.SkillsImage.nodejs,
        },
        {
            name: 'Redux',
            img: images.SkillsImage.redux,
        },
        {
            name: 'React Query',
            img: images.SkillsImage.ReactQuery,
        },
    ],
    Tool: [
        {
            name: 'Github',
            img: images.SkillsImage.github,
        },
        {
            name: 'Git',
            img: images.SkillsImage.git,
        },
    ],
};
function SkillsSection() {
    const [SkillDisplay, setSkillDisplay] = useState({
        skillType: 'Programing Language',
        index: 1,
    });
    return (
        <HomeSection header={'Skills'}>
            <div className={cx('wrapper', 'center-item')}>
                <div className={cx('list-skill-types')}>
                    {Object.keys(skills).map((type, i) => {
                        return (
                            <div className={cx('skill-type')} key={i}>
                                <header className={cx('skill-type__header')}>{type}</header>
                                <div className={cx('skill-type__list-skills')}>
                                    {skills[type].map((skill, i) => {
                                        return (
                                            <SkillElement
                                                skillData={skill}
                                                key={i}
                                                onClick={() => {
                                                    if (type === SkillDisplay.skillType && i === SkillDisplay.index)
                                                        return;
                                                    setSkillDisplay({
                                                        skillType: type,
                                                        index: i,
                                                    });
                                                }}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </HomeSection>
    );
}

export default SkillsSection;
