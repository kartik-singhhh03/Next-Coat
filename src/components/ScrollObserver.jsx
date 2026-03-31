import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollObserver() {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    const observeElements = () => {
      const elements = document.querySelectorAll(".reveal-on-scroll:not(.observed)");
      elements.forEach((el) => {
        el.classList.add("observed");
        observer.observe(el);
      });
    };

    // Initial check
    const timeout = setTimeout(observeElements, 100);

    // Watch for React rendering new components asynchronously
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });
    
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [location.pathname]);

  return null;
}

