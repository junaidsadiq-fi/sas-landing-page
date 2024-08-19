import { useEffect, useState, useRef } from "react";

type SectionParallaxProps = {
    className?: string;
    children: React.ReactNode;
};

const SectionParallax = ({ className, children }: SectionParallaxProps) => {
    const [scrollOffset, setScrollOffset] = useState(0);
    const [opacity, setOpacity] = useState(0.1);
    const sectionRef = useRef<any>(null);

    const handleScroll = () => {
        const newScrollOffset = window.scrollY;
        setScrollOffset(newScrollOffset);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const windowHeight = window.innerHeight;
        const sectionTop =
            sectionRef.current.getBoundingClientRect().top + window.scrollY;
        const scrollDistance = window.scrollY + windowHeight - sectionTop;

        if (scrollDistance >= 0) {
            const newOpacity = Math.min(
                1,
                0.1 + scrollDistance / (windowHeight * 0.5)
            );
            setOpacity(newOpacity);
        }
    }, [scrollOffset]);

    return (
        <div
            className={`will-change-transform-opacity transition-opacity ${
                className || ""
            }`}
            ref={sectionRef}
            style={{ opacity: opacity }}
        >
            {children}
        </div>
    );
};

export default SectionParallax;
