import { useEffect, useRef, useState } from "react";

// Custom hook for Intersection Observer
function useIntersectionObserver<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<T | null>(null);

  useEffect(() => {
    const element = targetRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return { targetRef, isIntersecting };
}

export default useIntersectionObserver;
