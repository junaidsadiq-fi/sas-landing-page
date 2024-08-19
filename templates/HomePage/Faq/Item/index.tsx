import { useState } from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

type ItemProps = {
    item: any;
};

const Item = ({ item }: ItemProps) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className="border-b-2 border-palette-2 last:border-b-0">
            <div
                className="group flex justify-between px-8 py-7.5 cursor-pointer"
                onClick={() => setOpen(!open)}
            >
                <div className="pt-1 text-body-1 transition-colors md:pt-0 md:text-caption-1">
                    {item.title}
                </div>
                <div
                    className={`relative shrink-0 w-8 h-8 ml-6 rounded-full border-2 border-palette-7/10 transition-colors before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-4 before:h-0.5 before:bg-palette-7 before:transition-all after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-0.5 after:h-4 after:bg-palette-7 after:transition-all group-hover:border-palette-11/10 group-hover:before:bg-palette-11 group-hover:after:bg-palette-11 md:mt-1 ${
                        open
                            ? "!border-palette-7/10 before:!bg-palette-7 after:!bg-palette-7 after:rotate-90"
                            : ""
                    }`}
                ></div>
            </div>
            <div className={`transition-all ${open ? "pb-7.5" : ""}`}>
                <SlideDown className="faq-content px-8 text-palette-6">
                    {open ? item.content : null}
                </SlideDown>
            </div>
        </div>
    );
};

export default Item;
