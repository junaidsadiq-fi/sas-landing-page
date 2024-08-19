import SectionInner from "@/components/SectionInner";
import Image from "@/components/Image";
import SectionParallax from "@/components/SectionParallax";

import { benefits } from "@/constants/benefits";

type BenefitsProps = {};

const Benefits = ({}: BenefitsProps) => {
    return (
        <div className="section">
            <SectionParallax>
                <SectionInner
                    className="px-[8.25rem] 2xl:px-40 xl:px-18 lg:px-[5.875rem]"
                    label="BENEFITS"
                >
                    <div className="max-w-[70.5rem] mx-auto">
                        <div className="-mt-3.5 mb-12 text-center md:mt-0 md:mb-14 md:text-left">
                            <div className="mb-1.5 text-h3 md:mb-2 md:text-h4">
                                Unparalleled convenience
                            </div>
                            <div className="text-body-2 md:text-caption-2">
                                Awesome design meets endless possibilities.
                            </div>
                        </div>
                        <div className="flex flex-wrap -mt-6 -mx-8 md:block md:m-0">
                            {benefits.map((benefit, index) => (
                                <div
                                    className="benefits-item w-[calc(25%-4rem)] mt-16 mx-8 2xl:w-[calc(33.333%-4rem)] lg:w-[calc(50%-4rem)] md:w-full md:m-0 md:mt-8"
                                    key={index}
                                >
                                    <div className="relative w-25 h-25 mb-[2.0625rem] md:w-16 md:h-16 md:mb-4">
                                        <div className="benefits-preview absolute top-1/2 left-[45%] flex justify-center items-center w-40 h-40 -translate-x-1/2 -translate-y-1/2">
                                            <Image
                                                className="md:scale-[0.65]"
                                                src={benefit.image.src}
                                                width={benefit.image.width}
                                                height={benefit.image.height}
                                                alt=""
                                                quality={100}
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-2 text-h5">
                                        {benefit.title}
                                    </div>
                                    <div className="text-palette-6">
                                        {benefit.content}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </SectionInner>
            </SectionParallax>
        </div>
    );
};

export default Benefits;
