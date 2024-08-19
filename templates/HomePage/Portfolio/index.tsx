import { ParallaxBanner } from "react-scroll-parallax";
import SectionInner from "@/components/SectionInner";
import Image from "@/components/Image";
import SectionParallax from "@/components/SectionParallax";

import { portfolio } from "@/mocks/portfolio";

type PortfolioProps = {};

const Portfolio = ({}: PortfolioProps) => {
    return (
        <div className="section">
            <SectionParallax>
                <SectionInner
                    className="pb-0 xl:px-14 lg:px-10 md:pb-0"
                    label="PORTFOLIO"
                >
                    <div className="max-w-[70.5rem] mx-auto 2xl:max-w-[58.5rem]">
                        <div className="-mt-3.5 mb-22 text-center md:mt-0 md:mb-8 md:text-left">
                            <div className="mb-1.5 text-h3 md:mb-2 md:text-h4">
                                Recent projects
                            </div>
                            <div className="text-body-2 md:text-caption-2">
                                Behold the magic of true creative craftsmanship.
                            </div>
                        </div>
                        <ParallaxBanner
                            className="relative h-[50.125rem] overflow-hidden rounded-t-2xl 3xl:h-[34.125rem] lg:h-[30rem] md:h-auto md:aspect-[1.45]"
                            layers={[
                                {
                                    image: "/images/preview.png",
                                    speed: 5,
                                },
                            ]}
                        />
                    </div>
                </SectionInner>
            </SectionParallax>
            <div className="relative flex flex-wrap mt-2.5 -mx-2.5 -mb-2.5 before:absolute before:top-0 before:left-1/2 before:bottom-0 before:-translate-x-1/2 before:w-0.5 before:bg-palette-8 lg:before:hidden">
                {portfolio.map((image, index) => (
                    <div
                        className="w-1/2 p-2.5 border-t-2 border-palette-8 lg:w-full"
                        key={index}
                    >
                        <SectionParallax>
                            <div className="relative h-[43.375rem] overflow-hidden rounded-xl 3xl:h-[34.75rem] 2xl:h-[26.5625rem] xl:h-[22.5rem] lg:h-[33.5rem] md:h-auto md:aspect-[1.362]">
                                <Image
                                    className="object-cover"
                                    src={image}
                                    fill
                                    sizes="(max-width: 1023px) 100vw, 50vw"
                                    alt=""
                                />
                            </div>
                        </SectionParallax>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
