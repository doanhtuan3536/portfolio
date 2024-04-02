import HomeSection from '../HomeSection';
import SkillElement from './SkillElement';
import images from '~/assets/images';
import styles from './SkillsSection.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const skills = {
    'Programing Language': [
        {
            name: 'C++',
            img: images.SkillsImage['C++'],
        },
    ],
    'Library / framework': [
        {
            name: 'React',
            img: images.SkillsImage.react,
        },
        {
            name: 'Nodejs',
            img: images.SkillsImage.nodejs,
        },
    ],
    tool: [
        {
            name: 'Github',
            img: images.SkillsImage.github,
        },
    ],
};
function SkillsSection() {
    return (
        <HomeSection header={'Skills'}>
            <div className={cx('wrapper')}>
                {Object.keys(skills).map((type, i) => {
                    return (
                        <div className={cx('skill-type')} key={i}>
                            <header className={cx('skill-type__header')}>{type}</header>
                            <div className={cx('skill-type__list-skills')}>
                                {skills[type].map((skill, i) => {
                                    return <SkillElement name={skill.name} img={skill.img} key={i} />;
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </HomeSection>
    );
}

export default SkillsSection;
