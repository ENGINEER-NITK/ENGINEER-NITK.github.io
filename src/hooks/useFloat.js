import {useEffect} from "react";

const useFloat = (elRef) => {


    const onScroll = () => {
        const distance = window.scrollY
        const portraitNode = elRef.current
        if(elRef.current == null) return;
        portraitNode.style.transform = `translate(-50%,${distance * 0.05}px)`
        elRef.current.style.transform = `translate(0px,-${distance * 0.05}px)`
    }

    useEffect(()=> {

            window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])
}

export default useFloat
