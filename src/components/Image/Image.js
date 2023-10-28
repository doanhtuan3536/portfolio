import images from '~/assets/images';
import classNames from 'classnames';
import { useState } from 'react';
const Image = ({ src, fallback: customeFallback = images.noImage, className, alt, ...props }) => {
    const [fallback, setFallback] = useState('');
    const HandleError = () => {
        setFallback(customeFallback);
    };
    return <img className={classNames(className)} src={fallback || src} alt={alt} {...props} onError={HandleError} />;
};

export default Image;
