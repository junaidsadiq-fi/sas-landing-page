import { Link as LinkScroll } from "react-scroll";
import { RefObject, useEffect, useState } from "react";
import useDynamicRefs from "use-dynamic-refs";
import Link from "next/link";
import useHover from "@/utils/useHover";
import Image from "@/components/Image";
import Button from "@/components/Button";

type NavigationType = {
    id: string;
    title: string;
    anchor: any;
};

type HeaderProps = {
    navigation: NavigationType[];
};

const Header = ({ navigation }: HeaderProps) => {
    const [activeId, setActiveId] = useState<string | null>(null);
    const [getRef, setRef] = useDynamicRefs();
    const [left, setLeft] = useState<number>(0);
    const [width, setWidth] = useState<number>(0);
    const [hoverRef, isHovered] = useHover<HTMLAnchorElement>();

    useEffect(() => {
        if (activeId !== null) {
            const activeRef: any = getRef(activeId.toString());

            if (activeRef && activeRef.current) {
                setLeft(activeRef.current.offsetLeft);
                setWidth(activeRef.current.offsetWidth);
            }
        } else {
            setLeft(0);
            setWidth(0);
        }
    }, [getRef, activeId]);

    return (
        <header className="fixed top-0 left-0 right-0 z-10 transition-all before:absolute before:inset-0 before:-z-1 before:bg-palette-9/90 before:backdrop-blur">
            <div className="max-w-[120rem] mx-auto pt-3 px-3">
                <div className="border-2 border-palette-8 rounded-t-3xl p-2.5">
                    <div className="flex h-[5.75rem] md:h-14">
                        <div className="flex items-center grow px-8 bg-palette-1 rounded-xl md:w-14 md:pl-1.5 md:grow-0 md:pr-0">
                            <Link
                                className="w-14 mr-12 lg:mr-6 md:w-10 md:mx-auto"
                                href="/"
                            >
                                <Image
                                    className="w-full opacity-100"
                                    src="/images/smart.png"
                                    width={100}
                                    height={100}
                                    alt=""
                                />
                            </Link>
                            <div className="relative mr-auto lg:mr-0 md:hidden">
                                <div
                                    className="absolute top-0 bottom-0 w-20 bg-palette-2 rounded-lg transition-all duration-[700ms] ease-out"
                                    style={{ left: left, width: width }}
                                ></div>
                                <div className="flex space-x-8 lg:space-x-5">
                                    {navigation.map((button) => (
                                        <div className="" key={button.id}>
                                            <div
                                                ref={
                                                    setRef(
                                                        button.id
                                                    ) as RefObject<HTMLDivElement>
                                                }
                                                onClick={() =>
                                                    setActiveId(button.id)
                                                }
                                            >
                                                <LinkScroll
                                                    className="relative z-1 flex justify-center items-center h-[1.875rem] px-2 rounded-lg text-base-1 cursor-pointer tap-highlight-color transition-colors hover:text-palette-11 xl:hover:text-palette-7"
                                                    activeClass="!text-palette-7"
                                                    to={button.anchor}
                                                    spy={true}
                                                    offset={-126}
                                                    onSetInactive={() => {
                                                        button.id === "0" &&
                                                            setActiveId(null);
                                                    }}
                                                    onSetActive={() =>
                                                        setActiveId(button.id)
                                                    }
                                                >
                                                    {button.title}
                                                </LinkScroll>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="shrink-0 w-0.5 mx-3 -my-2.5 bg-palette-8"></div>
                        <div className="group relative flex w-[13.75rem] lg:w-[11.25rem] md:grow md:w-auto">
                            <Button
                                className="grow !h-auto !bg-palette-1 rounded-xl before:!hidden"
                                ref={hoverRef}
                                href="https://calendly.com"
                                target="_blank"
                            >
                                Let’s talk
                            </Button>
                            <svg
                                className="absolute z-30 top-4 right-4 fill-palette-4 transition-colors pointer-events-none group-hover:fill-palette-1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                fill="none"
                                viewBox="0 0 10 10"
                            >
                                <path d="M2.727.909A.91.91 0 0 1 3.636 0h5.455A.91.91 0 0 1 10 .909v5.455a.91.91 0 0 1-.909.909.91.91 0 0 1-.909-.909v-3.26l-6.63 6.63a.91.91 0 0 1-1.286 0 .91.91 0 0 1 0-1.286l6.63-6.63h-3.26a.91.91 0 0 1-.909-.909z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
