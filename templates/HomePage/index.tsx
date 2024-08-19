"use client";

import { Element } from "react-scroll";
import Layout from "@/components/Layout";
import Hero from "./Hero";
import Benefits from "./Benefits";
import Portfolio from "./Portfolio";
import Pricing from "./Pricing";
import Faq from "./Faq";

const HomePage = () => {
    const navigation = [
        {
            id: "0",
            title: "Benefits",
            anchor: "benefits",
        },
        {
            id: "1",
            title: "Portfolio",
            anchor: "portfolio",
        },
        {
            id: "2",
            title: "Pricing",
            anchor: "pricing",
        },
        {
            id: "3",
            title: "FAQ",
            anchor: "faq",
        },
    ];

    return (
        <Layout navigation={navigation}>
            <Hero />
            <Element name="benefits">
                <Benefits />
            </Element>
            <Element name="portfolio">
                <Portfolio />
            </Element>
            <Element name="pricing">
                <Pricing />
            </Element>
            <Element name="faq">
                <Faq />
            </Element>
        </Layout>
    );
};

export default HomePage;
