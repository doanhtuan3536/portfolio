import { useState, useEffect } from 'react';
function useAnimationEnd(initialState, SetToggleModalOutside = () => {}) {
    const [show, setShow] = useState(initialState);
    const [Appear, setAppear] = useState(initialState);
    function setToDisapear() {
        if (!Appear) {
            setShow(false);
        }
    }
    function HandleHideModalOutside() {
        setAppear(false);
        SetToggleModalOutside();
    }
    useEffect(() => {
        if (Appear) {
            setShow(true);
        }
    }, [Appear]);
    useEffect(() => {
        if (initialState) {
            setAppear(true);
            setShow(initialState);
        }
    }, [initialState]);
    return { show, Appear, setAppear, setToDisapear, HandleHideModalOutside };
}

export default useAnimationEnd;
