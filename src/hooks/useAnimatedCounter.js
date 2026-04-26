import { useState, useEffect, useRef } from 'react';

export const useAnimatedCounter = (targetValue, duration = 2000) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !hasAnimated) {
                setHasAnimated(true);

                let startTimestamp = null;
                const step = (timestamp) => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);

                    // Easing function (easeOutExpo)
                    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

                    setCount(Math.floor(easeProgress * targetValue));

                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    } else {
                        setCount(targetValue);
                    }
                };

                window.requestAnimationFrame(step);
            }
        }, { threshold: 0.5 });

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [targetValue, duration, hasAnimated]);

    return { count, elementRef };
};
