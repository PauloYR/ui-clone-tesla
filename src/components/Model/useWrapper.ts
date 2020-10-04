import { useMotionValue } from "framer-motion";
import { useContext, useEffect } from "react";
import ModelContext from "./ModelContext";

export default function useWrapperScroll() {

    const { wrapperRef } = useContext(ModelContext);

    const scrollY = useMotionValue(0);
    const scrollProgress = useMotionValue(0);

    useEffect(() => {

        const elemtent = wrapperRef.current;

        if (elemtent) {
            const updateScrollValue = () => {
                if (elemtent) {
                    const { scrollTop, scrollHeight, offsetHeight } = elemtent;
                    const fullScroll = scrollHeight - offsetHeight;

                    scrollY.set(scrollTop);
                    scrollProgress.set(scrollTop / fullScroll);
                }
            };
            elemtent.addEventListener('scroll', updateScrollValue);
            return () => elemtent?.removeEventListener('scroll', updateScrollValue);
        }
    }, []);

    return { scrollY, scrollProgress };
}