import HomeSection from '../HomeSection';
import styles from './SkillsSection.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function SkillsSection() {
    return <HomeSection header={'Skills'}></HomeSection>;
}

export default SkillsSection;
