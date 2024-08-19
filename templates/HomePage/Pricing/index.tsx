import SectionInner from "@/components/SectionInner";
import SectionParallax from "@/components/SectionParallax";
import Category from "./Category";
import Item from "./Item";

import { categories } from "@/mocks/categories";
import { pricing } from "@/constants/pricing";

type PricingProps = {};

const Pricing = ({}: PricingProps) => {
    return (
        <div className="section">
            <SectionParallax>
                <SectionInner
                    className="pb-32 3xl:pb-[9.375rem] 2xl:pb-[9rem] xl:px-16 lg:px-10 lg:pb-[7.0625rem] md:pb-[4.7rem] md:overflow-hidden"
                    label="Pricing"
                >
                    <div className="max-w-[33.75rem] -mt-3.5 mx-auto mb-20 text-center text-h3 3xl:mb-15 lg:mb-20 md:mt-0 md:mb-12 md:text-left md:text-h4">
                        Flexible pricing options for all things design.
                    </div>
                    <div className="flex flex-wrap justify-center max-w-[72rem] mx-auto -mt-4.5 2xl:-mt-7 lg:-mt-10 md:max-w-max md:-mt-6 md:-mx-18">
                        {categories.map((category) => (
                            <Category item={category} key={category.id} />
                        ))}
                    </div>
                </SectionInner>
            </SectionParallax>
            <div className="relative flex flex-wrap mt-2.5 -mx-2.5 -mb-2.5 before:absolute before:top-0 before:left-1/3 before:bottom-0 before:-translate-x-1/3 before:w-0.5 before:bg-palette-8 after:absolute after:top-0 after:right-1/3 after:bottom-0 after:translate-x-1/3 after:w-0.5 after:bg-palette-8 xl:after:hidden xl:before:left-1/2 lg:before:hidden">
                {pricing.map((price, index) => (
                    <Item item={price} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Pricing;
