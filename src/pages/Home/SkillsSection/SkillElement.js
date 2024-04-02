import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './SkillElement.module.scss';

const cx = classNames.bind(styles);
function SkillElement({ name, img }) {
    return (
        <div className={cx('wrapper')}>
            <Image src={img} className={cx('skill-image')} alt={'skill image'} />
            <span className={cx('skill-name')}>{name}</span>
        </div>
    );
}

export default SkillElement;
