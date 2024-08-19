import { useRef, forwardRef, useEffect, Ref } from "react";
import { motion, useAnimation } from "framer-motion";
import useMousePosition from "@/utils/useMousePosition";

type ButtonProps = {
    className?: string;
    href?: string;
    target?: string;
    children?: React.ReactNode;
};

const Button = forwardRef(
    (
        { className, href, target, children }: ButtonProps,
        ref: Ref<HTMLAnchorElement>
    ) => {
        const { mouseX, mouseY } = useMousePosition();
        const textRef = useRef<HTMLSpanElement | null>(null);
        const fillControls = useAnimation();

        useEffect(() => {
            let x = 0;
            let y = 0;

            if (ref && "current" in ref && ref.current) {
                const node = ref.current;

                const rect = node.getBoundingClientRect();

                // MAGNITIC ANIMATION
                // const distanceMouseButtonTop = rect.top + rect.height / 2;
                // const distanceMouseButtonLeft = rect.left + rect.width / 2;

                // if (
                //     distanceMouseButtonTop + rect.height * 2.5 > mouseY! &&
                //     distanceMouseButtonTop - rect.height * 2.5 < mouseY! &&
                //     distanceMouseButtonLeft + rect.width > mouseX! &&
                //     distanceMouseButtonLeft - rect.width < mouseX!
                // ) {
                //     x = (mouseX! - distanceMouseButtonLeft) * 0.2;
                //     y = (mouseY! - distanceMouseButtonTop) * 0.2;

                //     node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
                //     if (textRef.current) {
                //         textRef.current.style.transform = `translate3d(${
                //             x / 4
                //         }px, ${y / 4}px, 0)`;
                //     }
                // } else {
                //     node.style.transform = `translate3d(0, 0, 0)`;
                //     if (textRef.current) {
                //         textRef.current.style.transform = `translate3d(0, 0, 0)`;
                //     }
                // }

                const handleMouseEnter = () => {
                    fillControls.start({
                        opacity: 1,
                        y: ["80%", "-10%"],
                        transition: {
                            ease: [0.19, 1, 0.22, 1],
                            duration: 0.55,
                        },
                    });
                };

                const handleMouseLeave = () => {
                    fillControls.start({
                        opacity: 1,
                        y: "-80%",
                        transition: {
                            ease: [0.19, 1, 0.22, 1],
                            duration: 0.55,
                        },
                    });
                };

                node.addEventListener("mouseenter", handleMouseEnter);
                node.addEventListener("mouseleave", handleMouseLeave);

                return () => {
                    node.removeEventListener("mouseenter", handleMouseEnter);
                    node.removeEventListener("mouseleave", handleMouseLeave);
                };
            }
        }, [mouseX, mouseY, ref, fillControls]);

        return (
            <a
                className={`group relative inline-flex items-center justify-center h-12 px-4.5 pb-0.5 bg-transparent overflow-hidden rounded-full text-base-2 text-palette-7 outline-none transition-transform ease-[cubic-bezier(0.075,0.82,0.165,1)] duration-[650ms] before:absolute before:inset-0 before:z-20 before:border-3 before:border-palette-7 before:rounded-full before:transition-colors hover:before:border-palette-11 ${
                    className || ""
                }`}
                ref={ref}
                href={href}
                target={target}
                rel="noopener noreferrer"
            >
                <span
                    className="relative z-[20] text-transparent"
                    ref={textRef}
                >
                    <div
                        className="block before:content-[attr(data-text)] before:absolute before:top-1/2 before:left-1/2 before:-ml-[50%] before:translate-y-[-50%] before:whitespace-nowrap before:text-palette-7 before:transition-transform before:ease-[cubic-bezier(0.075,0.82,0.165,1)] before:duration-[650ms] after:content-[attr(data-text)] after:absolute after:top-1/2 after:left-1/2 after:-ml-[50%] after:translate-y-[140%] after:whitespace-nowrap after:text-palette-1 after:opacity-0 after:transition-transform after:ease-[cubic-bezier(0.075,0.82,0.165,1)] after:duration-[650ms] group-hover:before:translate-y-[-300%] group-hover:after:translate-y-[-50%] group-hover:after:opacity-100"
                        data-text={children}
                    >
                        {children}
                    </div>
                </span>
                <motion.div
                    className="absolute z-10 -top-1/2 -left-1/4 block w-[150%] h-[250%] translate-y-[80%] opacity-0 rounded-[50%] bg-palette-11 pointer-events-none"
                    animate={fillControls}
                />
            </a>
        );
    }
);

Button.displayName = "Button";

export default Button;
