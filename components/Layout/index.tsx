import Header from "@/components/Header";
import Footer from "@/components/Footer";

type LayoutProps = {
    navigation?: any;
    children: React.ReactNode;
};

const Layout = ({ navigation, children }: LayoutProps) => {
    return (
        <div className="min-h-screen pt-[7.875rem] overflow-hidden md:pt-[5.625rem]">
            <Header navigation={navigation} />
            <div className="max-w-[120rem] mx-auto px-3">{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
