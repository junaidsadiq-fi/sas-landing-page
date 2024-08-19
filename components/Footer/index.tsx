import { socials } from "@/constants/socials";

type FooterProps = {};

const Footer = ({}: FooterProps) => (
    <div className="relative py-20 before:absolute before:top-0 before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-palette-8 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-[9.5rem] after:h-[9.5rem] after:border-2 after:border-palette-8 after:rounded-full md:py-22">
        <div className="flex items-center h-20 max-w-[97.75rem] mx-auto px-18 xl:justify-center md:h-16">
            <div className="text-base-1 text-palette-5 xl:absolute xl:left-9 xl:bottom-6 md:hidden">
                © 2023, YourStudio LLC.
            </div>
            <div className="absolute top-1/2 left-1/2 z-2 -translate-x-1/2 -translate-y-1/2 flex items-center h-20 px-16 space-x-16 rounded-full border-2 border-palette-8 bg-palette-9 xl:static xl:translate-x-0 xl:translate-y-0 md:h-16 md:px-12 md:space-x-10">
                {socials.map((social) => (
                    <a
                        className="group"
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={social.id}
                    >
                        <svg
                            className="fill-palette-5 transition-colors group-hover:fill-palette-11"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                        >
                            <path d={social.icon} />
                        </svg>
                    </a>
                ))}
            </div>
            <div className="flex items-center ml-auto xl:absolute xl:right-9 xl:bottom-6 xl:ml-0 md:hidden">
                <a
                    className="text-base-1 text-palette-5 transition-colors hover:text-palette-1"
                    href="https://ui8.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Terms
                </a>
                <div className="w-0.25 h-4 mx-10 bg-palette-5"></div>
                <a
                    className="text-base-1 text-palette-5 transition-colors hover:text-palette-1"
                    href="https://ui8.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Privacy
                </a>
            </div>
        </div>
    </div>
);

export default Footer;
