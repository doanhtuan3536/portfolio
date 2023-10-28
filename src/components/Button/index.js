import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Button({
    children,
    to,
    href,
    primary = false,
    text = false,
    rounded = false,
    outline = false,
    leftIcon,
    RightIcon,
    onClick,
    className,
    LinkIcon,
    large,
    disabled = false,
    ...ParaProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...ParaProps,
    };

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('btn-wrapper', {
        primary,
        rounded,
        [className]: className,
        text,
        LinkIcon,
        large,
        outline,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('btn-icon')}>{leftIcon}</span>}
            {LinkIcon ? children : <span className={cx('btn-title')}>{children}</span>}
            {RightIcon && <span className={cx('btn-icon')}>{RightIcon}</span>}
        </Comp>
    );
}

export default Button;
