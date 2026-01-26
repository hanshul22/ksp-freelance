import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * A hook to initialize Lenis smooth scrolling with GSAP integration.
 * Handles reduced motion, mobile constraints, and cleanup.
 * 
 * @returns {Object} lenisRef - Reference to the Lenis instance
 */
const useSmoothScroll = () => {
    const lenisRef = useRef(null);

    useEffect(() => {
        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // Check if device is touch-based (simple check, can be expanded)
        const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

        // If reduced motion is preferred, we do not initialize smooth scrolling
        // to respect accessibility settings.
        if (prefersReducedMotion) {
            return;
        }

        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Default easing
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: isTouch ? 2 : 1, // Less inertia on touch
            infinite: false,
        });

        lenisRef.current = lenis;

        // Sync Lenis with GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);

        // Integrate GSAP's ticker with Lenis requestAnimationFrame
        const updateLenis = (time) => {
            lenis.raf(time * 1000);
        };
        
        gsap.ticker.add(updateLenis);

        // Disable GSAP lag smoothing to ensure sync with Lenis
        gsap.ticker.lagSmoothing(0);

        // Ensure ScrollTrigger is refreshed after Lenis init
        ScrollTrigger.refresh();

        // Handle Resize to update ScrollTrigger
        const handleResize = () => {
            ScrollTrigger.refresh();
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
            // Remove resize listener
            window.removeEventListener('resize', handleResize);

            // Remove GSAP ticker listener
            gsap.ticker.remove(updateLenis);

            // Destroy Lenis instance
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []); // Empty dependency array ensures this runs once on mount

    return lenisRef;
};

export default useSmoothScroll;
