import { useState, useEffect } from 'react';

interface UseCounterOptions {
    end: number;
    duration?: number;
    start?: number;
}

export const useCounter = ({ end, duration = 2000, start = 0 }: UseCounterOptions) => {
    const [count, setCount] = useState(start);

    useEffect(() => {
        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            setCount(Math.floor(progress * (end - start) + start));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, start]);

    return count;
};
