import Link from "next/link";
import { slideItem } from "../navigate";
import Image from "next/image";
const SlideImage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5">
      {slideItem?.map((item) => (
        <div key={item?.name} className="flex flex-col items-center gap-y-3">
          <Link href={"/about"}>
            <Image src={item?.image} alt="yogaImage" />
          </Link>
          <h1 className="text-xl text-gray-500 font-titleFont">{item?.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default SlideImage;
