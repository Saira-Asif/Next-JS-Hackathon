import Image from "next/image";
import Banner from "../components/Banner";
import {useState} from "react";

interface Product {
    id:number;
    name:string;
    price:number;
    image:string;
}


export default function Shop() {
return (
    <>
     {/* Banner Section */}
     <Banner pageName="Shop"/>
     <div className="bg-[#FAF4F4] h-auto md:h-[6.25rem] flex flex-row mt-[2.938rem]">
        <div className="ml-[6.125rem] my-[2.188rem] flex flex-row md:h-[1.875rem]">
            <Image
            src="/systemSetting.svg"
            alt="Setting Icon"
            width={19.05}
            height={16.67}
            className="cursor-pointer"/>
            <p className="text-xl font-normal leading-[1.875rem] pl-[0.75rem]">Filter</p>
        </div>
        <Image
        src="/ci_grid-big-round.svg"
        alt="Show Items as icons"
        width={28}
        height={28}
        className="ml-[1.438rem] cursor-pointer"
        />
        <Image 
        src="/bi_view-list.svg"
        alt="Show Items in a Gallery "
        width={24}
        height={24}
        className="ml-[1.5rem] cursor-pointer mr-[1.875rem]"
        />
        <div>
            <Image
            src="/Line4.svg"
            alt="Vertical Line"
            width={2}
            height={37}
            className="my-8"
            />
        </div>
     </div>
</>
)}