import { useAnimatedCounter } from '../hooks/useAnimatedCounter';

const AnimatedCounter = ({ targetValue, duration = 2000, suffix = '', prefix = '', className = '' }) => {
    const { count, elementRef } = useAnimatedCounter(targetValue, duration);

    return (
        <span ref={elementRef} className={className}>
            {prefix}{count}{suffix}
        </span>
    );
};

export default AnimatedCounter;
