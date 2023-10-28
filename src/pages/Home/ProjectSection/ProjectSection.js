import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from './ProjectSection.module.scss';
import classNames from 'classnames/bind';
import HomeSection from '../HomeSection';
const cx = classNames.bind(styles);

function ProjectSection({ Allprojects, ShowProjectDetails }) {
    return (
        <HomeSection header={'Projects'}>
            <div className={cx('grid__row')}>
                {Allprojects.map((project, index) => {
                    return (
                        <div key={index} className={cx('grid__column-4')}>
                            <div className={cx('project-card')}>
                                <div className={cx('project-card__image')}>
                                    <a href={project.web}>
                                        <Image src={project.image} className={cx('project-image')} />
                                    </a>
                                </div>
                                <div className={cx('project-card__info')}>
                                    <span className={cx('project-card__name')}>{project.name}</span>
                                    <Button
                                        outline
                                        className={cx('project-card__button')}
                                        onClick={() => ShowProjectDetails(index)}
                                    >
                                        Project details
                                    </Button>
                                    <Button outline className={cx('project-card__button')} href={project.github}>
                                        Github
                                    </Button>
                                    <Button outline className={cx('project-card__button')} href={project.web}>
                                        View website
                                    </Button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </HomeSection>
    );
}

export default ProjectSection;
