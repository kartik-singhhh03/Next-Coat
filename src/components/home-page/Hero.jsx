import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import hero1 from "/images/hero1.jpeg";
import hero2 from "/images/hero2.jpeg";
import hero3 from "/images/hero3.jpeg";

const images = [hero1, hero2, hero3];

function useCountUp(target, startAnim, duration = 2000, delay = 0, isFloat = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnim) return;

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      if (progress < delay) {
        animationFrame = requestAnimationFrame(animate);
        return;
      }

      const activeProgress = progress - delay;
      
      // Prevent overshoot
      if (activeProgress >= duration) {
        setCount(target);
        return;
      }

      // Easing curve for premium feel (easeOutExpo)
      const easeProgress = 1 - Math.pow(2, -10 * (activeProgress / duration));
      const rawValue = easeProgress * target;

      const value = Math.min(
        target,
        isFloat ? rawValue : Math.floor(rawValue)
      );

      setCount(value);
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [target, startAnim, duration, delay, isFloat]);

  return count;
}

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [startStats, setStartStats] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartStats(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const homes = useCountUp(500, startStats, 2000, 0);
  const years = useCountUp(10, startStats, 2000, 300);
  const rating = useCountUp(5, startStats, 2000, 600, true);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center pt-20"
    >
      {/* Background Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Howard County painters exterior painting Maryland ${index}`}    
          loading={index === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out
            ${index === current ? "opacity-100 scale-105" : "opacity-0 scale-100"} transform origin-center`}
        />
      ))}

      {/* Elegant Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/90" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[900px] mx-auto flex flex-col items-center justify-center text-center text-white px-6 mt-auto pt-[60px] pb-10 mb-[80px]">
        {/* Tag line with glassmorphism pill */}
        <div className="inline-flex items-center gap-2 mb-8 glass-dark px-5 py-2 rounded-full">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />  
          <span className="text-white/90 text-xs md:text-sm font-medium tracking-widest uppercase">
            Howard County, MD
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading mb-[20px] max-w-5xl leading-[1.1] text-white">
          Crafting Elegance Through{" "}
          <span className="text-secondary italic">Premium</span>{" "}
          <span className="text-white">Painting</span>
        </h1>

        <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-[30px] font-light leading-relaxed">
          Serving Central MD & DC Suburbs with premium residential and
          commercial painting services. Licensed & Fully Insured.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto mb-[50px] relative z-30 reveal-on-scroll delay-200">       
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-secondary text-white font-medium rounded-full hover:bg-white hover:text-primary shadow-lg hover:shadow-[0_0_30px_rgba(240,125,42,0.8)] transition-all duration-500 hover:scale-[1.03] text-lg"
          >
            Get A Free Estimate
          </Link>
          <Link
            to="/gallery"
            className="w-full sm:w-auto px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-500 hover:scale-[1.03] text-lg"
          >
            View Our Work
          </Link>
        </div>

        <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-white animate-pulse">  
          <Clock className="w-4 h-4 text-secondary" />
          <span className="font-medium text-sm tracking-wide">
            Limited slots available this month
          </span>
        </div>
      </div>

      {/* Trusted Stats — Glassmorphism bar */}
      <div 
        ref={statsRef}
        className="relative w-full z-20 -mt-[60px] px-6 pb-6"
      >
        <div className="max-w-[900px] mx-auto glass-dark rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.2)] py-6 px-10 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-2">
          
          <div className="text-center w-full">
            <p className={`text-3xl md:text-4xl font-heading text-white drop-shadow-[0_0_10px_rgba(240,125,42,0.2)] transition-all duration-700
              ${startStats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              {homes}+
            </p>
            <p className={`text-xs md:text-sm text-white/60 tracking-widest uppercase mt-1 transition-all duration-700 delay-100
              ${startStats ? "opacity-100" : "opacity-0"}`}>
              Homes Painted
            </p>
          </div>

          <div className="hidden sm:block h-12 w-px bg-white/20" />
          
          <div className="text-center w-full">
            <p className={`text-3xl md:text-4xl font-heading text-white drop-shadow-[0_0_10px_rgba(240,125,42,0.2)] transition-all duration-700 delay-[300ms]
              ${startStats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              {years}+
            </p> 
            <p className={`text-xs md:text-sm text-white/60 tracking-widest uppercase mt-1 transition-all duration-700 delay-[400ms]
              ${startStats ? "opacity-100" : "opacity-0"}`}>
              Years Experience
            </p>
          </div>

          <div className="hidden sm:block h-12 w-px bg-white/20" />
          
          <div className="text-center w-full flex flex-col items-center">       
            <p className={`text-3xl md:text-4xl font-heading text-white flex items-center justify-center gap-1 drop-shadow-[0_0_10px_rgba(240,125,42,0.2)] transition-all duration-700 delay-[600ms]
              ${startStats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              {rating.toFixed(1)} <span className="text-secondary text-2xl">★</span>
            </p>
            <p className={`text-xs md:text-sm text-white/60 tracking-widest uppercase mt-1 transition-all duration-700 delay-[700ms]
              ${startStats ? "opacity-100" : "opacity-0"}`}>
              Google Rating
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

