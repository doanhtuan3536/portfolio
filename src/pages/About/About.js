import classNames from 'classnames/bind';
import styles from './About.module.scss';
const cx = classNames.bind(styles);
function About() {
    return (
        <div className={cx('wrapper')}>
            <h1>hello</h1>
        </div>
    );
}

export default About;
