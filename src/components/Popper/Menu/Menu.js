import Tippy from '@tippyjs/react/headless';
import { PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
function Menu({ children, items = [] }) {
    return (
        <Tippy
            interactive
            delay={[0, 250]}
            // duration={[100, 150]}
            // animation={true}
            placement={'bottom'}
            render={(attrs) => {
                return (
                    <div className="box" tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            {items.map((item, index) => {
                                return <MenuItem key={index} data={item} />;
                            })}
                        </PopperWrapper>
                    </div>
                );
            }}
        >
            <span>{children}</span>
        </Tippy>
    );
}

export default Menu;
