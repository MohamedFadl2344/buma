import { useEffect, useRef } from 'react';

interface UseScrollAnimationOptions {
    threshold?: number;
    rootMargin?: string;
}

export const useScrollAnimation = (
    options: UseScrollAnimationOptions = {}
) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const { threshold = 0.1, rootMargin = '0px' } = options;

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            { threshold, rootMargin }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [threshold, rootMargin]);

    return elementRef;
};
