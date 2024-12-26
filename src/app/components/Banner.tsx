import Image from "next/image";
import Link from "next/link";
import BannerImage from "/public/Banner.jpeg";
import favicon from "/public/favicon.svg";

interface BannerProps {
    pageName:string;
}

export default function Banner({pageName}:BannerProps){
    return (
        <div>
            <div className="w-full md:h-[50vh] h-[30vh] relative">
        <div className="absolute backdrop-blur-md bg-black opacity-30"></div>
        <Image
          src={BannerImage}
          alt="main image"
          className="object-cover w-full h-full opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
    
                <Image
                src={favicon}
                alt="logo"
                className="w-17 h-17 pt-14"
                />
            
          <h2 className="font-medium text-[48px]">{pageName}</h2>
          <h3 className="font-medium text-base">
            <Link href="/">
              <span className="hover:text-white cursor-pointer transition-all duration-300 mr-[6px]">
                Home
              </span>
            </Link>
            <span className="hover:text-white cursor-default transition-all duration-300">
              &gt; <span className="font-light">{pageName}</span>
            </span>
          </h3>
        </div>
      </div>
        </div>
    )
}