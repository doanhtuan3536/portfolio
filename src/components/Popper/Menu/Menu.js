import Tippy from '@tippyjs/react/headless';
import { PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
function Menu({ children, items = [] }) {
    // function onHide(instance) {
    //     // perform your hide animation in here, then once it completes, call
    //     // instance.unmount()

    //     // Example: unmounting must be async (like a real animation)
    //     requestAnimationFrame(instance.unmount);
    // }
    return (
        <Tippy
            // animation={true}
            delay={[0, 250]}
            duration={[300, 350]}
            // animation="fade"
            interactive
            placement={'bottom'}
            render={(attrs) => (
                <div className="box" tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {items.map((item, index) => {
                            return <MenuItem key={index} data={item} />;
                        })}
                    </PopperWrapper>
                </div>
            )}
        >
            <span>{children}</span>
        </Tippy>
    );
}

export default Menu;
