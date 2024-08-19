import { ParallaxBanner } from "react-scroll-parallax";
import SectionInner from "@/components/SectionInner";
import SectionParallax from "@/components/SectionParallax";

type HeroProps = {};

const Hero = ({}: HeroProps) => {
    return (
        <div className="section relative before:absolute before:top-0 before:left-1/2 before:bottom-0 before:-translate-x-1/2 before:w-0.5 before:bg-palette-8 lg:before:hidden">
            <div className="flex -mx-2.5 lg:block lg:mx-0">
                <div className="w-[calc(50%-1.25rem)] mx-2.5 lg:w-full lg:mx-0">
                    <SectionInner
                        className="2xl:px-11 lg:py-[12.8125rem] animate-fadeIn"
                        label="INTRO"
                    >
                        <div className="max-w-[29.75rem] -mt-3 -mb-2 mx-auto xl:-mt-2 xl:-mb-1 lg:max-w-[28.5rem] md:mt-0 md:mb-0">
                            <div className="-mr-2 mb-5.5 text-h2 xl:text-h3 md:text-h4 md:mb-6 md:mr-0">
                                Get unlimited&nbsp;high- quality, bespoke
                                designs with a simple monthly subscription.
                            </div>
                            <div className="max-w-[27.5rem] text-body-2 xl:max-w-[22.625rem] lg:max-w-[27rem] md:text-caption-2 md:max-w-full md:pr-5">
                                With over 20 years of experience and a vast
                                portfolio ranging from UI/UX design to 3D and
                                animation, we&apos;re stepping up the game by
                                offering our design by subscription service.
                            </div>
                        </div>
                    </SectionInner>
                </div>
                <div className="flex w-[calc(50%-1.25rem)] mx-2.5 lg:w-auto lg:-mx-2.5 lg:h-[48.75rem] lg:mt-2.5 lg:pt-2.5 lg:px-2.5 lg:border-t-2 lg:border-palette-8 md:h-[28rem]">
                    <ParallaxBanner
                        className="relative grow overflow-hidden rounded-xl lg:hidden"
                        layers={[
                            { image: "/images/hero-image.png", speed: -10 },
                        ]}
                    />
                    <SectionParallax className="relative hidden grow overflow-hidden rounded-xl lg:flex">
                        <ParallaxBanner
                            className="relative grow overflow-hidden rounded-xl"
                            layers={[
                                { image: "/images/hero-image.png", speed: -5 },
                            ]}
                        />
                    </SectionParallax>
                </div>
            </div>
        </div>
    );
};

export default Hero;
