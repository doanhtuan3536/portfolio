import { useState } from 'react';
function useModal() {
    const [toggleModal, setToggleModal] = useState(false);

    function toggle() {
        setToggleModal(!toggleModal);
    }

    return [toggleModal, toggle];
}

export default useModal;
