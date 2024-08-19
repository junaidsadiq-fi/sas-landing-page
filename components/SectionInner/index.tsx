import { twMerge } from "tailwind-merge";

type SectionInnerProps = {
    className?: string;
    label: string;
    children: React.ReactNode;
};

const SectionInner = ({ className, label, children }: SectionInnerProps) => (
    <div
        className={twMerge(
            `relative px-20 py-40 bg-palette-1 rounded-xl before:absolute before:top-[2.3125rem] before:right-[2.3125rem] before:w-1.5 before:h-1.5 before:bg-palette-2 before:rounded-full before:pointer-events-none md:px-6 md:py-22 ${
                className || ""
            }`
        )}
    >
        <div className="absolute top-6 left-6 flex items-center text-hairline text-palette-5">
            <div className="relative w-8 h-8 mr-2.5 border border-palette-2 rounded-full before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-palette-10 before:rounded-full"></div>
            {label}
        </div>
        <div className="absolute left-[2.3125rem] right-[2.3125rem] bottom-[2.3125rem] flex justify-between pointer-events-none before:w-1.5 before:h-1.5 before:bg-palette-2 before:rounded-full after:w-1.5 after:h-1.5 after:bg-palette-2 after:rounded-full"></div>
        {children}
    </div>
);

export default SectionInner;
