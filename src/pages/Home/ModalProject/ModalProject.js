import { useState, useEffect } from 'react';
import { useModal } from '~/hooks';

import Modal from '~/components/Modal';
import classNames from 'classnames/bind';
import videos from '~/assets/video';
import Button from '~/components/Button';
import useAnimationEnd from '~/hooks/useAnimationEnd';
import styles from './ModalProject.module.scss';
const cx = classNames.bind(styles);

function ModalProject({ data, index, showModal, hideModal }) {
    const { show, Appear, setAppear, setToDisapear, HandleHideModalOutside } = useAnimationEnd(showModal, hideModal);
    return (
        <>
            {show ? (
                <Modal
                    hide={HandleHideModalOutside}
                    style={{
                        animation: `${Appear ? 'fadein 0.3s forwards' : 'fadeout 0.2s forwards'}`,
                    }}
                    onAnimationEnd={setToDisapear}
                >
                    <div className={cx('Modal-project-wrapper')}>
                        <div className={cx('Modal-project-video')}>
                            <video
                                src={videos.projects[index]}
                                className={cx('Modal-project-vid')}
                                loop
                                autoPlay
                            ></video>
                        </div>
                        <div className={cx('Modal-project-details')}>
                            <h1 className={cx('Modal-project-header')}>{data.name}</h1>
                            <div className={cx('Modal-project-tools')}>
                                <span className={cx('Modal-project-subheader')}>Tools: </span>
                                {data.tools.map((tool, index) => {
                                    return <span key={index}>{tool}</span>;
                                })}
                            </div>
                            <div className={cx('Modal-project-time')}>
                                <div>
                                    <span className={cx('Modal-project-subheader')}>Start date: </span>
                                    <span>{data.startDate}</span>
                                </div>
                                <div>
                                    <span className={cx('Modal-project-subheader')}>End date: </span>
                                    <span>{data.startDate}</span>
                                </div>
                                <div>
                                    <span className={cx('Modal-project-subheader')}>Total number of hours: </span>
                                    <span>{data.hour}</span>
                                </div>
                            </div>
                            <p className={cx('Modal-project-intro')}>{data.intro}</p>
                            <div className={cx('Modal-project-btn')}>
                                <Button outline className={cx('project-card__button')}>
                                    Github
                                </Button>
                                <Button outline className={cx('project-card__button')}>
                                    View website
                                </Button>
                            </div>
                        </div>
                    </div>
                </Modal>
            ) : null}
        </>
    );
}

export default ModalProject;
