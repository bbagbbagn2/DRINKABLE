import React, { useEffect, useRef, useState } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

function useIntersectionObserver(options: IntersectionObserverOptions) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // 한 번 관찰 후에는 Intersection Observer 중지
        }
      });
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []); // 빈 배열을 전달하여 처음 한 번만 실행되도록 함

  return [targetRef, isVisible] as const;
}

export default useIntersectionObserver;
