import Image from '~/components/Image';
import { PopperWrapper } from '~/components/Popper';
import LearningDetail from './LearningDetail';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
// import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

import styles from './SkillElement.module.scss';
const Box = styled(animated.div)``;
const cx = classNames.bind(styles);
function SkillElement({ skillData, className, ...propss }) {
    const config = { tension: 300, friction: 15 };
    const initialStyles = { opacity: 0, transform: 'scale(0.5)' };
    const [props, setSpring] = useSpring(() => initialStyles);
    function onMount() {
        setSpring({
            opacity: 1,
            transform: 'scale(1)',
            onRest: () => {},
            config,
        });
    }
    function onHide({ unmount }) {
        setSpring({
            ...initialStyles,
            onRest: unmount,
            config: { ...config, clamp: true },
        });
    }
    return (
        <Tippy
            interactive
            delay={[600, 0]}
            animation={true}
            onMount={onMount}
            onHide={onHide}
            placement={'right'}
            render={(attrs) => (
                <Box style={props} {...attrs}>
                    <PopperWrapper className={cx('PopperWrapper-boxshadow')}>
                        <LearningDetail skillData={skillData} />
                    </PopperWrapper>
                </Box>
            )}
        >
            <div className={cx('wrapper', className)} {...propss}>
                <div className={cx('skill-image-wrapper')}>
                    <Image src={skillData.img} className={cx('skill-image')} alt={'skill image'} />
                </div>
                <span className={cx('skill-name')}>{skillData.name}</span>
            </div>
        </Tippy>
    );
}

export default SkillElement;
