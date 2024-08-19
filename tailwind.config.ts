import type { Config } from 'tailwindcss';
import plugin from "tailwindcss/plugin";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./templates/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            "3xl": { max: "1719px" },
            // => @media (max-width: 1719px) { ... }
            "2xl": { max: "1419px" },
            // => @media (max-width: 1419px) { ... }
            xl: { max: "1179px" },
            // => @media (max-width: 1179px) { ... }
            lg: { max: "1023px" },
            // => @media (max-width: 1023px) { ... }
            md: { max: "767px" },
            // => @media (max-width: 767px) { ... }
            sm: { max: "480px" },
            // => @media (max-width: 480px) { ... }
        },
        extend: {
            colors: {
                palette: {
                    1: "#FDFDFE",
                    2: "#EAEAEA",
                    3: "#ADB7BE",
                    4: "#B9C1C7",
                    5: "#6B7C88",
                    6: "#445266",
                    7: "#2C2C2C",
                    8: "#242528",
                    9: "#121212",
                    10: "#FE5F3C",
                    11: "#2D68FF",
                },
            },
            zIndex: {
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
            },
            spacing: {
                0.25: "0.0625rem",
                0.75: "0.1875rem",
                4.5: "1.125rem",
                5.5: "1.375rem",
                6.5: "1.75rem",
                7.5: "1.875rem",
                8.5: "2.125rem",
                9.5: "2.375rem",
                13: "3.25rem",
                15: "3.75rem",
                17: "4.25rem",
                18: "4.5rem",
                19: "4.75rem",
                21: "5.25rem",
                22: "5.5rem",
                25: "6.25rem",
                26: "6.5rem",
                30: "7.5rem",
                34: "8.5rem",
                38: "9.5rem",
                42: "10.5rem",
                54: "13.5rem",
                58: "14.5rem",
            },
            transitionDuration: {
                DEFAULT: "200ms",
            },
            transitionTimingFunction: {
                DEFAULT: "linear",
            },
            borderWidth: {
                DEFAULT: "0.0625rem",
                0: "0",
                2: "0.125rem",
                3: "0.1875rem",
                4: "0.25rem",
                8: "0.5rem",
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
                noto: ["var(--font-noto)"],
                source: ["var(--font-source)"],
            },
            fontSize: {
                0: ["0px", "0px"],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            keyframes: {
                fadeIn: {
                  '0%': { opacity: "0.1" },
                  '100%': { opacity: '1' },
                }
            },
            animation: {
                fadeIn: 'fadeIn 1.5s ease-out',
            },
        },
    },
    plugins: [
        plugin(function ({ addBase, addComponents, addUtilities }) {
            addBase({
                html: {
                    "@apply text-[1rem]": {},
                },
            });
            addComponents({
                ".section": {
                    "@apply py-2.5 px-2.5 border-2 border-b-0 border-palette-8":
                        {},
                },
                ".btn": {
                    "@apply inline-flex items-center justify-center h-12 px-5.5 pb-0.5 bg-palette-7 rounded-full border-3 border-palette-7 text-base-2 text-palette-1 transition-colors hover:bg-palette-11 hover:border-palette-11":
                        {},
                },
                ".btn svg": {
                    "@apply fill-inherit first:mr-2.5 last:ml-2.5": {},
                },
                ".btn img": {
                    "@apply first:mr-2.5 last:ml-2.5": {},
                },
                ".btn-stroke": {
                    "@apply btn bg-transparent text-palette-7 hover:bg-palette-11 hover:border-transparent hover:text-palette-1":
                        {},
                },
                ".text-h1": {
                    "@apply font-noto text-[4rem] leading-none font-medium -tracking-[.02em]":
                        {},
                },
                ".text-h2": {
                    "@apply font-noto text-[3.5rem] leading-[4rem] font-medium -tracking-[.02em]":
                        {},
                },
                ".text-h3": {
                    "@apply font-noto text-[2.75rem] leading-[3.5rem] font-medium -tracking-[.02em]":
                        {},
                },
                ".text-h4": {
                    "@apply font-noto text-[1.75rem] leading-[2.5rem] font-medium -tracking-[.02em]":
                        {},
                },
                ".text-h5": {
                    "@apply font-noto text-[1.125rem] leading-[1.5rem] font-medium -tracking-[.02em]":
                        {},
                },
                ".text-body-1": {
                    "@apply text-[1.375rem] leading-[1.5rem] font-semibold -tracking-[.02em]":
                        {},
                },
                ".text-body-2": {
                    "@apply text-[1.25rem] leading-[2rem] -tracking-[.02em]":
                        {},
                },
                ".text-base-1": {
                    "@apply font-source text-[1rem] leading-[1.5rem] -tracking-[.02em]":
                        {},
                },
                ".text-base-2": {
                    "@apply font-source text-[1rem] leading-[1.5rem] font-bold -tracking-[.02em]":
                        {},
                },
                ".text-hairline": {
                    "@apply font-source text-[0.75rem] leading-[1rem] font-bold tracking-[.02em] uppercase":
                        {},
                },
                ".text-caption-1": {
                    "@apply text-[1.125rem] leading-[1.5rem] font-semibold -tracking-[.02em]":
                        {},
                },
                ".text-caption-2": {
                    "@apply text-[1rem] leading-[1.75rem] -tracking-[.02em]":
                        {},
                },
            });
            addUtilities({
                ".tap-highlight-color": {
                    "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
                },
                ".will-change-transform-opacity": {
                    "will-change": "transform, opacity",
                },
            });
        }),
    ],
}
export default config
