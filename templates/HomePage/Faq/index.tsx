import SectionInner from "@/components/SectionInner";
import SectionParallax from "@/components/SectionParallax";
import Item from "./Item";

import { faqs } from "@/mocks/faqs";

type FaqProps = {};

const Faq = ({}: FaqProps) => {
    return (
        <div className="section border-b-2 rounded-b-3xl">
            <SectionParallax>
                <SectionInner className="lg:px-6 lg:pb-6" label="FAQ">
                    <div className="max-w-[60rem] -mt-3.5 mx-auto md:mt-0">
                        <div className="mb-[5.75rem] text-center text-h3 md:mb-14 md:text-left md:text-h4">
                            What you need to know.
                        </div>
                        <div className="border-2 border-palette-2 rounded-2xl">
                            {faqs.map((x, index) => (
                                <Item item={x} key={index} />
                            ))}
                        </div>
                    </div>
                </SectionInner>
            </SectionParallax>
        </div>
    );
};

export default Faq;
