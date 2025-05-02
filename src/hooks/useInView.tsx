
import { useEffect, useRef, useState } from "react";

export function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        // Once the element is in view, we don't need to observe it anymore
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.15,
      ...options
    });

    observer.observe(ref.current);
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, isInView };
}

