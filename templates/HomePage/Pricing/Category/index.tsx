import Image from "@/components/Image";

type CategoryProps = {
    item: any;
};

const Category = ({ item }: CategoryProps) => (
    <div className="relative category mx-3 mt-4 2xl:mt-7 lg:mt-10 md:mt-6 md:-mx-4 md:text-center">
        <Image
            className="relative z-1 opacity-100 md:w-[70%]"
            src={item.image.src}
            width={item.image.width}
            height={item.image.height}
            alt=""
        />
        <Image
            className="category-shadow absolute top-1/2 left-1/2 opacity-100 md:w-[70%]"
            src={item.shadow.src}
            width={item.image.width}
            height={item.shadow.height}
            alt=""
        />
    </div>
);

export default Category;
