import useHover from "@/utils/useHover";
import SectionParallax from "@/components/SectionParallax";
import Button from "@/components/Button";

type ItemProps = {
    item: any;
};

const Item = ({ item }: ItemProps) => {
    const [hoverRef, isHovered] = useHover<HTMLAnchorElement>();

    return (
        <div className="w-1/3 p-2.5 border-t-2 border-palette-8 xl:w-1/2 xl:last:relative xl:last:z-2 xl:last:w-full xl:last:bg-palette-9 lg:w-full">
            <SectionParallax>
                <div className="p-12 bg-palette-1 rounded-xl md:p-6 md:pb-7">
                    <div
                        className={`mb-1 text-h4 ${
                            item.title === "Plus"
                                ? "text-palette-10"
                                : item.title === "Ultra"
                                ? "text-palette-11"
                                : "text-palette-5"
                        }`}
                    >
                        {item.title}
                    </div>
                    <div className="flex mb-2">
                        <div className="text-h1">${item.price}</div>
                        <div className="mt-2 text-h5">/mo</div>
                    </div>
                    <div className="mb-10 pb-10 border-b-2 border-palette-3/25 text-palette-5">
                        {item.description}
                    </div>
                    <div className="mb-10 space-y-5">
                        {item.parameters.map(
                            (parameter: any, index: number) => (
                                <div
                                    className="flex items-center text-caption-1 text-palette-6 md:min-h-[2rem]"
                                    key={index}
                                >
                                    <div className="relative w-8 h-8 mr-3 rounded-full border-2 border-palette-3/10 before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-palette-4 before:rounded-full md:hidden"></div>
                                    {parameter}
                                </div>
                            )
                        )}
                    </div>
                    <Button
                        ref={hoverRef}
                        href="https://calendly.com"
                        target="_blank"
                    >
                        Book a call
                    </Button>
                </div>
            </SectionParallax>
        </div>
    );
};

export default Item;
