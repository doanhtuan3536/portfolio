import images from '~/assets/images';
import styles from './LearningDetail.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function LearningDetail({ skillData }) {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('LearningDetail-header')}>{skillData.name} Learning</header>
            <div className={cx('LearningDetail-detail')}>
                <div className={cx('LearningDetail-detail-DocReferences', 'LearningDetail-detail-list')}>
                    <header className={cx('LearningDetail-detail-subHeader')}>Document reference</header>
                    {skillData.DocumentReference &&
                        skillData.DocumentReference.map((item, i) => {
                            return (
                                <div
                                    className={cx(
                                        'LearningDetail-detail-DocReferences__item',
                                        'LearningDetail-detail__item',
                                    )}
                                    key={i}
                                >
                                    <span>{item.content} - </span>
                                    <span>{item.nameWeb}</span>
                                    <a
                                        href={item.linkRef}
                                        target="_blank"
                                        className={cx('LearningDetail-link')}
                                    >{` (link)`}</a>
                                </div>
                            );
                        })}
                </div>
                <div className={cx('LearningDetail-detail-CourseVidReferences', 'LearningDetail-detail-list')}>
                    <header className={cx('LearningDetail-detail-subHeader')}>Course / Video reference</header>
                    {skillData.CourseVidReference &&
                        skillData.CourseVidReference.map((item, i) => {
                            return (
                                <div
                                    className={cx(
                                        'LearningDetail-CourseVidReferences__item',
                                        'LearningDetail-detail__item',
                                    )}
                                    key={i}
                                >
                                    <span>{item.content} - </span>
                                    <span>{item.nameWeb}</span>
                                    <a
                                        href={item.linkRef}
                                        target="_blank"
                                        className={cx('LearningDetail-link')}
                                    >{` (link)`}</a>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default LearningDetail;
